import React, { useState } from 'react';
import { X, Plus, Calendar, Clock, BookOpen, User } from 'lucide-react';

export default function NewLessonModal({ 
  onClose, 
  onAddLesson,
  defaultDay = 18
}) {
  const [day, setDay] = useState(defaultDay);
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('18:00');
  const [room, setRoom] = useState('Lab 302 - Maker Wing');
  const [instructor, setInstructor] = useState('Olivia Miller');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddLesson({
      id: 's_' + Date.now(),
      day: Number(day),
      dateStr: `${day} May 2025`,
      title: title.trim(),
      time,
      room,
      instructor
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f5ede6] rounded-3xl w-full max-w-md overflow-hidden shadow-2xl border border-[#ded0db] flex flex-col"
      >
        <div className="bg-[#8e7087] p-4 text-white flex items-center justify-between">
          <h3 className="font-heading font-bold text-base sm:text-lg">
            Add Scheduled Lesson
          </h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 space-y-3.5">
          <div>
            <label className="block text-xs font-bold text-[#684f64] uppercase tracking-wider mb-1">
              Lesson Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Autonomous Pathfinding Workshop"
              className="w-full bg-white rounded-xl px-3 py-2 text-xs sm:text-sm text-[#483344] border border-[#ded0db] focus:outline-hidden focus:ring-2 focus:ring-[#8e7087]/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#684f64] uppercase tracking-wider mb-1">
                Day (May 2025)
              </label>
              <input
                type="number"
                min="1"
                max="31"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full bg-white rounded-xl px-3 py-2 text-xs sm:text-sm text-[#483344] border border-[#ded0db] focus:outline-hidden focus:ring-2 focus:ring-[#8e7087]/50"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#684f64] uppercase tracking-wider mb-1">
                Time
              </label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="19:30"
                className="w-full bg-white rounded-xl px-3 py-2 text-xs sm:text-sm text-[#483344] border border-[#ded0db] focus:outline-hidden focus:ring-2 focus:ring-[#8e7087]/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#684f64] uppercase tracking-wider mb-1">
              Location / Room
            </label>
            <input
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              placeholder="Lab 302 - Maker Wing"
              className="w-full bg-white rounded-xl px-3 py-2 text-xs sm:text-sm text-[#483344] border border-[#ded0db] focus:outline-hidden focus:ring-2 focus:ring-[#8e7087]/50"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#684f64] uppercase tracking-wider mb-1">
              Instructor
            </label>
            <input
              type="text"
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              placeholder="Olivia Miller"
              className="w-full bg-white rounded-xl px-3 py-2 text-xs sm:text-sm text-[#483344] border border-[#ded0db] focus:outline-hidden focus:ring-2 focus:ring-[#8e7087]/50"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold text-[#7d6579] hover:bg-[#ded0db] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-full text-xs font-bold bg-[#8e7087] text-white hover:bg-[#785b72] transition-colors cursor-pointer shadow-xs"
            >
              Save to Schedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
