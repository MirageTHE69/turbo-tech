'use client';

import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Handshake, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  CheckCircle,
  Briefcase,
  HeartHandshake,
  Star
} from 'lucide-react';
import SpotlightCard from '../SpotlightCard';

export default function OurValues() {
  const coreValues = [
    {
      title: 'Engineering Excellence',
      desc: 'Precision execution & technical mastery in every project.',
      icon: Award,
    },
    {
      title: 'Quality First',
      desc: 'Strict QA/QC standards across all fabrication & installation.',
      icon: Star,
    },
    {
      title: 'Safety Always',
      desc: 'Zero compromise HSE policy protecting teams & assets.',
      icon: ShieldCheck,
    },
    {
      title: 'Integrity',
      desc: 'Transparency, ethics, and accountability in all contracts.',
      icon: Handshake,
    },
    {
      title: 'Innovation',
      desc: 'Modern techniques and state-of-the-art machinery.',
      icon: Lightbulb,
    },
    {
      title: 'Customer Commitment',
      desc: 'On-time project delivery tailored to client specifications.',
      icon: HeartHandshake,
    },
    {
      title: 'Skilled Workforce',
      desc: 'Certified engineers, welders, and technical specialists.',
      icon: Users,
    },
    {
      title: 'Continuous Improvement',
      desc: 'Upgrading skills, machinery, and safety standards.',
      icon: TrendingUp,
    },
    {
      title: 'Professionalism',
      desc: 'Corporate execution aligned with L&T and global standards.',
      icon: Briefcase,
    },
    {
      title: 'Long-Term Relationships',
      desc: 'Building enduring engineering partnerships with industry leaders.',
      icon: CheckCircle,
    },
  ];

  return (
    <section id="values" className="py-20 bg-[#0B0F17] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="tag-badge">Core Operating Values</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-outfit text-white">
            Principles That Drive Every Project
          </h2>
          <p className="text-slate-400 text-sm">
            Turbo Tech operates with an unwavering commitment to engineering discipline, safety, and client trust.
          </p>
        </div>

        {/* 10 Core Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((val, idx) => {
            const IconComponent = val.icon;
            return (
              <SpotlightCard key={idx} className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 hover:border-[#E31E24]/60 transition-all group h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800 text-[#E31E24] group-hover:bg-[#E31E24] group-hover:text-white flex items-center justify-center mb-4 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white font-outfit mb-2 group-hover:text-[#E31E24] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
