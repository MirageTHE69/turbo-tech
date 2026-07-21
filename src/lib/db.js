import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'src', 'data', 'db.json');

const initialData = {
  services: [
    { id: 'srv-1', number: '01', title: 'Mechanical Construction', desc: 'Industrial equipment installation, steel structures, fabrication and erection.', iconName: 'Wrench' },
    { id: 'srv-2', number: '02', title: 'Fabrication & Erection', desc: 'Heavy structural fabrication and precision installation for industrial facilities.', iconName: 'Layers' },
    { id: 'srv-3', number: '03', title: 'Industrial Piping', desc: 'Pipe fabrication, installation, hydro testing and commissioning.', iconName: 'GitCommit' },
    { id: 'srv-4', number: '04', title: 'Plant Maintenance', desc: 'Preventive and shutdown maintenance for smooth plant operations.', iconName: 'Settings' },
    { id: 'srv-5', number: '05', title: 'Manpower Supply', desc: 'Skilled and certified manpower including welders, fitters, engineers and technicians.', iconName: 'Users' },
    { id: 'srv-6', number: '06', title: 'Training Institute', desc: 'Industry-oriented technical training to build skilled professionals.', iconName: 'GraduationCap' }
  ],
  projects: [
    { id: 'proj-1', title: 'Petrochemical Plant Expansion', category: 'Mechanical Construction', desc: 'End-to-end mechanical construction for a petrochemical facility expansion project.', location: 'Gujarat, India', duration: '18 Months', year: '2023', image: '/images/hero_plant.png' },
    { id: 'proj-2', title: 'Steel Structure Fabrication', category: 'Fabrication & Erection', desc: 'Design, fabrication, and erection of structural steel for an industrial manufacturing unit.', location: 'Maharashtra, India', duration: '12 Months', year: '2023', image: '/images/welder.png' },
    { id: 'proj-3', title: 'Process Piping System', category: 'Piping', desc: 'Supply, installation, and testing of process piping systems for a chemical plant.', location: 'Gujarat, India', duration: '10 Months', year: '2022', image: '/images/project_piping.png' },
    { id: 'proj-4', title: 'Plant Maintenance Services', category: 'Industrial Maintenance', desc: 'Comprehensive preventive and predictive maintenance for a large-scale manufacturing plant.', location: 'Tamil Nadu, India', duration: 'Ongoing', year: '2022', image: '/images/about_team.png' },
    { id: 'proj-5', title: 'Storage Tank Farm', category: 'Infrastructure', desc: 'Construction of storage tank farm including foundation, piping, and safety systems.', location: 'Gujarat, India', duration: '14 Months', year: '2022', image: '/images/hero_plant.png' },
    { id: 'proj-6', title: 'Electrical & Automation Upgrade', category: 'Automation & Electrical', desc: 'PLC, SCADA, and electrical system upgrade for improved efficiency and safety.', location: 'Maharashtra, India', duration: '8 Months', year: '2021', image: '/images/project_piping.png' }
  ],
  courses: [
    { id: 'crs-1', number: '01', title: 'Advanced Arc & TIG Welding Masterclass', badge: '6 Months • 6G Position Certified', desc: 'Plate & pipe welding (SMAW/GTAW 6G position) with live industrial workshop practice.', iconName: 'Hammer' },
    { id: 'crs-2', number: '02', title: 'Industrial Pipe Fitter & Fabricator', badge: '4 Months • Isometric Blueprint', desc: 'Isometric drawing reading, pipe template layout, cutting, beveling, and fitting precision.', iconName: 'Layers' },
    { id: 'crs-3', number: '03', title: 'Mechanical Equipment Erection', badge: '3 Months • Rigging & Alignment', desc: 'Alignment, rigging, heavy machinery erection, dynamic balancing, and torqueing.', iconName: 'Wrench' },
    { id: 'crs-4', number: '04', title: 'Industrial Safety & QA/QC Inspection', badge: '2 Months • HSE & NDT Methods', desc: 'OSHA & NDT inspection methods, hazard identification, permit to work, and QA/QC documentation.', iconName: 'ShieldCheck' },
    { id: 'crs-5', number: '05', title: 'Structural Steel Fabrication', badge: '4 Months • Heavy Beam Assembly', desc: 'Blueprint reading, heavy beam fabrication, column layout, tack welding, and erection.', iconName: 'Award' },
    { id: 'crs-6', number: '06', title: 'Plant Maintenance & Overhauling', badge: '3 Months • Pump & Valve Servicing', desc: 'Pump & valve overhauling, preventive maintenance procedures, and shutdown management.', iconName: 'Settings' }
  ],
  leads: [
    { id: 'lead-1', name: 'Rajesh Malhotra', email: 'rajesh@relianceind.com', phone: '+91 98210 54321', type: 'Quote Request', service: 'Industrial Piping', subject: 'Refinery Piping Quotation', message: 'Looking for 6G pipe fabricators and fitters for 12,000 inch-dia piping expansion.', status: 'New', date: '2026-07-20 18:30' },
    { id: 'lead-2', name: 'Vikram Singh', email: 'vikram.s@lntconstruction.com', phone: '+91 97112 88900', type: 'Contact Inquiry', service: 'Fabrication & Erection', subject: 'Heavy Structural Steel Erection', message: 'We require 2,500 MT structural steel erection team for steel plant expansion.', status: 'In Progress', date: '2026-07-20 14:15' },
    { id: 'lead-3', name: 'Anil Kumar', email: 'anil.k@gmail.com', phone: '+91 96500 12345', type: 'Course Admission', service: 'Training Institute Program', subject: 'TIG Welding Admission', message: 'Interested in enrolling 5 candidates for 6G Arc & TIG welding masterclass batch.', status: 'Contacted', date: '2026-07-19 11:45' }
  ]
};

export function getDbData() {
  try {
    if (!fs.existsSync(dbPath)) {
      const dir = path.dirname(dbPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2), 'utf-8');
      return initialData;
    }
    const data = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading DB data:', error);
    return initialData;
  }
}

export function saveDbData(data) {
  try {
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error saving DB data:', error);
    return false;
  }
}
