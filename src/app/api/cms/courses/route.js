import { NextResponse } from 'next/server';
import { getDbData, saveDbData } from '@/lib/db';

export async function GET() {
  const db = getDbData();
  return NextResponse.json(db.courses || []);
}

export async function POST(req) {
  try {
    const crs = await req.json();
    const db = getDbData();
    const newCourse = {
      id: crs.id || `crs-${Date.now()}`,
      number: crs.number || `0${(db.courses?.length || 0) + 1}`,
      title: crs.title,
      badge: crs.badge || '3 Months • Technical Certification',
      desc: crs.desc || '',
      iconName: crs.iconName || 'Hammer',
    };
    db.courses = [newCourse, ...(db.courses || [])];
    saveDbData(db);
    return NextResponse.json({ success: true, course: newCourse, courses: db.courses });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const updatedCrs = await req.json();
    const db = getDbData();
    db.courses = (db.courses || []).map((c) => (c.id === updatedCrs.id ? { ...c, ...updatedCrs } : c));
    saveDbData(db);
    return NextResponse.json({ success: true, courses: db.courses });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const db = getDbData();
    db.courses = (db.courses || []).filter((c) => c.id !== id);
    saveDbData(db);
    return NextResponse.json({ success: true, courses: db.courses });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
