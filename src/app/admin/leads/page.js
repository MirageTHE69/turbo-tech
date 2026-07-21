'use client';

import React, { useState } from 'react';
import { useCms } from '@/context/CmsContext';
import { Inbox, Eye, Trash2, Download, X, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function LeadsPage() {
  const { leads, updateLeadStatus, deleteLead } = useCms();
  const [filterStatus, setFilterStatus] = useState('All');
  const [selectedLead, setSelectedLead] = useState(null);

  const filteredLeads =
    filterStatus === 'All'
      ? leads
      : leads.filter((l) => l.status === filterStatus);

  const exportToCsv = () => {
    const headers = ['ID,Name,Email,Phone,Type,Service,Subject,Message,Status,Date\n'];
    const rows = leads.map((l) =>
      `"${l.id}","${l.name}","${l.email}","${l.phone}","${l.type}","${l.service}","${l.subject}","${l.message.replace(/"/g, '""')}","${l.status}","${l.date}"\n`
    );
    const blob = new Blob([...headers, ...rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `turbotech_leads_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
            Leads & Inquiries Manager
          </h1>
          <p className="text-xs text-slate-400">
            View, track status, and respond to incoming client requests in real-time
          </p>
        </div>

        <button
          onClick={exportToCsv}
          className="btn-outline-dark bg-slate-900 border-slate-800 text-white hover:bg-slate-800 px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
        >
          <Download className="w-4 h-4 text-[#E31E24]" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-800">
        {['All', 'New', 'In Progress', 'Contacted', 'Resolved'].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-outfit transition-all ${
              filterStatus === status
                ? 'bg-[#E31E24] text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {status} ({status === 'All' ? leads.length : leads.filter((l) => l.status === status).length})
          </button>
        ))}
      </div>

      {/* Leads Table */}
      <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 uppercase font-outfit text-[10px] tracking-wider border-b border-slate-800">
              <tr>
                <th className="p-4">Lead ID</th>
                <th className="p-4">Contact Person</th>
                <th className="p-4">Required Service</th>
                <th className="p-4">Subject</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="p-4 font-mono text-slate-500 font-bold text-[11px]">{lead.id}</td>
                  <td className="p-4 font-bold text-white">
                    <div>{lead.name}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{lead.email} • {lead.phone}</div>
                  </td>
                  <td className="p-4 font-medium text-slate-300">{lead.service}</td>
                  <td className="p-4 font-medium max-w-xs truncate">{lead.subject}</td>
                  <td className="p-4 text-slate-400 font-mono text-[11px]">{lead.date}</td>
                  <td className="p-4">
                    <select
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                      className="bg-slate-950 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-slate-700 focus:outline-none focus:ring-1 focus:ring-[#E31E24]"
                    >
                      <option value="New">New</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => setSelectedLead(lead)}
                      className="p-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteLead(lead.id)}
                      className="p-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg transition-colors"
                      title="Delete Lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Detail Modal Drawer */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl space-y-6 p-6 text-white animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#E31E24] tracking-widest font-outfit">
                  {selectedLead.type} Details
                </span>
                <h3 className="text-xl font-bold font-outfit">{selectedLead.name}</h3>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 text-slate-400 hover:text-white rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div>
                  <span className="text-slate-500 block uppercase text-[10px] font-bold">Email</span>
                  <a href={`mailto:${selectedLead.email}`} className="font-semibold text-[#E31E24] hover:underline">
                    {selectedLead.email}
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase text-[10px] font-bold">Phone</span>
                  <a href={`tel:${selectedLead.phone}`} className="font-semibold text-white hover:underline">
                    {selectedLead.phone}
                  </a>
                </div>
              </div>

              <div>
                <span className="text-slate-500 block uppercase text-[10px] font-bold mb-1">Service Requested</span>
                <div className="font-bold text-white text-sm font-outfit">{selectedLead.service}</div>
              </div>

              <div>
                <span className="text-slate-500 block uppercase text-[10px] font-bold mb-1">Message Content</span>
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-slate-300 leading-relaxed font-sans">
                  {selectedLead.message || 'No detailed message provided.'}
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={`mailto:${selectedLead.email}`}
                className="flex-1 btn-primary-red py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> Reply via Email
              </a>
              <a
                href={`tel:${selectedLead.phone}`}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Quick Call
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
