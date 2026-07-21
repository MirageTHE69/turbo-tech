'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/Logo';
import { Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

export default function AdminLogin() {
  const router = useRouter();
  const { login } = useCms();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('turbotech2026');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      router.push('/admin');
    } else {
      setError('Invalid username or password. Please try admin / turbotech2026');
    }
  };

  const handleQuickLogin = () => {
    login('admin', 'turbotech2026');
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] flex items-center justify-center p-4 relative overflow-hidden text-white">
      {/* Background Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E31E24]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-md relative z-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="flex justify-center mb-4">
            <Logo light />
          </div>
          <h2 className="text-2xl font-bold font-outfit text-white">Admin CMS Portal</h2>
          <p className="text-xs text-slate-400">Sign in to manage leads, services, and engineering projects</p>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl text-xs text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-outfit">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-outfit">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#E31E24]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 btn-primary-red rounded-xl font-bold text-sm flex items-center justify-center gap-2 mt-4"
          >
            <span>Login to CMS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Quick Access Helper */}
        <div className="pt-4 border-t border-slate-800 text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#E31E24]" />
            <span>Default: admin / turbotech2026</span>
          </div>
          <button
            onClick={handleQuickLogin}
            className="text-xs text-[#E31E24] hover:underline font-bold"
          >
            Click here for 1-Click Quick Demo Login
          </button>
        </div>
      </div>
    </div>
  );
}
