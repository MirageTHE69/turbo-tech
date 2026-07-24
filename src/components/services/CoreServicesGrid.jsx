'use client';

import React from 'react';
import ServiceCard from '../ServiceCard';
import { useCms } from '@/context/CmsContext';

export default function CoreServicesGrid({ onOpenQuote }) {
  const { services } = useCms();

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="tag-badge justify-center">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1520] font-outfit">
            Our Core Engineering Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From concept to commissioning, we deliver comprehensive solutions tailored to meet the unique needs of industries worldwide.
          </p>
        </div>

        {/* Dynamic CMS Numbered Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <ServiceCard
              key={srv.id || idx}
              service={srv}
              index={idx}
              actionText="Request Quote"
              onActionClick={onOpenQuote}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
