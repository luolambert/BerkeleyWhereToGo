import React from 'react';
import { ChevronDown } from 'lucide-react';

const BuildingSelect = ({ label, value, onFocus, placeholder, icon: Icon, isActive }) => {
  return (
    <div className="relative group">
      <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5 ml-1">
        {label}
      </label>
      
      {/* Trigger Button */}
      <button
        onClick={onFocus}
        className={`w-full text-left bg-white/50 hover:bg-white/80 transition-all border rounded-xl px-4 py-3 flex items-center justify-between shadow-sm
          ${isActive ? 'border-primary-500 ring-2 ring-primary-100 bg-white' : 'border-neutral-200'}
          ${value ? 'border-primary-500/50' : ''}
        `}
      >
        <div className="flex items-center gap-3 overflow-hidden">
            {Icon && <Icon size={18} className={isActive || value ? "text-primary-500" : "text-neutral-400"} />}
            <span className={`font-medium truncate ${value ? 'text-neutral-800' : 'text-neutral-400'}`}>
            {value || placeholder}
            </span>
        </div>
        <div className={`text-neutral-400 transition-transform duration-300 ${isActive ? 'rotate-180 text-primary-500' : ''}`}>
          <ChevronDown size={16} />
        </div>
      </button>
    </div>
  );
};

export default BuildingSelect;
