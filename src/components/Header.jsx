'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ onOpenQuote, transparentOnTop }) {
  const pathname = usePathname();
  const [scrolled, setScrolled]             = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted]               = useState(false);

  // If transparentOnTop is not explicitly passed, default true ONLY for home page '/'
  const isHomePage = pathname === '/';
  const allowTransparent = transparentOnTop !== undefined ? transparentOnTop : isHomePage;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0);
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About',                  href: '/about'            },
    { label: 'Services',               href: '/services'         },
    { label: 'Projects',               href: '/projects'         },
    { label: 'Training and Institute', href: '/training'         },
    { label: 'Testing Facility',       href: '/testing-facility' },
    { label: 'Contact',                href: '/contact'          },
  ];

  const isDark = !scrolled && allowTransparent;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isDark
          ? 'bg-transparent py-5'
          : 'bg-white/95 backdrop-blur-xl border-b border-[#0F1520]/8 shadow-sm py-3.5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#E31E24] transition-all duration-150 ease-out z-50"
        style={{ width: mounted ? `${scrollProgress}%` : '0%' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="shrink-0 relative z-10">
          <Logo light={isDark} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link-line text-[11px] font-semibold tracking-[0.12em] uppercase transition-colors duration-200 ${
                isDark ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-[#0F1520]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Phone quick-link */}
          <a
            href="tel:+916351149073"
            className={`text-[11px] font-semibold tracking-wide transition-colors duration-200 ${
              isDark ? 'text-white/60 hover:text-white' : 'text-slate-400 hover:text-slate-700'
            }`}
          >
            +91 63511 49073
          </a>

          {/* CTA pill */}
          <button
            onClick={onOpenQuote}
            className={`relative flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-[0.1em] uppercase overflow-hidden group transition-all duration-300 ${
              isDark
                ? 'border border-white/25 text-white hover:bg-white hover:text-[#0F1520] hover:border-white'
                : 'border border-[#0F1520] text-[#0F1520] hover:bg-[#0F1520] hover:text-white'
            }`}
          >
            <span className="relative z-10">Get a Quote</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors ${
            isDark ? 'text-white' : 'text-slate-800'
          } hover:text-[#E31E24]`}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu — full-screen slide */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0F1520] text-white px-6 pt-6 pb-10 space-y-0">
          {/* Thin top rule */}
          <div className="w-full h-px bg-white/10 mb-6" />

          <nav className="flex flex-col divide-y divide-white/8">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-4 text-sm font-bold text-white/70 hover:text-white transition-colors tracking-wide group"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#E31E24] transition-all group-hover:translate-x-1 duration-300" />
              </a>
            ))}
          </nav>

          <div className="pt-8 space-y-3">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }}
              className="w-full btn-primary-red py-4 text-sm font-bold flex items-center justify-center gap-2"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+916351149073"
              className="w-full flex items-center justify-center py-3.5 border border-white/15 text-white/70 text-sm font-semibold hover:text-white hover:border-white/30 transition-colors"
            >
              +91 63511 49073
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
