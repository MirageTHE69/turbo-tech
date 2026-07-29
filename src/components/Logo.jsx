'use client';

import React from 'react';

export default function Logo({ className = '', light = false }) {
  return (
    <div className={`inline-flex items-center select-none cursor-pointer ${className}`}>
      <img
        src="/images/logo.png"
        alt="Turbo Tech — Engineering • Contracting • Manpower Solutions"
        className={`h-10 sm:h-12 w-auto object-contain transition-all duration-300 hover:scale-[1.02] ${
          light ? 'brightness-0 invert opacity-95' : ''
        }`}
      />
    </div>
  );
}
