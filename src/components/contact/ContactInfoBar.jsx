'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfoBar() {
  const cards = [
    {
      title: 'Our Office',
      icon: MapPin,
      lines: [
        'Kondli Gopal Patti, Near Brahm Sthan,',
        'Tamkuhiya, Kushinagar,',
        'Uttar Pradesh - 274407',
      ],
    },
    {
      title: 'Phone',
      icon: Phone,
      lines: [
        '+91 63511 49073',
        '(Mon - Sat, 9:00 AM - 6:00 PM)',
      ],
    },
    {
      title: 'Email',
      icon: Mail,
      lines: [
        'santosh.turbotech@gmail.com',
        'info@turbotech.com',
      ],
    },
    {
      title: 'Working Hours',
      icon: Clock,
      lines: [
        'Monday - Saturday: 9:00 AM - 6:00 PM',
        'Sunday - Closed',
      ],
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-200">
          {cards.map((c, idx) => {
            const IconComponent = c.icon;
            return (
              <div key={idx} className={`flex items-start gap-4 pt-4 sm:pt-0 ${idx > 0 ? 'lg:pl-6' : ''}`}>
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E31E24] flex items-center justify-center shrink-0 border border-red-100">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F1520] font-outfit mb-1">{c.title}</h4>
                  {c.lines.map((line, lIdx) => (
                    <p key={lIdx} className="text-xs text-slate-500 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
