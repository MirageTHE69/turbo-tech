'use client';

import React, { useState } from 'react';
import { useCms } from '@/context/CmsContext';
import { Plus, Trash2, Edit2, X, Wrench, Layers, GitCommit, Settings, Users, GraduationCap, ShieldCheck, Hammer } from 'lucide-react';

export default function ServicesCmsPage() {
  const { services, addService, updateService, deleteService } = useCms();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  const [formSrv, setFormSrv] = useState({
    title: '',
    desc: '',
    iconName: 'Wrench',
  });

  const handleOpenAdd = () => {
    setEditingService(null);
    setFormSrv({ title: '', desc: '', iconName: 'Wrench' });
    setIsAddOpen(true);
  };

  const handleOpenEdit = (srv) => {
    setEditingService(srv);
    setFormSrv({
      title: srv.title,
      desc: srv.desc,
      iconName: srv.iconName || 'Wrench',
    });
    setIsAddOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingService) {
      updateService({
        ...editingService,
        ...formSrv,
      });
    } else {
      addService(formSrv);
    }
    setIsAddOpen(false);
    setEditingService(null);
  };

  const availableIcons = [
    { label: 'Wrench (Mechanical)', value: 'Wrench' },
    { label: 'Layers (Fabrication)', value: 'Layers' },
    { label: 'GitCommit (Piping)', value: 'GitCommit' },
    { label: 'Settings (Maintenance)', value: 'Settings' },
    { label: 'Users (Manpower)', value: 'Users' },
    { label: 'GraduationCap (Training)', value: 'GraduationCap' },
    { label: 'Hammer (Welding)', value: 'Hammer' },
    { label: 'ShieldCheck (Safety)', value: 'ShieldCheck' },
  ];

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
            Services Manager
          </h1>
          <p className="text-xs text-slate-400">
            Add, edit, or remove industrial services displayed across the website catalog
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="btn-primary-red px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Service</span>
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((srv) => (
          <div
            key={srv.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative group space-y-4 hover:border-[#E31E24]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#E31E24] font-outfit uppercase tracking-widest">
                  Service {srv.number}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleOpenEdit(srv)}
                    className="p-1.5 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    title="Edit Service"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => deleteService(srv.id)}
                    className="p-1.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                    title="Remove Service"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white font-outfit">{srv.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-2">{srv.desc}</p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
              <span>Icon: <strong className="text-slate-300 font-mono">{srv.iconName || 'Wrench'}</strong></span>
              <span>Status: <strong className="text-emerald-400">Live</strong></span>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Service Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 text-white space-y-6 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold font-outfit">
                {editingService ? 'Edit Service' : 'Add New Service'}
              </h3>
              <button onClick={() => setIsAddOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">
                  Service Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Electrical & Automation"
                  value={formSrv.title}
                  onChange={(e) => setFormSrv({ ...formSrv, title: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">
                  Icon Category
                </label>
                <select
                  value={formSrv.iconName}
                  onChange={(e) => setFormSrv({ ...formSrv, iconName: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                >
                  {availableIcons.map((ic) => (
                    <option key={ic.value} value={ic.value}>
                      {ic.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">
                  Description *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe scope of service..."
                  value={formSrv.desc}
                  onChange={(e) => setFormSrv({ ...formSrv, desc: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary-red px-6 py-2.5 rounded-xl font-bold">
                  {editingService ? 'Update Service' : 'Save Service'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
