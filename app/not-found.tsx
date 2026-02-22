import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-[#1a1a20] min-h-screen flex items-center justify-center px-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="text-center max-w-md">
        {/* Brand accent */}
        <div className="text-[#f3a42a] font-black text-8xl mb-4" aria-hidden="true">404</div>

        {/* Icon */}
        <div className="text-5xl mb-6" aria-hidden="true">🥔</div>

        <h1 className="text-3xl font-black text-white mb-3">Page Not Found</h1>
        <p className="text-white/60 text-lg mb-2">Page introuvable</p>
        <p className="text-white/40 text-base mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link
          href="/en"
          className="inline-flex items-center gap-2 bg-[#f3a42a] text-[#1a1a20] font-bold px-8 py-3 rounded-xl text-lg hover:bg-[#d4911f] transition-all hover:scale-105"
        >
          Go Home
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
