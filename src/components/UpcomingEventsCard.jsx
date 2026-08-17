import React from 'react';
import { Calendar, Clock, ChevronRight, Sparkles } from 'lucide-react';

export default function UpcomingEventsCard({ 
  events = [], 
  onEventClick, 
  onSeeMore 
}) {
  return (
    <div className="bg-[#e4d5de] hover:bg-[#e2d2dc] transition-colors rounded-3xl p-4 sm:p-5 flex flex-col justify-between soft-card-shadow border border-[#d6c4cf]/40">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h3 className="font-heading font-bold text-base sm:text-[17px] text-[#4a3547] tracking-tight">
          Upcoming events
        </h3>
        <span className="text-xs text-[#8b7486] font-medium px-2 py-0.5 rounded-full bg-[#ded0db]">
          May - Jun
        </span>
      </div>

      {/* Events List (Pill Style Containers) */}
      <div className="flex flex-col space-y-3">
        {events.slice(0, 2).map((event) => (
          <div
            key={event.id}
            onClick={() => onEventClick(event)}
            className="group flex items-center justify-between p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl bg-[#f5ede6]/80 hover:bg-[#f5ede6] transition-all cursor-pointer border border-transparent hover:border-[#ded0db] gap-3"
          >
            {/* Left: Avatar Thumbnail */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative flex-shrink-0">
                <img
                  src={event.avatar}
                  alt={event.title}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover ring-2 ring-white/60 group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80";
                  }}
                />
                <span className="absolute -top-1 -right-1 p-0.5 bg-[#8e7087] text-white rounded-full">
                  <Sparkles size={9} />
                </span>
              </div>

              {/* Title & Info */}
              <div className="flex flex-col min-w-0">
                <span className="text-[12.5px] sm:text-[13px] font-semibold text-[#483344] group-hover:text-[#8e7087] transition-colors leading-tight line-clamp-1">
                  {event.title}
                </span>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-[#8b7486] font-medium">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.time}</span>
                </div>
              </div>
            </div>

            {/* Right: Pill Time or RSVP */}
            <div className="flex-shrink-0">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#e4d5de] text-[#5e475b] group-hover:bg-[#8e7087] group-hover:text-white transition-colors">
                {event.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer "See more >" */}
      <div className="flex justify-end mt-3 pt-1">
        <button
          onClick={onSeeMore}
          className="flex items-center gap-1 text-[12px] font-medium text-[#7d6579] hover:text-[#483344] group cursor-pointer transition-colors"
        >
          <span>See more</span>
          <ChevronRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
