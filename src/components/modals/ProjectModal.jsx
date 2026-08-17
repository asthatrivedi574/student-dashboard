import React from 'react';
import { X, Award, CheckCircle, Tag, Calendar, User, FileCode } from 'lucide-react';

export default function ProjectModal({ 
  project, 
  onClose 
}) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f5ede6] rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-[#ded0db] flex flex-col max-h-[90vh]"
      >
        {/* Project Image Header */}
        <div className="relative aspect-[16/9] w-full bg-[#3d2739] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-xs transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
          
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#8e7087]/90 backdrop-blur-xs text-white text-xs font-bold shadow-md">
            {project.code}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 overflow-y-auto">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#483344] leading-tight">
                {project.title}
              </h3>
              <p className="text-xs text-[#8b7486] font-medium mt-0.5">
                {project.subject} • Supervised by {project.instructor}
              </p>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-100 text-amber-900 border border-amber-300 font-heading font-bold text-sm">
              <Award size={16} className="text-amber-600" />
              <span>{project.grade}</span>
            </div>
          </div>

          {/* Details */}
          <div>
            <h4 className="text-xs font-bold font-heading uppercase text-[#8b7486] tracking-wider mb-1">
              Project Overview
            </h4>
            <p className="text-xs sm:text-[13px] text-[#553f51] leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Teacher Feedback */}
          {project.feedback && (
            <div className="p-3.5 rounded-2xl bg-[#ece0e7] border border-[#ded0db]">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#8e7087] mb-1">
                <CheckCircle size={14} />
                <span>Instructor Assessment</span>
              </div>
              <p className="text-xs text-[#553f51] italic leading-relaxed">
                "{project.feedback}"
              </p>
            </div>
          )}

          {/* Skills tags */}
          {project.skills && (
            <div>
              <h4 className="text-xs font-bold font-heading uppercase text-[#8b7486] tracking-wider mb-1.5">
                Technologies & Skills Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, i) => (
                  <span key={i} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#ded0db] text-[#553f51]">
                    #{skill}
                  </span>
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
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
