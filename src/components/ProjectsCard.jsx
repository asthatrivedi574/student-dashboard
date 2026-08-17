import React from 'react';
import { ExternalLink, Award, CheckCircle } from 'lucide-react';

export default function ProjectsCard({ 
  projects = [], 
  onProjectClick,
  onSeeMore 
}) {
  return (
    <div className="bg-[#e4d5de] hover:bg-[#e2d2dc] transition-colors rounded-3xl p-4 sm:p-5 flex flex-col justify-between soft-card-shadow border border-[#d6c4cf]/40">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-heading font-bold text-base sm:text-[17px] text-[#4a3547] tracking-tight">
          My projects
        </h3>
        <span className="text-xs text-[#8b7486] font-medium px-2 py-0.5 rounded-full bg-[#ded0db]">
          {projects.length} Submitted
        </span>
      </div>

      {/* Projects Grid (2 Thumbnails) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {projects.slice(0, 2).map((project) => (
          <div
            key={project.id}
            onClick={() => onProjectClick(project)}
            className="group flex flex-col cursor-pointer"
          >
            {/* Image Container with rounded-2xl & overlay */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xs border border-[#ded0db]/80 bg-[#d9c7d4]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=80";
                }}
              />
              
              {/* Grade badge overlay */}
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold flex items-center gap-1">
                <Award size={10} className="text-amber-400" />
                <span>{project.grade}</span>
              </div>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-[#8e7087]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#f5ede6] text-[#483344] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                  View Project
                  <ExternalLink size={10} />
                </span>
              </div>
            </div>

            {/* Label below thumbnail */}
            <div className="flex items-center justify-between mt-1.5 px-0.5">
              <span className="text-[12px] sm:text-[12.5px] font-semibold text-[#5d465a] group-hover:text-[#8e7087] transition-colors">
                {project.code}
              </span>
              <span className="text-[10.5px] text-[#8b7486] font-medium hidden sm:inline">
                {project.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
