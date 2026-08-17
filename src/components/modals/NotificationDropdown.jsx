import React from 'react';
import { X, Bell, Check, Trash2, Calendar, Award, MessageSquare } from 'lucide-react';

export default function NotificationDropdown({ 
  notifications = [], 
  onClose, 
  onMarkAllAsRead, 
  onClearAll 
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end p-4 sm:p-6 bg-black/20 backdrop-blur-2xs animate-in fade-in">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="mt-14 sm:mt-16 mr-2 sm:mr-8 w-full max-w-sm bg-[#f5ede6] rounded-3xl overflow-hidden shadow-2xl border border-[#ded0db] flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#ece3e8] px-4 py-3 border-b border-[#ded0db] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell size={16} className="text-[#8e7087]" />
            <h4 className="font-heading font-bold text-sm text-[#483344]">
              Notifications
            </h4>
          </div>
          
          <div className="flex items-center gap-1.5">
            <button
              onClick={onMarkAllAsRead}
              className="text-[11px] font-semibold text-[#8e7087] hover:text-[#5d4458] px-2 py-0.5 rounded-md hover:bg-[#ded0db] transition-colors cursor-pointer"
            >
              Mark all read
            </button>
            <button 
              onClick={onClose}
              className="p-1 rounded-full text-[#8b7486] hover:text-[#483344] hover:bg-[#ded0db] transition-colors cursor-pointer"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Notification items */}
        <div className="max-h-80 overflow-y-auto p-3 space-y-2">
          {notifications.length === 0 ? (
            <div className="text-center py-6 text-xs text-[#8b7486]">
              No notifications right now.
            </div>
          ) : (
            notifications.map((n) => (
              <div 
                key={n.id}
                className={`p-3 rounded-2xl transition-colors border ${n.read ? 'bg-white/40 border-[#ded0db]/50 opacity-80' : 'bg-white/90 border-[#ded0db] shadow-2xs'}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-semibold text-xs text-[#483344] leading-snug">
                    {n.title}
                  </span>
                  <span className="text-[10px] text-[#8b7486] flex-shrink-0">
                    {n.time}
                  </span>
                </div>
                <p className="text-[11.5px] text-[#6e566b] mt-1 leading-relaxed">
                  {n.detail}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="p-2.5 bg-[#ece3e8] border-t border-[#ded0db] flex justify-center">
            <button
              onClick={onClearAll}
              className="text-[11.5px] text-[#8b7486] hover:text-rose-600 flex items-center gap-1 font-medium transition-colors cursor-pointer"
            >
              <Trash2 size={12} />
              <span>Clear all notifications</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
