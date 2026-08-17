import React from 'react';
import CircularProgress from './CircularProgress';
import { ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

export default function StatsColumn({ 
  statsData, 
  onStatClick, 
  onSeeMore 
}) {
  const cards = [
    {
      key: 'attendance',
      title: statsData.attendance.title,
      percentage: statsData.attendance.percentage,
      color: statsData.attendance.color || '#ff758f',
      data: statsData.attendance
    },
    {
      key: 'homework',
      title: statsData.homework.title,
      percentage: statsData.homework.percentage,
      color: statsData.homework.color || '#2dd4bf',
      data: statsData.homework
    },
    {
      key: 'rating',
      title: statsData.rating.title,
      percentage: statsData.rating.percentage,
      color: statsData.rating.color || '#fbbf24',
      data: statsData.rating
    }
  ];

  return (
    <div className="bg-[#e4d5de] rounded-3xl p-4 sm:p-5 flex flex-col justify-between h-full soft-card-shadow border border-[#d6c4cf]/40">
      {/* 3 Stacked Stat Cards */}
      <div className="flex flex-col space-y-3.5">
        {cards.map((card) => (
          <div
            key={card.key}
            onClick={() => onStatClick(card.data)}
            className="group relative bg-[#8e7087] hover:bg-[#83657c] rounded-2xl sm:rounded-3xl p-4 flex flex-col items-center justify-center stat-card-shadow transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            {/* Header Title */}
            <span className="font-heading font-semibold text-white/95 text-sm sm:text-[15px] tracking-wide mb-2">
              {card.title}
            </span>

            {/* Circular Progress Ring */}
            <div className="my-1 py-1">
              <CircularProgress
                percentage={card.percentage}
                color={card.color}
                size={96}
                strokeWidth={7.5}
                textColor="text-white"
              />
            </div>

            {/* Subtle trend pill visible on hover */}
            <div className="mt-1 opacity-80 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[10px] text-white/80 font-medium">
              <TrendingUp size={11} className="text-white" />
              <span>{card.data.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* "See more ->" footer button */}
      <div className="flex items-center justify-center mt-4 pt-1">
        <button
          onClick={onSeeMore}
          className="flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#5c4458] hover:text-[#382635] group cursor-pointer transition-all"
        >
          <span>See more</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
