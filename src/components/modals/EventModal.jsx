import React from 'react';
import { X, Calendar, Clock, MapPin, User, CheckCircle, Share2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EventModal({ 
  event, 
  onClose, 
  onToggleRsvp 
}) {
  if (!event) return null;

  const handleRsvp = () => {
    if (!event.registered) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff758f', '#2dd4bf', '#fbbf24', '#8e7087']
      });
    }
    onToggleRsvp(event.id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f5ede6] rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-[#ded0db] flex flex-col max-h-[90vh]"
      >
        {/* Header Banner */}
        <div className="relative bg-[#8e7087] p-5 text-white">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 inline-block mb-2">
            {event.category || "Event"}
          </span>
          <h3 className="font-heading font-bold text-lg sm:text-xl text-white leading-tight">
            {event.fullTitle || event.title}
          </h3>
        </div>

        {/* Content Details */}
        <div className="p-5 space-y-4 overflow-y-auto">
          {/* Key Facts Pills */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#ece3e8]">
              <Calendar size={16} className="text-[#8e7087]" />
              <span className="text-xs font-semibold text-[#483344]">{event.date}</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#ece3e8]">
              <Clock size={16} className="text-[#8e7087]" />
              <span className="text-xs font-semibold text-[#483344]">{event.time}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#ece3e8]">
            <MapPin size={16} className="text-[#8e7087] flex-shrink-0" />
            <span className="text-xs font-medium text-[#483344]">{event.location}</span>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold font-heading uppercase text-[#8b7486] tracking-wider mb-1">
              About This Event
            </h4>
            <p className="text-xs sm:text-[13px] text-[#553f51] leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Speaker */}
          {event.speaker && (
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#ece0e7] border border-[#ded0db]">
              <User size={16} className="text-[#8e7087]" />
              <div>
                <span className="text-[11px] text-[#8b7486] font-medium block">Lead Speaker / Organizer</span>
                <span className="text-xs font-bold text-[#483344]">{event.speaker}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#ece3e8] border-t border-[#ded0db] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-xs font-semibold text-[#7d6579] hover:bg-[#ded0db] transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={handleRsvp}
            className={`
              flex-1 py-2.5 px-4 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer
              ${event.registered 
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                : 'bg-[#8e7087] hover:bg-[#785b72] text-white'
              }
            `}
          >
            {event.registered ? (
              <>
                <CheckCircle size={15} />
                <span>You're Registered</span>
              </>
            ) : (
              <>
                <Sparkles size={15} />
                <span>Register for Event</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
