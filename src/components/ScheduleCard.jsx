import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Calendar as CalendarIcon } from 'lucide-react';

export default function ScheduleCard({ 
  scheduleItems = [], 
  selectedDay = 18, 
  onSelectDay,
  onAddScheduleItem,
  onOpenFullSchedule 
}) {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(4); // May (0-indexed = 4)
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const year = 2025;

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // May 2025 starts on a Thursday (index 3 if Monday is 0)
  // Days in May 2025: 31
  const daysInMonth = 31;
  const startOffset = 3; // 1st May 2025 is Thursday -> Mon(0), Tue(1), Wed(2), Thu(3)

  const calendarGrid = [];
  // previous month padding days
  for (let i = 0; i < startOffset; i++) {
    calendarGrid.push({ day: 28 + i, currentMonth: false });
  }
  // current month days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarGrid.push({ day: i, currentMonth: true });
  }
  // fill remaining row
  while (calendarGrid.length % 7 !== 0) {
    const nextDay = (calendarGrid.length % 7) - (calendarGrid.length % 7) + 1;
    calendarGrid.push({ day: nextDay, currentMonth: false });
  }

  // Days that have scheduled lessons
  const scheduledDays = scheduleItems.map(item => item.day);

  return (
    <div className="bg-[#e4d5de] hover:bg-[#e2d2dc] transition-colors rounded-3xl p-4 sm:p-5 soft-card-shadow border border-[#d6c4cf]/40">
      {/* Card Title */}
      <div className="flex items-center justify-between mb-3.5">
        <h3 className="font-heading font-bold text-base sm:text-[17px] text-[#4a3547] tracking-tight">
          My schedule
        </h3>
        <button
          onClick={onAddScheduleItem}
          className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#f5ede6] text-[#6d5168] hover:bg-[#8e7087] hover:text-white transition-all flex items-center gap-1 cursor-pointer shadow-2xs"
        >
          <Plus size={13} />
          <span>Add Lesson</span>
        </button>
      </div>

      {/* Main Schedule Dual-Pane Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
        {/* Left Sub-card: Mini Month Calendar */}
        <div className="md:col-span-6 bg-[#f5ede6] rounded-2xl p-3 sm:p-3.5 shadow-2xs border border-[#ded0db]/60">
          {/* Month & Nav Arrows */}
          <div className="flex items-center justify-between mb-2">
            <button 
              onClick={() => setCurrentMonthIndex(prev => Math.max(0, prev - 1))}
              className="p-1 text-[#8b7486] hover:text-[#483344] hover:bg-[#e4d5de] rounded-lg transition-colors cursor-pointer"
            >
              <ChevronLeft size={15} />
            </button>
            <span className="font-heading font-bold text-xs sm:text-sm text-[#483344] tracking-tight">
              {months[currentMonthIndex]} {year}
            </span>
            <button 
              onClick={() => setCurrentMonthIndex(prev => Math.min(11, prev + 1))}
              className="p-1 text-[#8b7486] hover:text-[#483344] hover:bg-[#e4d5de] rounded-lg transition-colors cursor-pointer"
            >
              <ChevronRight size={15} />
            </button>
          </div>

          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {daysOfWeek.map((day, idx) => (
              <span key={idx} className="text-[10px] sm:text-[11px] font-semibold text-[#8b7486]">
                {day}
              </span>
            ))}
          </div>

          {/* Calendar Grid Numbers */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {calendarGrid.map((item, idx) => {
              const isSelected = item.currentMonth && item.day === selectedDay;
              const hasLesson = item.currentMonth && scheduledDays.includes(item.day);

              return (
                <button
                  key={idx}
                  disabled={!item.currentMonth}
                  onClick={() => item.currentMonth && onSelectDay(item.day)}
                  className={`
                    relative h-6 sm:h-7 text-[11px] sm:text-[12px] font-medium rounded-full flex items-center justify-center transition-all cursor-pointer
                    ${!item.currentMonth ? 'text-[#bfa9bc] opacity-40 cursor-default' : 'hover:bg-[#e4d5de]'}
                    ${isSelected ? 'bg-[#8e7087] text-white font-bold shadow-xs hover:bg-[#8e7087]' : 'text-[#483344]'}
                  `}
                >
                  {item.day}
                  {hasLesson && !isSelected && (
                    <span className="absolute bottom-0.5 w-1 h-1 bg-[#8e7087] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Agenda List Pills */}
        <div className="md:col-span-6 flex flex-col space-y-2.5">
          {scheduleItems.slice(0, 3).map((item) => {
            const isTargetDay = item.day === selectedDay;

            return (
              <div
                key={item.id}
                onClick={() => onSelectDay(item.day)}
                className={`
                  group flex items-center justify-between px-3 py-2 rounded-2xl sm:rounded-full transition-all cursor-pointer border
                  ${isTargetDay 
                    ? 'bg-[#f5ede6] border-[#8e7087]/40 shadow-xs ring-1 ring-[#8e7087]/20' 
                    : 'bg-[#f5ede6]/80 hover:bg-[#f5ede6] border-transparent hover:border-[#ded0db]'
                  }
                `}
              >
                {/* Left: Date Circle Badge */}
                <div className="flex items-center gap-3">
                  <div className={`
                    w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-heading font-bold text-xs sm:text-sm
                    ${isTargetDay ? 'bg-[#8e7087] text-white' : 'bg-[#ded0db] text-[#5b4356] group-hover:bg-[#8e7087] group-hover:text-white transition-colors'}
                  `}>
                    {item.day}
                  </div>

                  {/* Lesson Name */}
                  <div className="flex flex-col">
                    <span className="text-[12.5px] sm:text-[13px] font-semibold text-[#483344] group-hover:text-[#8e7087] transition-colors leading-tight">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-[#8b7486] font-medium sm:hidden">
                      {item.time}
                    </span>
                  </div>
                </div>

                {/* Right: Time Pill */}
                <div className="hidden sm:block">
                  <span className="text-[11.5px] font-semibold text-[#7d6579]">
                    {item.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
