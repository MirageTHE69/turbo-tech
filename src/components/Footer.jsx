'use client';

import React from 'react';
import Logo from './Logo';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'About Us',               href: '/about'            },
  { label: 'Services',               href: '/services'         },
  { label: 'Projects',               href: '/projects'         },
  { label: 'Training and Institute', href: '/training'         },
  { label: 'Testing Facility',       href: '/testing-facility' },
  { label: 'Contact',                href: '/contact'          },
];

const services = [
  { label: 'Mechanical Construction',              href: '/services' },
  { label: 'Fabrication & Erection',               href: '/services' },
  { label: 'Industrial Piping',                    href: '/services' },
  { label: 'Pipe Welding Testing Facility',        href: '/testing-facility' },
  { label: 'International & Global Manpower',     href: '/services' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: 'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z',
  },
  {
    label: 'Facebook',
    href: '#',
    icon: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.61.76-1.61 1.54V12h2.73l-.44 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8Z',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0D11] text-white border-t border-white/8">

      {/* Big Brand Statement */}
      <div className="border-b border-white/8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 lg:py-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <h2 className="font-outfit font-black text-[clamp(2.2rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] text-white/08 select-none pointer-events-none"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.08)', color: 'transparent' }}
          >
            Engineering
            <br />
            India&apos;s Tomorrow.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 shrink-0">
            <div>
              <p className="text-white/40 text-xs mb-2 uppercase tracking-widest font-semibold">Head Office</p>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Kohid Gope Patti, Near Brahm Sthan,<br />
                Tamkuhi Raj, Kushinagar, UP – 274407
              </p>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-2 uppercase tracking-widest font-semibold">Branch Office</p>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Bajwa, Vadodara,<br />
                Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Col 1: Brand */}
          <div className="space-y-5 lg:col-span-1">
            <Logo light />
            <p className="text-white/35 text-xs sm:text-sm leading-relaxed max-w-xs">
              Industrial engineering, fabrication, testing facility &amp; skill training — built for
              heavy industries.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 border border-white/10 hover:border-[#E31E24] bg-transparent hover:bg-[#E31E24] text-white/30 hover:text-white flex items-center justify-center transition-all duration-250"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={s.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-5">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] font-outfit">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-white/35 hover:text-white transition-colors duration-200 flex items-center gap-2.5 group"
                  >
                    <span className="w-3 h-px bg-white/15 group-hover:bg-[#E31E24] group-hover:w-5 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-5">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] font-outfit">
              Services &amp; Testing
            </h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-white/35 hover:text-white transition-colors duration-200 flex items-center gap-2.5 group"
                  >
                    <span className="w-3 h-px bg-white/15 group-hover:bg-[#E31E24] group-hover:w-5 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-5">
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] font-outfit">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm leading-relaxed text-white/35">
                  <strong>Head:</strong> Kushinagar, UP – 274407<br />
                  <strong>Branch:</strong> Bajwa, Vadodara, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#E31E24] shrink-0" />
                <a href="tel:+916351149073" className="text-xs sm:text-sm text-white/35 hover:text-white transition-colors">
                  +91 63511 49073
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E31E24] shrink-0" />
                <a href="mailto:info@turbotechglobal.com" className="text-xs sm:text-sm text-white/35 hover:text-white transition-colors">
                  info@turbotechglobal.com
                </a>
              </li>
            </ul>

            {/* ISO badge */}
            <div className="inline-flex items-center gap-2 border border-white/10 px-3.5 py-2 mt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
              <span className="text-[9px] font-bold text-white/30 uppercase tracking-widest font-outfit">
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/20">
          <p>© 2026 Turbo Tech. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <span className="text-white/10">|</span>
            <a href="#" className="hover:text-white/60 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
