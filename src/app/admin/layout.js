'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import { LayoutDashboard, Inbox, Wrench, Building2, GraduationCap, ExternalLink, LogOut, ShieldAlert } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, logout, leads } = useCms();

  // Skip layout styling if on login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0F17] flex items-center justify-center p-4 text-white text-center">
        <div className="space-y-4 max-w-sm">
          <ShieldAlert className="w-12 h-12 text-[#E31E24] mx-auto" />
          <h3 className="text-xl font-bold font-outfit">Access Restricted</h3>
          <p className="text-xs text-slate-400">Please sign in with admin credentials to access the CMS management panel.</p>
          <button
            onClick={() => router.push('/admin/login')}
            className="btn-primary-red px-6 py-2.5 rounded-full text-xs font-bold"
          >
            Go to Admin Login
          </button>
        </div>
      </div>
    );
  }

  const newLeadsCount = leads.filter((l) => l.status === 'New').length;

  const navItems = [
    { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { label: 'Leads & Inquiries', href: '/admin/leads', icon: Inbox, badge: newLeadsCount },
    { label: 'Services Manager', href: '/admin/services', icon: Wrench },
    { label: 'Projects Manager', href: '/admin/projects', icon: Building2 },
    { label: 'Training Courses', href: '/admin/courses', icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B0F17] border-r border-slate-800 flex flex-col justify-between shrink-0">
        <div>
          <div className="p-6 border-b border-slate-800">
            <Logo light />
          </div>

          <nav className="p-4 space-y-1.5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-3 pb-2 font-outfit">
              CMS Navigation
            </div>

            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold font-outfit transition-all ${
                    isActive
                      ? 'bg-[#E31E24] text-white shadow-lg shadow-[#E31E24]/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge > 0 && (
                    <span className="bg-white text-[#E31E24] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Live Website</span>
          </a>

          <button
            onClick={() => {
              logout();
              router.push('/admin/login');
            }}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-400 hover:bg-red-500/10 rounded-xl transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Body */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 border-b border-slate-800 bg-[#0B0F17]/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="text-sm font-bold text-white font-outfit">
            Turbo Tech Admin CMS Control Center
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400 font-medium">Logged in as <strong className="text-white">Admin</strong></span>
            <div className="w-8 h-8 rounded-full bg-[#E31E24] text-white font-bold flex items-center justify-center text-xs font-outfit">
              TT
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-8 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
