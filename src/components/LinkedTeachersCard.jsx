import React from 'react';
import { MessageSquareMore, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function LinkedTeachersCard({ 
  teachers = [], 
  onTeacherClick, 
  onSeeMore 
}) {
  return (
    <div className="bg-[#e4d5de] hover:bg-[#e2d2dc] transition-colors rounded-3xl p-4 sm:p-5 flex flex-col justify-between soft-card-shadow border border-[#d6c4cf]/40">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-3.5">
        <h3 className="font-heading font-bold text-base sm:text-[17px] text-[#4a3547] tracking-tight">
          Linked Teachers
        </h3>
        <span className="text-xs text-[#8b7486] font-medium px-2 py-0.5 rounded-full bg-[#ded0db]">
          {teachers.length} Active
        </span>
      </div>

      {/* Teachers List */}
      <div className="flex flex-col space-y-2.5">
        {teachers.map((teacher) => (
          <div
            key={teacher.id}
            onClick={() => onTeacherClick(teacher)}
            className="group flex items-center justify-between p-2 sm:p-2.5 rounded-2xl bg-[#f5ede6]/70 hover:bg-[#f5ede6] transition-all cursor-pointer border border-transparent hover:border-[#ded0db]"
          >
            <div className="flex items-center gap-3">
              {/* Circular Avatar */}
              <div className="relative">
                <img
                  src={teacher.avatar}
                  alt={teacher.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white/60 group-hover:scale-105 transition-transform"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";
                  }}
                />
                {teacher.status === 'online' && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col">
                <span className="text-[13.5px] font-semibold text-[#483344] group-hover:text-[#8e7087] transition-colors leading-snug">
                  {teacher.name}
                </span>
                <span className="text-[11.5px] text-[#8b7486] capitalize font-medium">
                  {teacher.role}
                </span>
              </div>
            </div>

            {/* Circular Purple Message Bubble Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onTeacherClick(teacher);
              }}
              className="w-8 h-8 rounded-full bg-[#8e7087] text-white flex items-center justify-center hover:bg-[#785b72] hover:scale-110 active:scale-95 transition-all shadow-xs cursor-pointer"
              title={`Message ${teacher.name}`}
            >
              <MessageSquareMore size={14} className="stroke-[2.2]" />
            </button>
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
