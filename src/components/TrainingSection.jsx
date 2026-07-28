'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const pillars = [
  { number: '80%',  label: 'Practical Workshop Training' },
  { number: '100%', label: 'Placement Support' },
  { number: '6+',   label: 'Certified Courses Available' },
];

export default function TrainingSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll reveal for text
      gsap.fromTo(
        '.training-anim',
        { opacity: 0, y: 28 },
        {
          opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
        }
      );

      // Clip-path image reveal
      gsap.fromTo(
        '.training-img-reveal',
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        }
      );

      // Pillar counter animation
      sectionRef.current?.querySelectorAll('.pillar-num').forEach((el) => {
        const rawTarget = el.getAttribute('data-target');
        const isPercent = rawTarget?.includes('%');
        const target = parseFloat(rawTarget);
        if (isNaN(target)) return;

        const obj = { val: 0 };
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
          onEnter: () =>
            gsap.to(obj, {
              val: target,
              duration: 1.8,
              ease: 'power3.out',
              onUpdate: () => {
                el.textContent = Math.floor(obj.val) + (isPercent ? '%' : '+');
              },
            }),
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="training"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#0B0D11] text-white border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT — Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <p className="training-anim eyebrow mb-5 opacity-0" style={{ color: '#E31E24' }}>
                Technical Training Institute
              </p>
              <h2 className="training-anim text-4xl sm:text-5xl font-black text-white leading-[1.06] font-outfit tracking-tight opacity-0">
                Bridging Industry
                <br />
                with Skilled
                <br />
                <span className="text-[#E31E24]">Manpower.</span>
              </h2>
            </div>

            <div className="training-anim w-10 h-[2px] bg-[#E31E24] opacity-0" />

            <p className="training-anim text-white/50 text-base leading-[1.8] max-w-md opacity-0">
              Turbo Tech's dedicated Welding &amp; Fitter Training Institute prepares
              job-ready technicians through live industrial project training in
              Kushinagar, UP.
            </p>

            {/* Pillar stats — horizontal strip with white border dividers */}
            <div className="training-anim flex items-stretch border border-white/10 opacity-0">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className={`flex-1 px-5 py-5 ${i < pillars.length - 1 ? 'border-r border-white/10' : ''}`}
                >
                  <div className="text-2xl sm:text-3xl font-black font-outfit text-white leading-none mb-1.5">
                    <span
                      className="pillar-num"
                      data-target={p.number.replace(/[%+]/g, '')}
                    >
                      {p.number}
                    </span>
                  </div>
                  <div className="text-[10px] text-white/35 font-semibold uppercase tracking-wider leading-snug">
                    {p.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/training"
              className="training-anim arrow-link font-outfit text-white hover:text-[#E31E24] opacity-0 inline-flex"
            >
              <span>View Courses &amp; Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* RIGHT — Image with angled clip */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative grid dots */}
            <div
              className="absolute -top-6 -right-6 w-48 h-48 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(227,30,36,0.6) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            />

            <div className="relative overflow-hidden">
              <img
                src="/images/welder.png"
                alt="Turbo Tech Welding Training Institute Workshop"
                className="training-img-reveal w-full h-[420px] sm:h-[500px] object-cover img-vivid"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D]/60 via-transparent to-transparent pointer-events-none" />

              {/* Spark particles */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="spark-particle" style={{ left: '30%', bottom: '28%', animationDelay: '0s' }} />
                <div className="spark-particle" style={{ left: '42%', bottom: '33%', animationDelay: '0.4s' }} />
                <div className="spark-particle" style={{ left: '36%', bottom: '22%', animationDelay: '0.8s' }} />
              </div>

              {/* Label chip */}
              <div className="absolute bottom-6 left-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white bg-[#E31E24] px-4 py-2 inline-block font-outfit">
                  Hands-on Workshop Training
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
