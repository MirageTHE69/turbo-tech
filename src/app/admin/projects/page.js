'use client';

import React, { useState } from 'react';
import { useCms } from '@/context/CmsContext';
import { Plus, Trash2, Edit2, MapPin, Calendar, Clock, X } from 'lucide-react';

export default function ProjectsCmsPage() {
  const { projects, addProject, updateProject, deleteProject } = useCms();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const [formProj, setFormProj] = useState({
    title: '',
    category: 'Mechanical Construction',
    desc: '',
    location: 'Gujarat, India',
    duration: '12 Months',
    year: '2024',
    image: '/images/hero_plant.png',
  });

  const handleOpenAdd = () => {
    setEditingProject(null);
    setFormProj({
      title: '',
      category: 'Mechanical Construction',
      desc: '',
      location: 'Gujarat, India',
      duration: '12 Months',
      year: new Date().getFullYear().toString(),
      image: '/images/hero_plant.png',
    });
    setIsAddOpen(true);
  };

  const handleOpenEdit = (proj) => {
    setEditingProject(proj);
    setFormProj({
      title: proj.title,
      category: proj.category,
      desc: proj.desc,
      location: proj.location,
      duration: proj.duration,
      year: proj.year,
      image: proj.image || '/images/hero_plant.png',
    });
    setIsAddOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProject) {
      updateProject({
        ...editingProject,
        ...formProj,
      });
    } else {
      addProject(formProj);
    }
    setIsAddOpen(false);
    setEditingProject(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
            Projects Portfolio Manager
          </h1>
          <p className="text-xs text-slate-400">
            Add, edit, or remove engineering projects displayed across the projects gallery
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="btn-primary-red px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-lg group space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-44 overflow-hidden">
                <img src={proj.image || '/images/hero_plant.png'} alt={proj.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {proj.category}
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  <button
                    onClick={() => handleOpenEdit(proj)}
                    className="p-1.5 bg-slate-900/90 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-md"
                    title="Edit Project"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => deleteProject(proj.id)}
                    className="p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md"
                    title="Delete Project"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-white font-outfit">{proj.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{proj.desc}</p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#E31E24]" /> {proj.location}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#E31E24]" /> {proj.duration}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#E31E24]" /> {proj.year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Project Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 text-white space-y-6 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold font-outfit">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h3>
              <button onClick={() => setIsAddOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Refinery Piping System"
                  value={formProj.title}
                  onChange={(e) => setFormProj({ ...formProj, title: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">Category</label>
                  <select
                    value={formProj.category}
                    onChange={(e) => setFormProj({ ...formProj, category: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  >
                    <option>Mechanical Construction</option>
                    <option>Fabrication & Erection</option>
                    <option>Piping</option>
                    <option>Industrial Maintenance</option>
                    <option>Infrastructure</option>
                    <option>Automation & Electrical</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">Location</label>
                  <input
                    type="text"
                    required
                    value={formProj.location}
                    onChange={(e) => setFormProj({ ...formProj, location: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">Duration</label>
                  <input
                    type="text"
                    required
                    value={formProj.duration}
                    onChange={(e) => setFormProj({ ...formProj, duration: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">Year</label>
                  <input
                    type="text"
                    required
                    value={formProj.year}
                    onChange={(e) => setFormProj({ ...formProj, year: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">Image Asset Path / URL</label>
                <select
                  value={formProj.image}
                  onChange={(e) => setFormProj({ ...formProj, image: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white"
                >
                  <option value="/images/hero_plant.png">Industrial Plant (/images/hero_plant.png)</option>
                  <option value="/images/welder.png">Steel Welder (/images/welder.png)</option>
                  <option value="/images/project_piping.png">Process Piping (/images/project_piping.png)</option>
                  <option value="/images/about_team.png">Engineers Team (/images/about_team.png)</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">Description</label>
                <textarea
                  rows={2}
                  required
                  value={formProj.desc}
                  onChange={(e) => setFormProj({ ...formProj, desc: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white"
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
                  {editingProject ? 'Update Project' : 'Save Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
