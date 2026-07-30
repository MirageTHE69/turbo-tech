'use client';

import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section className="relative overflow-hidden bg-white border-t border-[#E2DDD8]">
      {/* Split layout — flex on desktop, stack on mobile */}
      <div className="flex flex-col lg:flex-row min-h-[380px]">

        {/* LEFT — Dark panel */}
        <div className="relative flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 bg-[#0F1520] overflow-hidden">
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />
          {/* Ambient red glow */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(227,30,36,0.12) 0%, transparent 70%)' }}
          />

          <div className="relative z-10 max-w-xl">
            <p className="eyebrow mb-6" style={{ color: 'rgba(227,30,36,0.8)' }}>
              Partner With Turbo Tech
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-outfit text-white tracking-tight leading-[1.08] mb-5">
              Ready to Execute Your
              <br />
              Next Industrial Project?
            </h2>
            <p className="text-white/45 text-sm sm:text-base max-w-md leading-relaxed">
              Connect with our engineering team for turnkey fabrication, piping, plant
              maintenance, certified manpower, or training institute inquiries.
            </p>
          </div>
        </div>

        {/* RIGHT — Red panel */}
        <div
          className="relative flex flex-col items-start justify-center px-8 sm:px-12 lg:px-16 py-16 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #E31E24 0%, #C81419 100%)',
            minWidth: 'min(100%, 420px)',
          }}
        >
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Diagonal slash decoration */}
          <div className="absolute -top-12 -right-12 w-40 h-80 bg-white/5 rotate-12 pointer-events-none" />

          <div className="relative z-10 w-full">
            {/* Large phone number */}
            <a
              href="tel:+916351149073"
              className="block text-3xl sm:text-4xl font-black font-outfit text-white tracking-tight leading-none mb-2 hover:opacity-80 transition-opacity"
            >
              +91 63511 49073
            </a>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-8">
              Call us anytime
            </p>

            {/* Rule */}
            <div className="w-full h-px bg-white/20 mb-8" />

            {/* Email */}
            <a
              href="mailto:info@turbotechglobal.com"
              className="block text-sm font-semibold text-white/70 hover:text-white transition-colors mb-8"
            >
              info@turbotechglobal.com
            </a>

            {/* CTA Button */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-3 bg-white text-[#E31E24] font-bold text-sm px-7 py-4 hover:bg-[#0F1520] hover:text-white transition-all duration-300 group font-outfit"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
