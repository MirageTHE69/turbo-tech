'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CmsContext = createContext();

const initialServices = [
  { id: 'srv-1', number: '01', title: 'Mechanical Construction', desc: 'Industrial equipment installation, steel structures, fabrication and erection.', iconName: 'Wrench', image: '/images/hero_plant.png' },
  { id: 'srv-2', number: '02', title: 'Fabrication & Erection', desc: 'Heavy structural fabrication and precision installation for industrial facilities.', iconName: 'Layers', image: '/images/welder.png' },
  { id: 'srv-3', number: '03', title: 'Industrial Piping', desc: 'Pipe fabrication, installation, hydro testing and commissioning.', iconName: 'GitCommit', image: '/images/project_piping.png' },
  { id: 'srv-4', number: '04', title: 'Plant Maintenance', desc: 'Preventive and shutdown maintenance for smooth plant operations.', iconName: 'Settings', image: '/images/about_team.png' },
  { id: 'srv-5', number: '05', title: 'Manpower Supply', desc: 'Skilled and certified manpower including welders, fitters, engineers and technicians.', iconName: 'Users', image: '/images/about_team.png' },
  { id: 'srv-6', number: '06', title: 'Civil Construction', desc: 'Industrial civil works including foundations, heavy equipment bases, and infrastructure.', iconName: 'Building2', image: '/images/civil_construction.png' }
];

const initialProjects = [
  { id: 'proj-1', title: 'Petrochemical Plant Expansion', category: 'Mechanical Construction', desc: 'End-to-end mechanical construction for a petrochemical facility expansion project.', location: 'Gujarat, India', duration: '18 Months', year: '2023', image: '/images/hero_plant.png' },
  { id: 'proj-2', title: 'Steel Structure Fabrication', category: 'Fabrication & Erection', desc: 'Design, fabrication, and erection of structural steel for an industrial manufacturing unit.', location: 'Maharashtra, India', duration: '12 Months', year: '2023', image: '/images/welder.png' },
  { id: 'proj-3', title: 'Process Piping System', category: 'Piping', desc: 'Supply, installation, and testing of process piping systems for a chemical plant.', location: 'Gujarat, India', duration: '10 Months', year: '2022', image: '/images/project_piping.png' },
  { id: 'proj-4', title: 'Plant Maintenance Services', category: 'Industrial Maintenance', desc: 'Comprehensive preventive and predictive maintenance for a large-scale manufacturing plant.', location: 'Tamil Nadu, India', duration: 'Ongoing', year: '2022', image: '/images/about_team.png' },
  { id: 'proj-5', title: 'Storage Tank Farm', category: 'Infrastructure', desc: 'Construction of storage tank farm including foundation, piping, and safety systems.', location: 'Gujarat, India', duration: '14 Months', year: '2022', image: '/images/hero_plant.png' },
  { id: 'proj-6', title: 'Electrical & Automation Upgrade', category: 'Automation & Electrical', desc: 'PLC, SCADA, and electrical system upgrade for improved efficiency and safety.', location: 'Maharashtra, India', duration: '8 Months', year: '2021', image: '/images/project_piping.png' }
];

const initialCourses = [
  { id: 'crs-1', number: '01', title: 'Advanced Arc & TIG Welding Masterclass', badge: '6 Months • 6G Position Certified', desc: 'Plate & pipe welding (SMAW/GTAW 6G position) with live industrial workshop practice.', iconName: 'Hammer' },
  { id: 'crs-2', number: '02', title: 'Industrial Pipe Fitter & Fabricator', badge: '4 Months • Isometric Blueprint', desc: 'Isometric drawing reading, pipe template layout, cutting, beveling, and fitting precision.', iconName: 'Layers' },
  { id: 'crs-3', number: '03', title: 'Mechanical Equipment Erection', badge: '3 Months • Rigging & Alignment', desc: 'Alignment, rigging, heavy machinery erection, dynamic balancing, and torqueing.', iconName: 'Wrench' },
  { id: 'crs-4', number: '04', title: 'Industrial Safety & QA/QC Inspection', badge: '2 Months • HSE & NDT Methods', desc: 'OSHA & NDT inspection methods, hazard identification, permit to work, and QA/QC documentation.', iconName: 'ShieldCheck' },
  { id: 'crs-5', number: '05', title: 'Structural Steel Fabrication', badge: '4 Months • Heavy Beam Assembly', desc: 'Blueprint reading, heavy beam fabrication, column layout, tack welding, and erection.', iconName: 'Award' },
  { id: 'crs-6', number: '06', title: 'Plant Maintenance & Overhauling', badge: '3 Months • Pump & Valve Servicing', desc: 'Pump & valve overhauling, preventive maintenance procedures, and shutdown management.', iconName: 'Settings' }
];

const initialLeads = [
  { id: 'lead-1', name: 'Rajesh Malhotra', email: 'rajesh@relianceind.com', phone: '+91 98210 54321', type: 'Quote Request', service: 'Industrial Piping', subject: 'Refinery Piping Quotation', message: 'Looking for 6G pipe fabricators and fitters for 12,000 inch-dia piping expansion.', status: 'New', date: '2026-07-20 18:30' },
  { id: 'lead-2', name: 'Vikram Singh', email: 'vikram.s@lntconstruction.com', phone: '+91 97112 88900', type: 'Contact Inquiry', service: 'Fabrication & Erection', subject: 'Heavy Structural Steel Erection', message: 'We require 2,500 MT structural steel erection team for steel plant expansion.', status: 'In Progress', date: '2026-07-20 14:15' },
  { id: 'lead-3', name: 'Anil Kumar', email: 'anil.k@gmail.com', phone: '+91 96500 12345', type: 'Course Admission', service: 'Training Institute Program', subject: 'TIG Welding Admission', message: 'Interested in enrolling 5 candidates for 6G Arc & TIG welding masterclass batch.', status: 'Contacted', date: '2026-07-19 11:45' }
];

export function CmsProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [services, setServices] = useState(initialServices);
  const [projects, setProjects] = useState(initialProjects);
  const [courses, setCourses] = useState(initialCourses);
  const [leads, setLeads] = useState(initialLeads);
  const [isLoading, setIsLoading] = useState(true);

  // Load state from API & database on mount
  useEffect(() => {
    async function loadData() {
      try {
        const savedAuth = localStorage.getItem('turbotech_auth');
        if (savedAuth === 'true') setIsAuthenticated(true);

        const res = await fetch('/api/cms');
        if (res.ok) {
          const data = await res.json();
          if (data.services && data.services.length > 0) setServices(data.services);
          if (data.projects && data.projects.length > 0) setProjects(data.projects);
          if (data.courses && data.courses.length > 0) setCourses(data.courses);
          if (data.leads) setLeads(data.leads);
        }
      } catch (err) {
        console.error('Error fetching CMS data from database API:', err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // Auth helper
  const login = (username, password) => {
    if (username === 'admin' && password === 'turbotech2026') {
      setIsAuthenticated(true);
      localStorage.setItem('turbotech_auth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('turbotech_auth', 'false');
  };

  // Lead Helpers
  const addLead = async (leadData) => {
    try {
      const res = await fetch('/api/cms/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      });
      if (res.ok) {
        const result = await res.json();
        if (result.leads) {
          setLeads(result.leads);
          return;
        }
      }
    } catch (err) {
      console.error('Failed to post lead to API:', err);
    }

    // Fallback local update
    const newLead = {
      id: `lead-${Date.now()}`,
      name: leadData.name || leadData.fullName || 'Anonymous',
      email: leadData.email,
      phone: leadData.phone || 'N/A',
      type: leadData.type || 'Quote Request',
      service: leadData.service || 'General Inquiry',
      subject: leadData.subject || 'Website Inquiry',
      message: leadData.message || '',
      status: 'New',
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    };
    setLeads([newLead, ...leads]);
  };

  const updateLeadStatus = async (leadId, newStatus) => {
    setLeads(leads.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l)));
    try {
      await fetch('/api/cms/leads', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadId, status: newStatus }),
      });
    } catch (err) {
      console.error('Failed to update lead status:', err);
    }
  };

  const deleteLead = async (leadId) => {
    setLeads(leads.filter((l) => l.id !== leadId));
    try {
      await fetch(`/api/cms/leads?id=${leadId}`, { method: 'DELETE' });
    } catch (err) {
      console.error('Failed to delete lead:', err);
    }
  };

  // Service Helpers
  const addService = async (srv) => {
    try {
      const res = await fetch('/api/cms/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(srv),
      });
      if (res.ok) {
        const result = await res.json();
        if (result.services) {
          setServices(result.services);
          return;
        }
      }
    } catch (err) {
      console.error('Failed to add service:', err);
    }

    const newSrv = {
      id: `srv-${Date.now()}`,
      number: `0${services.length + 1}`,
      ...srv,
    };
    setServices([newSrv, ...services]);
  };

  const updateService = async (srv) => {
    setServices(services.map((s) => (s.id === srv.id ? { ...s, ...srv } : s)));
    try {
      await fetch('/api/cms/services', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(srv),
      });
    } catch (err) {
      console.error('Failed to update service:', err);
    }
  };

  const deleteService = async (srvId) => {
    setServices(services.filter((s) => s.id !== srvId));
    try {
      await fetch(`/api/cms/services?id=${srvId}`, { method: 'DELETE' });
    } catch (err) {
      console.error('Failed to delete service:', err);
    }
  };

  // Project Helpers
  const addProject = async (proj) => {
    try {
      const res = await fetch('/api/cms/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proj),
      });
      if (res.ok) {
        const result = await res.json();
        if (result.projects) {
          setProjects(result.projects);
          return;
        }
      }
    } catch (err) {
      console.error('Failed to add project:', err);
    }

    const newProj = {
      id: `proj-${Date.now()}`,
      ...proj,
    };
    setProjects([newProj, ...projects]);
  };

  const updateProject = async (proj) => {
    setProjects(projects.map((p) => (p.id === proj.id ? { ...p, ...proj } : p)));
    try {
      await fetch('/api/cms/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(proj),
      });
    } catch (err) {
      console.error('Failed to update project:', err);
    }
  };

  const deleteProject = async (projId) => {
    setProjects(projects.filter((p) => p.id !== projId));
    try {
      await fetch(`/api/cms/projects?id=${projId}`, { method: 'DELETE' });
    } catch (err) {
      console.error('Failed to delete project:', err);
    }
  };

  // Course Helpers
  const addCourse = async (crs) => {
    try {
      const res = await fetch('/api/cms/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(crs),
      });
      if (res.ok) {
        const result = await res.json();
        if (result.courses) {
          setCourses(result.courses);
          return;
        }
      }
    } catch (err) {
      console.error('Failed to add course:', err);
    }

    const newCrs = {
      id: `crs-${Date.now()}`,
      number: `0${courses.length + 1}`,
      ...crs,
    };
    setCourses([newCrs, ...courses]);
  };

  const updateCourse = async (crs) => {
    setCourses(courses.map((c) => (c.id === crs.id ? { ...c, ...crs } : c)));
    try {
      await fetch('/api/cms/courses', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(crs),
      });
    } catch (err) {
      console.error('Failed to update course:', err);
    }
  };

  const deleteCourse = async (crsId) => {
    setCourses(courses.filter((c) => c.id !== crsId));
    try {
      await fetch(`/api/cms/courses?id=${crsId}`, { method: 'DELETE' });
    } catch (err) {
      console.error('Failed to delete course:', err);
    }
  };

  return (
    <CmsContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        login,
        logout,
        services,
        addService,
        updateService,
        deleteService,
        projects,
        addProject,
        updateProject,
        deleteProject,
        courses,
        addCourse,
        updateCourse,
        deleteCourse,
        leads,
        addLead,
        updateLeadStatus,
        deleteLead,
      }}
    >
      {children}
    </CmsContext.Provider>
  );
}

export function useCms() {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
}
