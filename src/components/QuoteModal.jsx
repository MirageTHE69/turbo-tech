'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Building, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

export default function QuoteModal({ isOpen, onClose }) {
  const { addLead } = useCms();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Mechanical Construction',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch to CMS Context
    addLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      subject: `Free Quote: ${formData.service}`,
      message: formData.message,
      type: 'Quote Request',
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 animate-scaleUp">
        {/* Header Bar */}
        <div className="bg-[#0F1520] text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-8 bg-[#E31E24] rounded-full"></div>
            <div>
              <h3 className="text-xl font-bold font-outfit text-white">Get a Free Quote</h3>
              <p className="text-xs text-slate-400">Request precision industrial engineering solutions</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-outfit text-slate-900">Request Submitted!</h4>
              <p className="text-sm text-slate-600 max-w-sm">
                Thank you for contacting Turbo Tech. Our engineering specialists will reach out to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Your Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Required Service</label>
                <div className="relative">
                  <Building className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:bg-white transition-all appearance-none"
                  >
                    <option>Mechanical Construction</option>
                    <option>Structural Fabrication & Erection</option>
                    <option>Industrial Piping</option>
                    <option>Plant Maintenance</option>
                    <option>Equipment Installation</option>
                    <option>Shutdown Projects</option>
                    <option>Civil Construction</option>
                    <option>Fire & Safety Solutions</option>
                    <option>Industrial Manpower Supply</option>
                    <option>General Industrial Supply</option>
                    <option>Welding & Fitter Training Institute</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-slate-600 mb-1.5">Project Scope / Details</label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your project requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#E31E24] focus:bg-white transition-all"
                  ></textarea>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#E31E24] hover:bg-[#C81419] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#E31E24]/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" /> Submit Quote Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
