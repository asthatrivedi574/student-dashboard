import React from 'react';
import { Calendar, Clock, MapPin, Plus, User } from 'lucide-react';

export default function FullScheduleView({ 
  scheduleItems = [], 
  onAddLesson, 
  onSelectDay 
}) {
  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#e4d5de] rounded-3xl p-5 border border-[#d6c4cf]/40">
        <div>
          <h2 className="text-xl font-bold font-heading text-[#483344]">Comprehensive Timetable</h2>
          <p className="text-xs text-[#8b7486]">May 2025 • High School Robotics & Computer Science Track</p>
        </div>
        <button
          onClick={onAddLesson}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8e7087] text-white text-xs font-bold hover:bg-[#785b72] transition-colors cursor-pointer shadow-xs self-start sm:self-auto"
        >
          <Plus size={14} />
          <span>Add Custom Event</span>
        </button>
      </div>

      <div className="space-y-3">
        {scheduleItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectDay(item.day)}
            className="p-4 rounded-3xl bg-[#e4d5de] hover:bg-[#ded0db] border border-[#d6c4cf]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#8e7087] text-white flex flex-col items-center justify-center font-heading flex-shrink-0">
                <span className="text-xs uppercase font-bold opacity-80">MAY</span>
                <span className="text-base font-extrabold leading-none">{item.day}</span>
              </div>

              <div>
                <h4 className="font-heading font-bold text-base text-[#483344] leading-tight">
                  {item.title}
                </h4>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#7d6579] mt-1 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-[#8e7087]" />
                    {item.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-[#8e7087]" />
                    {item.room || "Campus Center"}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={13} className="text-[#8e7087]" />
                    {item.instructor}
                  </span>
                </div>
              </div>
            </div>

            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#f5ede6] text-[#5c4357] self-start sm:self-auto">
              {item.topic || "Scheduled Class"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
