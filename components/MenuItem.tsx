'use client';

import { motion } from 'framer-motion';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  imageAlt: string;
}

export default function MenuItem({ name, description, price, image, imageAlt }: MenuItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#f3a42a]">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-[#1a1a20] text-base leading-tight">{name}</h3>
          <span className="text-[#f3a42a] font-black text-base whitespace-nowrap">
            ${price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{description}</p>
      </div>
    </motion.article>
  );
}
