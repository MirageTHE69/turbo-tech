'use client';

import React, { useState } from 'react';
import { Send, ShieldCheck, Clock, UserCheck, Layers, CheckCircle2 } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';
import { useCms } from '@/context/CmsContext';

export default function ContactFormMap() {
  const { addLead } = useCms();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch to CMS Context
    addLead({
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      type: 'Contact Inquiry',
      service: 'General Contact',
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3500);
  };

  const whyReasons = [
    {
      title: 'Quick Response',
      desc: 'We respond to all inquiries within 24 hours.',
      icon: Clock,
    },
    {
      title: 'Expert Support',
      desc: 'Our experts are ready to help you with the right solutions.',
      icon: UserCheck,
    },
    {
      title: 'Custom Solutions',
      desc: 'We provide tailored solutions that fit your project needs.',
      icon: Layers,
    },
    {
      title: 'Trusted Partner',
      desc: 'Quality, reliability, and excellence you can count on.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column - Send Us A Message Form */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="tag-badge">Send Us A Message</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1520] font-outfit mt-2">
                We&apos;re Here to Help
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Fill out the form and our team will get back to you as soon as possible.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-3 animate-scaleUp">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-outfit text-slate-900">Message Sent Successfully!</h4>
                <p className="text-slate-600 text-sm max-w-sm mx-auto">
                  Thank you for reaching out to Turbo Tech. Our engineering representatives will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5 font-outfit">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5 font-outfit">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5 font-outfit">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5 font-outfit">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1.5 font-outfit">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:bg-white transition-all"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto btn-primary-red px-8 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Your information is safe with us. We respect your privacy.</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right Column - Find Us Here Map & Why Contact Grid */}
          <div className="lg:col-span-6 space-y-8">

            {/* Map Container */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#0F1520] font-outfit">Find Us Here</h3>
              <div className="relative h-64 sm:h-72 w-full rounded-3xl overflow-hidden shadow-md border border-slate-200 group">
                <iframe
                  title="Turbo Tech Kushinagar Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113944.47547775988!2d84.1000!3d26.9000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjYnNTQnMDAuMCJOIDg0JzA2JzAwLjAiRQ!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter grayscale contract contrast-125 group-hover:filter-none transition-all duration-500"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Why Contact Turbo Tech? */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#0F1520] font-outfit">Why Contact Turbo Tech?</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyReasons.map((reason, idx) => {
                  const IconComponent = reason.icon;
                  return (
                    <SpotlightCard
                      key={idx}
                      className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl hover:bg-white hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-[#E31E24] flex items-center justify-center mb-3 shadow-sm group-hover:bg-[#E31E24] group-hover:text-white transition-all">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-[#0F1520] font-outfit mb-1">{reason.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{reason.desc}</p>
                    </SpotlightCard>
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
