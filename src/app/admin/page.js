'use client';

import React from 'react';
import Link from 'next/link';
import { useCms } from '@/context/CmsContext';
import { Inbox, Wrench, Building2, GraduationCap, ArrowRight, UserCheck, Clock } from 'lucide-react';

export default function AdminDashboard() {
  const { leads, services, projects, courses, updateLeadStatus } = useCms();

  const newLeads = leads.filter((l) => l.status === 'New');

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-900 via-[#0B0F17] to-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl">
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
            Welcome to CMS Dashboard
          </h1>
          <p className="text-xs text-slate-400">
            Manage live website content, client inquiries, services, and engineering projects in real-time.
          </p>
        </div>

        <Link
          href="/admin/leads"
          className="btn-primary-red px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start sm:self-auto"
        >
          <span>View {newLeads.length} New Leads</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 4 Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider font-outfit">Total Leads</span>
            <div className="w-9 h-9 rounded-xl bg-red-500/10 text-[#E31E24] flex items-center justify-center">
              <Inbox className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white font-outfit">{leads.length}</div>
          <div className="text-[11px] text-slate-500 font-medium">
            <span className="text-emerald-400 font-bold">{newLeads.length} New</span> pending review
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider font-outfit">Active Services</span>
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Wrench className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white font-outfit">{services.length}</div>
          <div className="text-[11px] text-slate-500 font-medium">
            Live in website catalog
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider font-outfit">Projects Portfolio</span>
            <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white font-outfit">{projects.length}</div>
          <div className="text-[11px] text-slate-500 font-medium">
            Delivered showcase items
          </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider font-outfit">Training Programs</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-white font-outfit">{courses.length}</div>
          <div className="text-[11px] text-slate-500 font-medium">
            Certified technical courses
          </div>
        </div>
      </div>

      {/* Recent Leads Submissions Table */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-white font-outfit">Recent Inquiries & Leads</h3>
            <p className="text-xs text-slate-400">Latest submissions from website quote requests & contact forms</p>
          </div>
          <Link href="/admin/leads" className="text-xs font-bold text-[#E31E24] hover:underline flex items-center gap-1">
            <span>Manage All Leads</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-outfit text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Contact Person</th>
                <th className="p-4">Service Required</th>
                <th className="p-4">Type</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Quick Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {leads.slice(0, 5).map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-semibold text-white">
                    <div>{lead.name}</div>
                    <div className="text-[10px] text-slate-500 font-normal">{lead.email} • {lead.phone}</div>
                  </td>
                  <td className="p-4 font-medium text-slate-300">{lead.service}</td>
                  <td className="p-4 font-medium">
                    <span className="bg-slate-800 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase text-slate-300">
                      {lead.type}
                    </span>
                  </td>
                  <td className="p-4 text-slate-500 font-mono text-[11px]">{lead.date}</td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                        lead.status === 'New'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : lead.status === 'In Progress'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    {lead.status === 'New' && (
                      <button
                        onClick={() => updateLeadStatus(lead.id, 'In Progress')}
                        className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-white text-[10px] font-bold rounded-lg transition-colors"
                      >
                        Mark In Progress
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
