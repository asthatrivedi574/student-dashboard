import React, { useState } from 'react';
import { Search, Bell, MoreVertical, Menu, Sparkles, X } from 'lucide-react';

export default function Topbar({ 
  studentName = "ASTHA", 
  searchQuery, 
  onSearchChange,
  onOpenNotifications,
  unreadNotifications = 2,
  onToggleMobileMenu,
  onOpenProfileModal
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      {/* Left Greeting & Mobile Hamburger */}
      <div className="flex items-center gap-3">
        {/* Mobile menu trigger */}
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden p-2 rounded-xl bg-[#e4d5de] text-[#4a3547] hover:bg-[#ded1db] transition-colors"
          aria-label="Open sidebar menu"
        >
          <Menu size={20} />
        </button>

        <div>
          <h2 className="text-xl sm:text-2xl md:text-[26px] font-extrabold font-heading tracking-wide text-[#483344] uppercase flex items-center gap-2">
            HELLO, {studentName}!
            <span className="inline-block animate-bounce text-base">✨</span>
          </h2>
          <p className="text-xs text-[#8b7486] hidden md:block">
            You have 2 classes and 1 event scheduled for today
          </p>
        </div>
      </div>

      {/* Right Action Area: Search Pill + Notification Bell + Options */}
      <div className="flex items-center gap-3 self-end sm:self-auto w-full sm:w-auto justify-end">
        {/* Search Pill Input */}
        <div className={`
          relative flex items-center transition-all duration-200
          w-full sm:w-60 md:w-72 lg:w-80
          ${isSearchFocused ? 'ring-2 ring-[#8e7087]/50 shadow-sm' : ''}
          bg-[#ded1db]/80 hover:bg-[#ded1db] rounded-full px-3.5 py-1.5
        `}>
          <Search size={16} className="text-[#8b7486] flex-shrink-0 ml-1" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            placeholder="Search classes, teachers, events..."
            className="w-full bg-transparent px-2.5 py-1 text-xs sm:text-sm text-[#4a3547] placeholder-[#9c8497] focus:outline-hidden font-medium"
          />
          {searchQuery && (
            <button 
              onClick={() => onSearchChange('')}
              className="text-[#8b7486] hover:text-[#4a3547] p-0.5"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Notification Bell Button */}
        <button
          onClick={onOpenNotifications}
          className="relative p-2.5 rounded-full bg-[#8e7087] text-white hover:bg-[#7a5e74] active:scale-95 transition-all shadow-xs cursor-pointer flex-shrink-0"
          title="View Notifications"
        >
          <Bell size={17} />
          {unreadNotifications > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff758f] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff758f] border-2 border-[#f5ede6]"></span>
            </span>
          )}
        </button>

        {/* Options / Profile Context Menu Button */}
        <button
          onClick={onOpenProfileModal}
          className="p-2.5 rounded-full bg-[#ded1db]/80 text-[#5f495c] hover:bg-[#ded1db] hover:text-[#483344] active:scale-95 transition-all cursor-pointer flex-shrink-0"
          title="More options"
        >
          <MoreVertical size={18} />
        </button>
      </div>
    </header>
  );
}
