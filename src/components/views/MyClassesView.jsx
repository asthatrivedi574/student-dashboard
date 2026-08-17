import React, { useState } from 'react';
import { BookOpen, User, Clock, Award, CheckCircle, ChevronRight, Play, FileText } from 'lucide-react';

export default function MyClassesView({ classes = [], onTeacherClick }) {
  const [selectedClass, setSelectedClass] = useState(classes[0] || null);

  return (
    <div className="space-y-5 animate-in fade-in duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#e4d5de] rounded-3xl p-5 border border-[#d6c4cf]/40">
        <div>
          <h2 className="text-xl font-bold font-heading text-[#483344]">Enrolled Courses</h2>
          <p className="text-xs text-[#8b7486]">Spring Semester 2025 • 4 Active Courses</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full bg-[#f5ede6] text-[#6d4f66]">
          <span>Total Credits: 14.0</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Classes List */}
        <div className="lg:col-span-7 space-y-3.5">
          {classes.map((cls) => {
            const isSelected = selectedClass?.id === cls.id;

            return (
              <div
                key={cls.id}
                onClick={() => setSelectedClass(cls)}
                className={`
                  p-4 rounded-3xl transition-all cursor-pointer border
                  ${isSelected 
                    ? 'bg-[#f5ede6] border-[#8e7087] shadow-md ring-2 ring-[#8e7087]/20' 
                    : 'bg-[#e4d5de] hover:bg-[#e0d0da] border-transparent'
                  }
                `}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#ded0db] text-[#5e475b]">
                      {cls.code} • {cls.credits} Credits
                    </span>
                    <h3 className="font-heading font-bold text-base text-[#483344] mt-1">
                      {cls.name}
                    </h3>
                    <p className="text-xs text-[#8b7486] font-medium flex items-center gap-1.5 mt-0.5">
                      <User size={13} />
                      <span>{cls.instructor}</span>
                      <span>•</span>
                      <Clock size={13} />
                      <span>{cls.schedule}</span>
                    </p>
                  </div>

                  <div className="px-3 py-1 rounded-2xl bg-white/80 border border-[#ded0db] font-heading font-bold text-xs text-[#483344]">
                    {cls.grade}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-3">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#7d6579] mb-1">
                    <span>Course Progress</span>
                    <span>{cls.progress}%</span>
                  </div>
                  <div className="w-full bg-[#ded0db] h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${cls.progress}%`, backgroundColor: cls.color || '#8e7087' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Course Details */}
        {selectedClass && (
          <div className="lg:col-span-5 bg-[#e4d5de] rounded-3xl p-5 flex flex-col justify-between border border-[#d6c4cf]/40 shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#8e7087] uppercase tracking-wider">
                  Course Syllabus
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#f5ede6] text-[#483344]">
                  {selectedClass.completedModules}/{selectedClass.modules} Modules
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-[#483344] mb-2">
                {selectedClass.name}
              </h3>
              <p className="text-xs text-[#5e475b] leading-relaxed mb-4">
                {selectedClass.description}
              </p>

              <div className="space-y-2 mb-4">
                <h4 className="text-xs font-bold text-[#7d6579] uppercase tracking-wider">Upcoming Topics</h4>
                <div className="p-3 rounded-2xl bg-[#f5ede6] text-xs text-[#483344] flex items-center justify-between">
                  <span>Module 10: State Machines & PID Tuning</span>
                  <Play size={13} className="text-[#8e7087]" />
                </div>
                <div className="p-3 rounded-2xl bg-[#f5ede6] text-xs text-[#483344] flex items-center justify-between">
                  <span>Module 11: Real-time Operating Systems (RTOS)</span>
                  <FileText size={13} className="text-[#8e7087]" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#ded0db]/80 flex gap-2">
              <button 
                onClick={() => onTeacherClick({ name: selectedClass.instructor, role: 'Instructor', id: 't1' })}
                className="flex-1 py-2.5 rounded-full bg-[#8e7087] text-white text-xs font-bold hover:bg-[#785b72] transition-colors cursor-pointer shadow-xs"
              >
                Contact Instructor
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
