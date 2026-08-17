import React from 'react';

export default function CircularProgress({ 
  percentage = 60, 
  color = "#ff758f", 
  size = 110, 
  strokeWidth = 8,
  textColor = "text-white"
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // Calculate stroke dashoffset
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90 origin-center transition-all duration-700 ease-out"
      >
        {/* Background track circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-white/15"
        />
        {/* Animated Progress Ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
        />
      </svg>
      {/* Centered Percentage Text */}
      <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
        <span className={`font-bold font-heading text-lg tracking-tight ${textColor}`}>
          {percentage}%
        </span>
      </div>
    </div>
  );
}
