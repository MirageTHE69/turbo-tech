'use client';

import React from 'react';
import Logo from './Logo';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B0F17] text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <Logo light />
            <p className="text-slate-400 leading-relaxed text-[11px] pt-2">
              Delivering reliable industrial engineering solutions with quality, safety and commitment.
            </p>

            {/* Social Icons SVGs */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#E31E24] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#E31E24] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.47 1.47-3.83 3.72-3.83 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.23 0-1.61.76-1.61 1.54V12h2.73l-.44 3h-2.29v6.8c4.56-.93 8-4.96 8-9.8Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#E31E24] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-outfit">Quick Links</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Training Institute</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-outfit">Our Services</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#services" className="hover:text-white transition-colors">Mechanical Construction</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Fabrication & Erection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Industrial Piping</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Plant Maintenance</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Manpower Supply</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Shutdown Projects</a></li>
            </ul>
          </div>

          {/* Col 4: Training Institute */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-outfit">Training Institute</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#training" className="hover:text-white transition-colors">Welding Training</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Pipe Fitter Course</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Industrial Safety</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Fabrication Course</a></li>
              <li><a href="#training" className="hover:text-white transition-colors">Career Support</a></li>
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-outfit">Contact Us</h4>
            <ul className="space-y-2.5 text-[11px]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E31E24] shrink-0 mt-0.5" />
                <span>Kohid Gope Patti, Near Brahm Sthan, Tamkuhi Raj, Kushinagar, UP - 274407</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E31E24] shrink-0" />
                <a href="tel:+916351149073" className="hover:text-white transition-colors">+91 63511 49073</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E31E24] shrink-0" />
                <a href="mailto:santosh.turbotech@gmail.com" className="hover:text-white transition-colors">santosh.turbotech@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E31E24] shrink-0" />
                <span>Mon - Sat : 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub Footer */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 Turbo Tech. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
