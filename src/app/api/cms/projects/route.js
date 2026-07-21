import { NextResponse } from 'next/server';
import { getDbData, saveDbData } from '@/lib/db';

export async function GET() {
  const db = getDbData();
  return NextResponse.json(db.projects || []);
}

export async function POST(req) {
  try {
    const proj = await req.json();
    const db = getDbData();
    const newProject = {
      id: proj.id || `proj-${Date.now()}`,
      title: proj.title,
      category: proj.category || 'Mechanical Construction',
      desc: proj.desc || '',
      location: proj.location || 'Gujarat, India',
      duration: proj.duration || '12 Months',
      year: proj.year || new Date().getFullYear().toString(),
      image: proj.image || '/images/hero_plant.png',
    };
    db.projects = [newProject, ...(db.projects || [])];
    saveDbData(db);
    return NextResponse.json({ success: true, project: newProject, projects: db.projects });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const updatedProj = await req.json();
    const db = getDbData();
    db.projects = (db.projects || []).map((p) => (p.id === updatedProj.id ? { ...p, ...updatedProj } : p));
    saveDbData(db);
    return NextResponse.json({ success: true, projects: db.projects });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const db = getDbData();
    db.projects = (db.projects || []).filter((p) => p.id !== id);
    saveDbData(db);
    return NextResponse.json({ success: true, projects: db.projects });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
