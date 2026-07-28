'use client';

import React, { useState } from 'react';
import { Send, ShieldCheck, Clock, UserCheck, Layers, CheckCircle2 } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const whyReasons = [
  { title: 'Quick Response',    desc: 'We respond to all inquiries within 24 hours.',               icon: Clock },
  { title: 'Expert Support',   desc: 'Our experts are ready to help you with the right solutions.', icon: UserCheck },
  { title: 'Custom Solutions', desc: 'Tailored solutions that fit your exact project requirements.', icon: Layers },
  { title: 'Trusted Partner',  desc: 'Quality, reliability, and excellence you can count on.',      icon: ShieldCheck },
];

export default function ContactFormMap() {
  const { addLead } = useCms();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', subject: '', message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addLead({
      name: formData.fullName, email: formData.email, phone: formData.phone,
      subject: formData.subject, message: formData.message,
      type: 'Contact Inquiry', service: 'General Contact',
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    }, 3500);
  };

  const inputCls = "w-full px-4 py-3 bg-[#F5F4F0] border border-[#E2DDD8] text-sm text-[#0F1520] placeholder:text-slate-400 focus:outline-none focus:border-[#E31E24] focus:bg-white transition-all";
  const labelCls = "block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1.5 font-outfit";

  return (
    <section id="contact-form" className="py-24 lg:py-32 bg-white border-t border-[#E2DDD8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20">

          {/* LEFT — Form */}
          <div className="space-y-8">
            <div>
              <p className="eyebrow mb-5">Send Us a Message</p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F1520] font-outfit leading-[1.06] tracking-tight">
                We&apos;re Here
                <br />
                <span className="text-[#E31E24]">to Help You.</span>
              </h2>
            </div>

            {submitted ? (
              <div className="border border-emerald-200 bg-emerald-50 p-10 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold font-outfit text-slate-900">Message Sent Successfully!</h4>
                <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to Turbo Tech. Our engineering team will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Two-column row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Full Name *</label>
                    <input
                      type="text" required placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number</label>
                    <input
                      type="tel" placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Email Address *</label>
                  <input
                    type="email" required placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>Subject *</label>
                  <input
                    type="text" required placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>Message *</label>
                  <textarea
                    rows={5} required placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={inputCls}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                  <button
                    type="submit"
                    className="btn-primary-red btn-magnetic flex items-center gap-2.5 px-8 py-4 text-sm font-bold w-full sm:w-auto group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-slate-300" />
                    <span>Your information is safe with us.</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT — Map + Why */}
          <div className="space-y-8">
            {/* Map */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 font-outfit mb-3">
                Find Us Here
              </p>
              <div className="relative overflow-hidden border border-[#E2DDD8] h-60 sm:h-72">
                <iframe
                  title="Turbo Tech Kushinagar Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113944.47547775988!2d84.1000!3d26.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjYnNTQnMDAuMCJOIDg0JzA2JzAwLjAiRQ!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Why Contact */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 font-outfit mb-4">
                Why Contact Turbo Tech?
              </p>
              <div className="grid grid-cols-1 gap-px bg-[#E2DDD8]">
                {whyReasons.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <div key={i} className="bg-[#F5F4F0] flex items-start gap-4 px-6 py-5 group hover:bg-white transition-colors">
                      <div className="shrink-0 w-8 h-8 border border-[#E2DDD8] text-[#E31E24] flex items-center justify-center group-hover:bg-[#E31E24] group-hover:border-[#E31E24] group-hover:text-white transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F1520] font-outfit mb-0.5 group-hover:text-[#E31E24] transition-colors">
                          {r.title}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
