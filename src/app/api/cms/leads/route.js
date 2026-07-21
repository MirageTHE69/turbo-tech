import { NextResponse } from 'next/server';
import { getDbData, saveDbData } from '@/lib/db';

export async function GET() {
  const db = getDbData();
  return NextResponse.json(db.leads || []);
}

export async function POST(req) {
  try {
    const leadData = await req.json();
    const db = getDbData();
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
    db.leads = [newLead, ...(db.leads || [])];
    saveDbData(db);
    return NextResponse.json({ success: true, lead: newLead, leads: db.leads });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const { id, status } = await req.json();
    const db = getDbData();
    db.leads = (db.leads || []).map((l) => (l.id === id ? { ...l, status } : l));
    saveDbData(db);
    return NextResponse.json({ success: true, leads: db.leads });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const db = getDbData();
    db.leads = (db.leads || []).filter((l) => l.id !== id);
    saveDbData(db);
    return NextResponse.json({ success: true, leads: db.leads });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
