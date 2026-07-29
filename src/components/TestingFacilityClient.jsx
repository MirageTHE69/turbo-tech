'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import {
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Flame,
  Gauge,
  Award,
  FileCheck,
  Zap,
  Activity,
  Cpu
} from 'lucide-react';

const testingServices = [
  {
    id: 'ndt',
    title: 'Non-Destructive Testing (NDT)',
    subtitle: '100% Volumetric & Surface Inspection',
    icon: Activity,
    desc: 'Advanced non-destructive evaluation to detect internal and surface defects without compromising component integrity.',
    items: [
      'Radiographic Testing (RT) — X-Ray & Gamma Ray',
      'Ultrasonic Testing (UT) & Phased Array (PAUT)',
      'Magnetic Particle Testing (MPT/MT)',
      'Liquid Penetrant Testing (LPT/PT)',
      'Visual Inspection (VT) by Level II Certified Inspectors',
    ],
  },
  {
    id: 'hydro',
    title: 'Hydrostatic & Pressure Testing',
    subtitle: 'High-Pressure Pipeline Validation',
    icon: Gauge,
    desc: 'State-of-the-art hydrostatic pressure testing rig capable of testing up to 10,000 PSI with digital data logging.',
    items: [
      'High-Pressure Water & Pneumatic Hold Testing',
      'Process Pipeline & Manifold Pressure Validation',
      'Pressure Vessel & Heat Exchanger Shell Testing',
      'Digital Calibrated Pressure-Time Chart Recording',
      'Leak Rate Measurement & Safety Valve Testing',
    ],
  },
  {
    id: 'welder-qual',
    title: 'Welder Performance Qualification (WPQR)',
    subtitle: 'AWS D1.1 & ASME Section IX Certification',
    icon: Award,
    desc: 'End-to-end welder testing, WPS/PQR development, and coupon testing for structural & pipe welders.',
    items: [
      '6G / 6GR Pipe Welder Performance Qualification',
      'TIG (GTAW), MIG (GMAW), Arc (SMAW), & SAW Qualification',
      'IBR (Indian Boiler Regulations) Welder Testing',
      'WPS (Welding Procedure Specification) Drafting',
      'WPQR (Procedure Qualification Record) Endorsement',
    ],
  },
  {
    id: 'mechanical',
    title: 'Destructive Mechanical Testing',
    subtitle: 'Weld Metal Strength & Toughness Verification',
    icon: Flame,
    desc: 'Complete destructive testing laboratory for verifying weld strength, ductility, toughness, and bend characteristics.',
    items: [
      'Transverse Tensile & Yield Strength Testing',
      'Guided Root, Face, & Side Bend Testing',
      'Charpy V-Notch Impact Toughness Testing (-40°C to ambient)',
      'Vickers, Brinell, & Rockwell Hardness Profiling',
      'Macro & Micro Etch Examination for Weld Fusion',
    ],
  },
  {
    id: 'chemical',
    title: 'Material Analysis & PMI Testing',
    subtitle: 'Positive Material Identification & Alloy Verification',
    icon: Cpu,
    desc: 'Instant chemical composition verification for Carbon Steel, Alloy Steel, Stainless Steel, and Nickel Alloys.',
    items: [
      'Portable XRF Positive Material Identification (PMI)',
      'Spectro Chemical Element Analysis (C, Cr, Ni, Mo, V)',
      'Ferrite Content Measurement in Stainless Welds',
      'Intergranular Corrosion (IGC) Testing',
      'Carbon Equivalent (CE) Calculation for Weldability',
    ],
  },
  {
    id: 'inspection',
    title: 'Third-Party Inspection & Quality Audits',
    subtitle: 'Independent QA/QC & Regulatory Compliance',
    icon: FileCheck,
    desc: 'Comprehensive TPI services by ASNT Level II/III certified engineers ensuring ASME, API, and ISO compliance.',
    items: [
      'Pre-Weld Fit-Up & Bevel Geometry Inspection',
      'In-Process Welding Parameter Auditing',
      'Post-Weld Heat Treatment (PWHT) Chart Review',
      'Final Dimensional & Surface Finish Verification',
      'Complete Quality Dossier & Certification Reports',
    ],
  },
];

const standards = [
  'ASME Section IX',
  'ASME B31.1 & B31.3',
  'AWS D1.1 / D1.1M',
  'API 1104',
  'ISO 15614 / ISO 9606',
  'IBR Regulations',
];

const workflowSteps = [
  { step: '01', title: 'Sample / Coupon Intake', desc: 'Welding test coupon or pipe sample received with traceability log and material test certificates.' },
  { step: '02', title: 'Inspection & Testing', desc: 'Visual, NDT, mechanical, or hydrostatic testing executed according to WPS/ASME standards.' },
  { step: '03', title: 'Data Analysis & Audit', desc: 'ASNT Level II/III & Certified Welding Inspectors evaluate test results against code acceptance criteria.' },
  { step: '04', title: 'Certification Issue', desc: 'Official accredited test reports, WPQR certificate, or NDT clearance dossier issued within 24-48 hours.' },
];

export default function TestingFacilityClient() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Header transparentOnTop={false} onOpenQuote={() => setIsQuoteOpen(true)} />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-28 bg-[#0F1520] text-white overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E31E24]/15 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E31E24]/10 border border-[#E31E24]/30 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
                  <span className="text-xs font-bold font-outfit text-[#E31E24] uppercase tracking-wider">
                    ASME &amp; AWS Compliant Testing Hub
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-outfit text-white leading-[1.08] tracking-tight">
                  Pipe Welding &amp; NDT
                  <br />
                  <span className="text-[#E31E24]">Testing Facility.</span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Turbo Tech operates a high-precision industrial testing facility equipped for Non-Destructive Testing (NDT), hydrostatic pressure testing, welder qualification (WPQR/WPS), and destructive mechanical testing for heavy industrial piping and structures.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setIsQuoteOpen(true)}
                    className="inline-flex items-center gap-3 bg-[#E31E24] text-white font-bold text-sm px-7 py-4 hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-900/30 group font-outfit"
                  >
                    <span>Request Testing Consultation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a
                    href="tel:+916351149073"
                    className="inline-flex items-center gap-2 border border-white/20 text-white font-bold text-sm px-6 py-4 hover:bg-white/10 transition-colors font-outfit"
                  >
                    Call Testing Lab: +91 63511 49073
                  </a>
                </div>

                {/* Standards Pills */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-outfit mr-2">
                    Testing Standards:
                  </span>
                  {standards.map((std, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 font-outfit">
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column — Hero Stat Card */}
              <div className="lg:col-span-5">
                <div className="relative border border-white/15 bg-slate-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
                  <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#E31E24]" />
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#E31E24]" />

                  <h3 className="text-xl font-bold font-outfit text-white mb-6 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#E31E24]" />
                    Facility Capabilities
                  </h3>

                  <div className="space-y-6 divide-y divide-white/10">
                    <div className="pt-4 first:pt-0">
                      <div className="text-3xl font-black font-outfit text-[#E31E24]">10,000 PSI</div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                        Hydrostatic Testing Capacity
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="text-3xl font-black font-outfit text-white">ASNT Level II / III</div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                        Certified Quality Inspectors
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="text-3xl font-black font-outfit text-[#E31E24]">24 - 48 Hours</div>
                      <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">
                        WPQR &amp; NDT Report Turnaround
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#E31E24] shrink-0" />
                    <span className="text-xs font-semibold text-slate-300">
                      Full traceability with NABL &amp; TPI audit-ready documentation.
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES GRID SECTION */}
        <section className="py-20 lg:py-28 bg-[#F5F4F0] border-b border-[#E2DDD8]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="eyebrow" style={{ color: '#E31E24' }}>Complete Quality Assurance</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F1520] font-outfit tracking-tight">
                Our Testing &amp; Inspection Divisions
              </h2>
              <div className="w-12 h-1 bg-[#E31E24] mx-auto" />
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From radiographic X-Ray inspection to 6G welder qualification and hydrostatic line pressure testing — our lab delivers certified accuracy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testingServices.map((srv) => {
                const Icon = srv.icon;
                return (
                  <div
                    key={srv.id}
                    className="bg-white border border-[#E2DDD8] p-8 flex flex-col justify-between hover:border-[#E31E24] hover:shadow-xl transition-all duration-300 group"
                  >
                    <div>
                      <div className="w-12 h-12 bg-[#E31E24]/10 text-[#E31E24] flex items-center justify-center mb-6 group-hover:bg-[#E31E24] group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#E31E24] font-outfit block mb-1">
                        {srv.subtitle}
                      </span>
                      <h3 className="text-xl font-bold text-[#0F1520] font-outfit mb-3 group-hover:text-[#E31E24] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-[#6C7072] leading-relaxed mb-6">
                        {srv.desc}
                      </p>

                      <ul className="space-y-2.5 pt-4 border-t border-[#E2DDD8]">
                        {srv.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                            <CheckCircle className="w-3.5 h-3.5 text-[#E31E24] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#E2DDD8]/60">
                      <button
                        onClick={() => setIsQuoteOpen(true)}
                        className="text-xs font-bold text-[#0F1520] group-hover:text-[#E31E24] flex items-center gap-2 transition-colors font-outfit"
                      >
                        <span>Book Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* WORKFLOW PROCESS SECTION */}
        <section className="py-20 lg:py-24 bg-white border-b border-[#E2DDD8]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="eyebrow mb-3" style={{ color: '#E31E24' }}>Quality Workflow</p>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0F1520] font-outfit tracking-tight">
                  Standardized Testing &amp; Certification Process
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
                Strict adherence to ASME, AWS, and ISO protocol ensures your test coupons and pipelines pass third-party audits seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {workflowSteps.map((ws, i) => (
                <div key={i} className="relative p-6 bg-[#F5F4F0] border-t-2 border-[#E31E24]">
                  <div className="text-4xl font-black font-outfit text-[#E31E24] mb-3">
                    {ws.step}
                  </div>
                  <h4 className="text-base font-bold text-[#0F1520] font-outfit mb-2">
                    {ws.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-16 bg-[#0F1520] text-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-bold text-[#E31E24] uppercase tracking-widest font-outfit">
                Fast &amp; Certified Testing
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-outfit text-white mt-1">
                Need Pipe Welder Qualification or NDT Testing?
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl">
                Contact our quality engineers today for coupon testing, hydrostatic validation, or third-party inspection quotes.
              </p>
            </div>
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="shrink-0 bg-[#E31E24] text-white font-bold text-sm px-8 py-4 hover:bg-red-700 transition-colors font-outfit inline-flex items-center gap-3 shadow-lg"
            >
              <span>Schedule Facility Visit / Test</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}
