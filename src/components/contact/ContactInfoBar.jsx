'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const cards = [
  {
    title: 'Head Office',
    icon: MapPin,
    lines: ['Koindi Gosai Pa (Near Brahm Sthan),', 'Tamkuhi Raj, Kushinagar, UP – 274407'],
  },
  {
    title: 'Phone',
    icon: Phone,
    lines: ['+91 63511 49073', 'Direct Engineering Helpline'],
    href: 'tel:+916351149073',
  },
  {
    title: 'Email',
    icon: Mail,
    lines: ['santosh.turbotech@gmail.com', 'Project Quotes & Manpower Requests'],
    href: 'mailto:santosh.turbotech@gmail.com',
  },
  {
    title: 'Working Hours',
    icon: Clock,
    lines: ['Monday – Saturday: 9:00 AM – 6:00 PM', 'Emergency Support: 24/7 Available'],
  },
];

export default function ContactInfoBar() {
  return (
    <section className="bg-[#F5F4F0] border-t border-[#E2DDD8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2DDD8]">
          {cards.map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-10 h-10 border border-[#E2DDD8] text-[#E31E24] flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F1520] font-outfit mb-1 group-hover:text-[#E31E24] transition-colors">
                    {c.title}
                  </h4>
                  {c.lines.map((line, lIdx) => (
                    <p key={lIdx} className={`text-xs leading-relaxed ${lIdx === 0 ? 'text-slate-600 font-medium' : 'text-slate-400'}`}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            );

            return c.href ? (
              <a key={i} href={c.href} className="bg-[#F5F4F0] px-8 py-8 group hover:bg-white transition-colors block">
                {inner}
              </a>
            ) : (
              <div key={i} className="bg-[#F5F4F0] px-8 py-8 group hover:bg-white transition-colors">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
