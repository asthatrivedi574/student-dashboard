import React, { useState } from 'react';
import { Send, CheckCheck, MessageSquare, Search } from 'lucide-react';

export default function MessagesView({ 
  teachers = [], 
  chatMessages = {}, 
  onSendMessage 
}) {
  const [activeTeacherId, setActiveTeacherId] = useState(teachers[0]?.id || 't1');
  const [inputText, setInputText] = useState('');

  const activeTeacher = teachers.find(t => t.id === activeTeacherId) || teachers[0];
  const messages = chatMessages[activeTeacherId] || [];

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !activeTeacher) return;
    onSendMessage(activeTeacher.id, inputText.trim());
    setInputText('');
  };

  return (
    <div className="bg-[#e4d5de] rounded-3xl overflow-hidden border border-[#d6c4cf]/40 shadow-xs grid grid-cols-1 md:grid-cols-12 min-h-[500px] animate-in fade-in duration-300">
      {/* Left Chat Contacts List */}
      <div className="md:col-span-4 bg-[#ece3e8] border-r border-[#ded0db] flex flex-col">
        <div className="p-4 border-b border-[#ded0db]">
          <h3 className="font-heading font-bold text-base text-[#483344] mb-2">
            Teacher Conversations
          </h3>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {teachers.map((t) => {
            const isSelected = t.id === activeTeacherId;
            return (
              <div
                key={t.id}
                onClick={() => setActiveTeacherId(t.id)}
                className={`
                  flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all
                  ${isSelected ? 'bg-[#f5ede6] shadow-2xs font-semibold' : 'hover:bg-[#e4d5de]'}
                `}
              >
                <div className="relative">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-white/60"
                  />
                  <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#ece3e8] ${t.status === 'online' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#483344] truncate">{t.name}</span>
                    <span className="text-[10px] text-[#8b7486] capitalize">{t.role}</span>
                  </div>
                  <p className="text-[11px] text-[#8b7486] truncate mt-0.5">{t.subject}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Chat Panel */}
      <div className="md:col-span-8 flex flex-col bg-[#f5ede6] justify-between h-[520px]">
        {/* Header */}
        <div className="p-4 bg-[#ece3e8] border-b border-[#ded0db] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={activeTeacher?.avatar}
              alt={activeTeacher?.name}
              className="w-9 h-9 rounded-full object-cover ring-2 ring-white"
            />
            <div>
              <h4 className="font-heading font-bold text-sm text-[#483344] leading-tight">
                {activeTeacher?.name}
              </h4>
              <span className="text-[11px] text-[#8b7486] capitalize">
                {activeTeacher?.role} • {activeTeacher?.subject}
              </span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`
                  max-w-[78%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-2xs
                  ${msg.isMe 
                    ? 'bg-[#8e7087] text-white rounded-br-xs' 
                    : 'bg-[#e7dae3] text-[#483344] rounded-bl-xs border border-[#ded0db]'
                  }
                `}
              >
                {msg.text}
              </div>
              <div className="flex items-center gap-1 mt-1 px-1">
                <span className="text-[10px] text-[#8b7486]">{msg.time}</span>
                {msg.isMe && <CheckCheck size={11} className="text-[#8e7087]" />}
              </div>
            </div>
          ))}
        </div>

        {/* Input bar */}
        <form onSubmit={handleSend} className="p-3 bg-[#ece3e8] border-t border-[#ded0db] flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Reply to ${activeTeacher?.name.split(' ')[0]}...`}
            className="flex-1 bg-white/90 rounded-full px-4 py-2 text-xs sm:text-sm text-[#483344] placeholder-[#a692a2] focus:outline-hidden focus:ring-2 focus:ring-[#8e7087]/50"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2.5 rounded-full bg-[#8e7087] text-white hover:bg-[#785c73] disabled:opacity-50 transition-all cursor-pointer shadow-xs"
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
