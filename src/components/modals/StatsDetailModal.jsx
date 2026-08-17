import React from 'react';
import { X, TrendingUp, CheckCircle, Award, BarChart3, Clock } from 'lucide-react';
import CircularProgress from '../CircularProgress';

export default function StatsDetailModal({ 
  statData, 
  onClose 
}) {
  if (!statData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f5ede6] rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-[#ded0db] flex flex-col max-h-[90vh]"
      >
        {/* Top Header Card */}
        <div className="bg-[#8e7087] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-4">
            <CircularProgress
              percentage={statData.percentage}
              color={statData.color || "#ffffff"}
              size={70}
              strokeWidth={6}
              textColor="text-white"
            />
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                Performance Analytics
              </span>
              <h3 className="font-heading font-bold text-xl text-white">
                {statData.title} Breakdown
              </h3>
              <span className="text-xs text-white/90 font-medium">
                {statData.badge} • {statData.trend}
              </span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer self-start"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4 overflow-y-auto">
          {/* Summary Note */}
          <div className="p-3.5 rounded-2xl bg-[#ece3e8] border border-[#ded0db]">
            <p className="text-xs sm:text-[13px] text-[#553f51] leading-relaxed">
              {statData.details}
            </p>
          </div>

          {/* Breakdown Table/List */}
          {statData.breakdown && (
            <div>
              <h4 className="text-xs font-bold font-heading uppercase text-[#8b7486] tracking-wider mb-2">
                Detailed Subject Breakdown
              </h4>
              <div className="space-y-2">
                {statData.breakdown.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/60 border border-[#ded0db]/80 text-xs"
                  >
                    <span className="font-semibold text-[#483344]">
                      {item.subject || item.title || item.category}
                    </span>
                    <span className="font-bold font-heading px-2 py-0.5 rounded-lg bg-[#ded0db] text-[#483344]">
                      {item.rate || item.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#ece3e8] border-t border-[#ded0db] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-bold bg-[#8e7087] text-white hover:bg-[#785b72] transition-colors cursor-pointer shadow-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
