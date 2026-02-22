/**
 * Uncle Potato - UberEats Menu Image Scraper
 *
 * Setup:
 *   npm install playwright
 *   npx playwright install chromium
 *
 * Run:
 *   node scrape_uncle_potato.js
 *
 * Images will be saved to ./uncle_potato_images/
 */

import { chromium } from 'playwright';
import https from 'https';
import fs from 'fs';
import path from 'path';

const URL = 'https://www.ubereats.com/ca/store/uncle-potato-halal/OeFuMSCCQtmxWlRjPSYxyg';
const OUTPUT_DIR = './uncle_potato_images';

function sanitizeFilename(name) {
  return name
    .replace(/[^a-z0-9]/gi, '_')
    .replace(/_+/g, '_')
    .toLowerCase();
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      })
      .on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
  });
}

(async () => {
  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Set a real user agent to avoid bot detection
  await page.setExtraHTTPHeaders({
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });

  console.log('Opening UberEats page...');
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });

  // Wait for menu items to load
  await page.waitForTimeout(3000);

  // Scroll down slowly to trigger lazy-loading of all images
  console.log('Scrolling to load all images...');
  let previousHeight = 0;
  while (true) {
    const currentHeight = await page.evaluate(() => {
      window.scrollBy(0, 600);
      return document.body.scrollHeight;
    });
    await page.waitForTimeout(800);
    const newHeight = await page.evaluate(() => document.body.scrollHeight);
    if (newHeight === previousHeight) break;
    previousHeight = newHeight;
  }

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  // Extract all menu item images with their names
  console.log('Extracting menu item images...');
  const menuItems = await page.evaluate(() => {
    const results = [];
    const seen = new Set();

    // UberEats menu items are typically in list items with an image and a title
    const itemEls = document.querySelectorAll('[data-testid="rich-text"], li');

    // Broader approach: find all images that look like food photos
    const allImgs = document.querySelectorAll('img');
    allImgs.forEach((img) => {
      const src = img.src || img.getAttribute('src') || '';
      // UberEats food images are hosted on tb-static.uber.com or cloudfront
      if (!src || seen.has(src)) return;
      if (!src.includes('uber.com') && !src.includes('cloudfront')) return;
      if (src.includes('svg') || src.includes('icon') || src.includes('logo')) return;

      // Try to find associated menu item name
      let name = '';
      // Walk up the DOM to find a container with text
      let el = img.parentElement;
      for (let i = 0; i < 6; i++) {
        if (!el) break;
        const textEl = el.querySelector('h3, h4, [data-testid="rich-text"], span');
        if (textEl && textEl.innerText && textEl.innerText.trim().length > 2) {
          name = textEl.innerText.trim().split('\n')[0];
          break;
        }
        el = el.parentElement;
      }

      seen.add(src);
      results.push({ src, name: name || `item_${results.length + 1}` });
    });

    return results;
  });

  console.log(`Found ${menuItems.length} images. Downloading...`);

  let downloaded = 0;
  for (let i = 0; i < menuItems.length; i++) {
    const { src, name } = menuItems[i];
    const safeName = sanitizeFilename(name);
    const filename = `${String(i + 1).padStart(2, '0')}_${safeName}.jpg`;
    const filepath = path.join(OUTPUT_DIR, filename);

    try {
      await downloadImage(src, filepath);
      console.log(`  ✓ ${filename}`);
      downloaded++;
    } catch (err) {
      console.log(`  ✗ Failed: ${name} — ${err.message}`);
    }
  }

  await browser.close();
  console.log(`\nDone! ${downloaded} images saved to ${OUTPUT_DIR}/`);
})();
