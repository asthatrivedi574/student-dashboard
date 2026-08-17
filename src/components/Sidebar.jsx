import React from 'react';
import { 
  LayoutGrid, 
  Home, 
  FileText, 
  CalendarDays, 
  MessageSquare, 
  Settings, 
  LogOut,
  Sparkles,
  ChevronRight,
  BookOpen
} from 'lucide-react';

export default function Sidebar({ 
  activeTab = 'dashboard', 
  onSelectTab, 
  profile,
  unreadCount = 3,
  onLogoutClick,
  isOpen = false,
  onClose
}) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'classes', label: 'My classes', icon: Home },
    { id: 'grades', label: 'My grades', icon: FileText },
    { id: 'schedule', label: 'Schedule', icon: CalendarDays },
    { id: 'messages', label: 'Messages', icon: MessageSquare, badge: unreadCount },
    { id: 'settings', label: 'Setting', icon: Settings },
  ];

  return (
    <>
      {/* Mobile backdrop overlay */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
        />
      )}

      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 lg:static
        w-64 lg:w-60 xl:w-64 flex-shrink-0
        bg-[#ece3e8]
        flex flex-col justify-between
        py-7 px-0
        rounded-l-3xl lg:rounded-l-[2rem]
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        select-none border-r border-[#ded1db]/50 lg:border-none
      `}>
        {/* Top section: Logo & Profile */}
        <div className="flex flex-col">
          {/* Logo */}
          <div className="px-6 mb-7 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onSelectTab('dashboard')}>
              <h1 className="text-2xl font-bold font-heading tracking-tight text-[#4a3547] flex items-center">
                Smar<span className="text-[#8e7087] inline-block group-hover:rotate-12 transition-transform">t</span>ech
              </h1>
            </div>
            {/* Mobile close button */}
            <button 
              onClick={onClose}
              className="lg:hidden p-1 text-[#8b7486] hover:text-[#4a3547] rounded-lg"
            >
              ✕
            </button>
          </div>

          {/* Profile Card */}
          <div 
            onClick={() => onSelectTab('settings')}
            className="px-6 mb-6 flex items-center gap-3.5 cursor-pointer group hover:opacity-90 transition-opacity"
          >
            <div className="relative">
              <img 
                src={profile.avatar} 
                alt={profile.fullName} 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#ded1db] shadow-xs group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";
                }}
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#ece3e8] rounded-full"></span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-[15px] text-[#4a3547] font-heading">{profile.name}</span>
              <span className="text-[13px] text-[#7d6579] font-medium">{profile.lastName}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1.5 mt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id);
                    if (onClose) onClose();
                  }}
                  className={`
                    group relative flex items-center justify-between
                    py-3 px-6 text-left text-[14.5px] font-medium
                    transition-all duration-200 cursor-pointer
                    ${isActive 
                      ? 'bg-[#f5ede6] text-[#483344] font-bold rounded-r-full shadow-xs mr-3' 
                      : 'text-[#6e586b] hover:text-[#483344] hover:bg-[#e4d6e0]/60 rounded-r-2xl mr-4'
                    }
                  `}
                >
                  {/* Left indicator bar when active */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#8e7087] rounded-r-full" />
                  )}

                  <div className="flex items-center gap-3.5 pl-1">
                    <div className={`
                      p-1.5 rounded-lg transition-transform group-hover:scale-110
                      ${isActive ? 'text-[#8e7087] bg-[#ece0e8]' : 'text-[#7d6579]'}
                    `}>
                      <Icon size={18} strokeWidth={isActive ? 2.3 : 1.9} />
                    </div>
                    <span>{item.label}</span>
                  </div>

                  {item.badge && item.badge > 0 ? (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#8e7087] text-white shadow-xs">
                      {item.badge}
                    </span>
                  ) : null}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom section: Log out */}
        <div className="px-6 pt-4 mt-auto border-t border-[#ded1db]/40">
          <button
            onClick={onLogoutClick}
            className="flex items-center gap-3 w-full py-2.5 px-3 text-[14px] font-medium text-[#7d6579] hover:text-rose-700 hover:bg-rose-50/50 rounded-xl transition-all cursor-pointer group"
          >
            <LogOut size={18} className="text-[#8e7087] group-hover:text-rose-600 transition-colors" />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
