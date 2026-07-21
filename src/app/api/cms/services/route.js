import { NextResponse } from 'next/server';
import { getDbData, saveDbData } from '@/lib/db';

export async function GET() {
  const db = getDbData();
  return NextResponse.json(db.services || []);
}

export async function POST(req) {
  try {
    const srv = await req.json();
    const db = getDbData();
    const newService = {
      id: srv.id || `srv-${Date.now()}`,
      number: srv.number || `0${(db.services?.length || 0) + 1}`,
      title: srv.title,
      desc: srv.desc,
      iconName: srv.iconName || 'Wrench',
    };
    db.services = [newService, ...(db.services || [])];
    saveDbData(db);
    return NextResponse.json({ success: true, service: newService, services: db.services });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const updatedSrv = await req.json();
    const db = getDbData();
    db.services = (db.services || []).map((s) => (s.id === updatedSrv.id ? { ...s, ...updatedSrv } : s));
    saveDbData(db);
    return NextResponse.json({ success: true, services: db.services });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const db = getDbData();
    db.services = (db.services || []).filter((s) => s.id !== id);
    saveDbData(db);
    return NextResponse.json({ success: true, services: db.services });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
