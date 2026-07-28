'use client';

import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function ProjectsCta({ onOpenQuote }) {
  return (
    <section className="relative overflow-hidden bg-white border-t border-[#E2DDD8]">
      <div className="flex flex-col lg:flex-row min-h-[300px]">
        <div className="relative flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 bg-[#0F1520] overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-60 pointer-events-none" />
          <div className="relative z-10 max-w-lg">
            <p className="eyebrow mb-4" style={{ color: 'rgba(227,30,36,0.8)' }}>Start a Project</p>
            <h2 className="text-3xl sm:text-4xl font-black font-outfit text-white tracking-tight leading-[1.08]">
              Have a Project in Mind?<br />
              Let&apos;s Build Together.
            </h2>
          </div>
        </div>
        <div
          className="relative flex flex-col items-start justify-center px-8 sm:px-12 lg:px-16 py-14 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #E31E24 0%, #C81419 100%)', minWidth: 'min(100%, 360px)' }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-10"
            style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />
          <div className="relative z-10 space-y-5">
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Partner with Turbo Tech for reliable engineering solutions across India.
            </p>
            <div className="flex flex-col gap-3">
              <button onClick={onOpenQuote} className="inline-flex items-center gap-3 bg-white text-[#E31E24] font-bold text-sm px-7 py-4 hover:bg-[#0F1520] hover:text-white transition-all duration-300 group font-outfit">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+916351149073" className="inline-flex items-center gap-2.5 text-white/70 text-sm font-semibold hover:text-white transition-colors">
                <PhoneCall className="w-4 h-4" /> +91 63511 49073
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
