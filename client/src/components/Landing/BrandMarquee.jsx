import React from 'react';
import {
  FaGithub,
  FaPinterest,
  FaUniversity,
  FaGlasses,
  FaFilm,
  FaXing,
  FaSwatchbook,
} from 'react-icons/fa';

const brands = [
  { icon: <FaGlasses />, name: 'Warby Parker' },
  { icon: <FaSwatchbook />, name: 'Swatch Group' },
  { icon: <FaPinterest />, name: 'Pinterest' },
  { icon: <FaUniversity />, name: 'University of Kentucky' },
  { icon: <FaGithub />, name: 'GitHub' },
  { icon: <FaXing />, name: 'Xero' },
  { icon: <FaFilm />, name: 'Tribeca Film Festival' },
];

export default function BrandMarquee() {
  return (
    <section className="bg-white py-16 sm:py-20 overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-gray-800 text-2xl sm:text-3xl font-medium mb-12 sm:mb-16">
          Join <span className="text-emerald-600">15 million+</span> members who trust Expensify
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee space-x-16 sm:space-x-24 text-4xl sm:text-5xl text-gray-400">
            {brands.concat(brands).map((brand, idx) => (
              <div
                key={idx}
                className="flex items-center opacity-90 grayscale hover:grayscale-0 transition-all duration-300 hover:text-gray-600"
                title={brand.name}
              >
                {brand.icon}
                <span className="sr-only">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}