import React from 'react';
import { Award, TrendingUp, Download, CheckCircle, Star, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MyGradesView({ profile, statsData, classes = [] }) {
  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      {/* GPA & Honors Banner */}
      <div className="bg-[#e4d5de] rounded-3xl p-5 sm:p-6 border border-[#d6c4cf]/40 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#8e7087] text-white text-[11px] font-bold">
              Dean's Honor List
            </span>
            <span className="text-xs font-semibold text-[#8b7486]">Spring 2025</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#483344]">
            Academic Performance Report
          </h2>
          <p className="text-xs sm:text-sm text-[#7d6579] mt-0.5">
            {profile?.name || 'Astha'} is in the top 5% of the Class of 2026.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#f5ede6] px-4 py-2.5 rounded-2xl border border-[#ded0db] text-center">
            <span className="text-[11px] font-bold text-[#8b7486] uppercase block">Cumulative GPA</span>
            <span className="text-2xl font-black font-heading text-[#483344]">{profile.gpa}</span>
          </div>
          <button
            onClick={triggerCelebration}
            className="p-3 rounded-2xl bg-[#8e7087] text-white hover:bg-[#785b72] transition-colors cursor-pointer shadow-xs"
            title="Celebrate high GPA!"
          >
            <Sparkles size={20} />
          </button>
        </div>
      </div>

      {/* Courses Grade Transcript */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {classes.map((cls) => (
          <div 
            key={cls.id}
            className="p-4 rounded-3xl bg-[#e4d5de] border border-[#d6c4cf]/40 flex flex-col justify-between"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#8e7087] uppercase tracking-wider">{cls.code}</span>
                <h4 className="font-heading font-bold text-sm sm:text-base text-[#483344] mt-0.5">{cls.name}</h4>
                <span className="text-xs text-[#8b7486] font-medium">{cls.instructor}</span>
              </div>
              <div className="px-3 py-1 rounded-xl bg-[#8e7087] text-white font-heading font-bold text-sm">
                {cls.grade}
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-[#ded0db] flex items-center justify-between text-xs text-[#7d6579]">
              <span>Credits: {cls.credits}.0</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle size={13} /> Passing with Honors
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
