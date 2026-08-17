import React, { useState } from 'react';
import { User, Bell, Lock, Palette, Shield, Save, Check } from 'lucide-react';

export default function SettingsView({ profile, onUpdateProfile }) {
  const [formData, setFormData] = useState({
    name: profile.name || 'Astha',
    lastName: profile.lastName || 'Trivedi',
    email: profile.email || 'astha.trivedi@smartech.edu',
    studentId: profile.studentId || 'STU-88241',
    notifications: true,
    emailAlerts: false,
    darkMode: false
  });
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-5 animate-in fade-in duration-300">
      <div className="bg-[#e4d5de] rounded-3xl p-5 border border-[#d6c4cf]/40">
        <h2 className="text-xl font-bold font-heading text-[#483344]">Account & Preferences</h2>
        <p className="text-xs text-[#8b7486]">Manage your student profile, security, and notification settings.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#e4d5de] rounded-3xl p-5 sm:p-6 border border-[#d6c4cf]/40 space-y-5">
        {/* Profile Card Header */}
        <div className="flex items-center gap-4 pb-4 border-b border-[#ded0db]">
          <img
            src={profile.avatar}
            alt={profile.fullName}
            className="w-16 h-16 rounded-full object-cover ring-4 ring-[#8e7087]/30"
          />
          <div>
            <h3 className="font-heading font-bold text-base text-[#483344]">{formData.name} {formData.lastName}</h3>
            <span className="text-xs text-[#8b7486] font-medium">{formData.studentId} • {profile.school}</span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#684f64] uppercase tracking-wider mb-1">First Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#f5ede6] rounded-2xl px-3.5 py-2 text-xs sm:text-sm text-[#483344] border border-[#ded0db] focus:outline-hidden focus:ring-2 focus:ring-[#8e7087]/50"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#684f64] uppercase tracking-wider mb-1">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              className="w-full bg-[#f5ede6] rounded-2xl px-3.5 py-2 text-xs sm:text-sm text-[#483344] border border-[#ded0db] focus:outline-hidden focus:ring-2 focus:ring-[#8e7087]/50"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#684f64] uppercase tracking-wider mb-1">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#f5ede6] rounded-2xl px-3.5 py-2 text-xs sm:text-sm text-[#483344] border border-[#ded0db] focus:outline-hidden focus:ring-2 focus:ring-[#8e7087]/50"
          />
        </div>

        {/* Toggles */}
        <div className="pt-2 space-y-3">
          <h4 className="text-xs font-bold text-[#684f64] uppercase tracking-wider">Preferences</h4>
          <label className="flex items-center justify-between p-3 rounded-2xl bg-[#f5ede6] cursor-pointer">
            <span className="text-xs font-semibold text-[#483344]">Push Notifications for Schedule Reminders</span>
            <input
              type="checkbox"
              checked={formData.notifications}
              onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
              className="w-4 h-4 accent-[#8e7087] rounded cursor-pointer"
            />
          </label>
          <label className="flex items-center justify-between p-3 rounded-2xl bg-[#f5ede6] cursor-pointer">
            <span className="text-xs font-semibold text-[#483344]">Email digests for homework grading & feedback</span>
            <input
              type="checkbox"
              checked={formData.emailAlerts}
              onChange={(e) => setFormData({ ...formData, emailAlerts: e.target.checked })}
              className="w-4 h-4 accent-[#8e7087] rounded cursor-pointer"
            />
          </label>
        </div>

        {/* Save button */}
        <div className="pt-3 flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#8e7087] text-white text-xs sm:text-sm font-bold hover:bg-[#785b72] transition-colors cursor-pointer shadow-xs"
          >
            {saved ? (
              <>
                <Check size={16} />
                <span>Changes Saved!</span>
              </>
            ) : (
              <>
                <Save size={16} />
                <span>Save Settings</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
