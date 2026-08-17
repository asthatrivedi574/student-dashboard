import React, { useState } from 'react';
import { X, Send, Paperclip, Phone, Video, CheckCheck, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ChatModal({ 
  teacher, 
  messages = [], 
  onClose, 
  onSendMessage 
}) {
  const [inputText, setInputText] = useState('');

  if (!teacher) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(teacher.id, inputText.trim());
    setInputText('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#f5ede6] rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-[#ded0db] flex flex-col h-[520px]"
      >
        {/* Header */}
        <div className="bg-[#ece3e8] px-5 py-3.5 border-b border-[#ded0db] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={teacher.avatar}
                alt={teacher.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
              />
              <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#ece3e8] ${teacher.status === 'online' ? 'bg-emerald-500' : 'bg-slate-400'}`} />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-[#483344] leading-tight">
                {teacher.name}
              </h4>
              <p className="text-[11.5px] text-[#8b7486] font-medium capitalize">
                {teacher.role} • {teacher.subject}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full text-[#8b7486] hover:text-[#483344] hover:bg-[#ded0db] transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f5ede6]">
          <div className="text-center my-1">
            <span className="text-[10.5px] font-semibold text-[#9e8799] bg-[#e8dae4] px-2.5 py-0.5 rounded-full">
              Office Hours: {teacher.officeHours || "Mon-Fri 2-4 PM"}
            </span>
          </div>

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

        {/* Input Footer */}
        <form onSubmit={handleSend} className="p-3 bg-[#ece3e8] border-t border-[#ded0db] flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={`Message ${teacher.name.split(' ')[0]}...`}
            className="flex-1 bg-white/90 rounded-full px-4 py-2 text-xs sm:text-sm text-[#483344] placeholder-[#a692a2] focus:outline-hidden focus:ring-2 focus:ring-[#8e7087]/50"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2.5 rounded-full bg-[#8e7087] text-white hover:bg-[#785c73] disabled:opacity-50 transition-all cursor-pointer flex-shrink-0 shadow-xs"
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
