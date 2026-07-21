'use client';

import React, { useState } from 'react';
import { useCms } from '@/context/CmsContext';
import { Plus, Trash2, Edit2, Clock, X } from 'lucide-react';

export default function CoursesCmsPage() {
  const { courses, addCourse, updateCourse, deleteCourse } = useCms();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const [formCrs, setFormCrs] = useState({
    title: '',
    badge: '3 Months • Technical Certification',
    desc: '',
    iconName: 'Hammer',
  });

  const handleOpenAdd = () => {
    setEditingCourse(null);
    setFormCrs({ title: '', badge: '3 Months • Technical Certification', desc: '', iconName: 'Hammer' });
    setIsAddOpen(true);
  };

  const handleOpenEdit = (crs) => {
    setEditingCourse(crs);
    setFormCrs({
      title: crs.title,
      badge: crs.badge,
      desc: crs.desc,
      iconName: crs.iconName || 'Hammer',
    });
    setIsAddOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCourse) {
      updateCourse({
        ...editingCourse,
        ...formCrs,
      });
    } else {
      addCourse(formCrs);
    }
    setIsAddOpen(false);
    setEditingCourse(null);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
            Training Courses Manager
          </h1>
          <p className="text-xs text-slate-400">
            Manage, edit, or remove technical training institute programs and certified courses
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="btn-primary-red px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Course</span>
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((crs) => (
          <div
            key={crs.id}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-6 relative group space-y-4 hover:border-[#E31E24]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#E31E24] font-outfit uppercase tracking-widest">
                  Course {crs.number}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleOpenEdit(crs)}
                    className="p-1.5 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                    title="Edit Course"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => deleteCourse(crs.id)}
                    className="p-1.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                    title="Delete Course"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full font-outfit mt-3">
                <Clock className="w-3.5 h-3.5" />
                <span>{crs.badge}</span>
              </div>

              <h3 className="text-lg font-bold text-white font-outfit mt-2">{crs.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mt-2">{crs.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Course Modal */}
      {isAddOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 text-white space-y-6 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold font-outfit">
                {editingCourse ? 'Edit Technical Course' : 'Add Technical Course'}
              </h3>
              <button onClick={() => setIsAddOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">
                  Course Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. NDT Level II Inspection"
                  value={formCrs.title}
                  onChange={(e) => setFormCrs({ ...formCrs, title: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">
                  Duration & Certification Tag *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 3 Months • ISO Certified"
                  value={formCrs.badge}
                  onChange={(e) => setFormCrs({ ...formCrs, badge: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold uppercase mb-1 font-outfit">
                  Description *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Course modules and practical hands-on details..."
                  value={formCrs.desc}
                  onChange={(e) => setFormCrs({ ...formCrs, desc: e.target.value })}
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
                  {editingCourse ? 'Update Course' : 'Save Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
