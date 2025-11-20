import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Building2, BookOpen, Beaker, GraduationCap, Users, Palette, Briefcase, X } from 'lucide-react';
import { buildings } from '../data/buildings';

const CATEGORIES = [
  { id: 'all', label: 'All', icon: Building2 },
  { id: 'popular', label: 'Popular', icon: Users },
  { id: 'STEM', label: 'STEM', icon: Beaker },
  { id: 'Humanities', label: 'Humanities', icon: GraduationCap },
  { id: 'Business', label: 'Business', icon: Briefcase },
  { id: 'Arts & Design', label: 'Arts', icon: Palette },
  { id: 'Libraries', label: 'Libraries', icon: BookOpen },
  { id: 'Campus Life', label: 'Campus Life', icon: Users },
];

const BuildingSelectionPanel = ({ onSelect, onClose, selectedValue }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const inputRef = useRef(null);

  // Focus search input when mounted
  useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, []);

  // Filter buildings
  const filteredBuildings = buildings.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeCategory === 'all') return matchesSearch;
    if (activeCategory === 'popular') return matchesSearch && b.popular;
    return matchesSearch && b.category === activeCategory;
  });

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="h-full w-full max-w-4xl bg-white/95 backdrop-blur-xl shadow-2xl shadow-neutral-900/20 rounded-3xl border border-white/50 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-neutral-100 flex items-center gap-4 bg-white/50 shrink-0">
            <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={20} />
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search for a building..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-neutral-100 hover:bg-neutral-50 focus:bg-white border-2 border-transparent focus:border-primary-500 rounded-2xl pl-12 pr-4 py-3 text-lg font-medium transition-all outline-none"
                />
            </div>
            <button 
                onClick={onClose}
                className="p-3 rounded-full hover:bg-neutral-100 text-neutral-500 transition-colors"
            >
                <X size={24} />
            </button>
        </div>

        {/* Categories */}
        <div className="px-6 py-3 border-b border-neutral-100 bg-white/50 shrink-0 overflow-x-auto no-scrollbar">
            <div className="flex gap-2">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all
                        ${activeCategory === cat.id 
                            ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105' 
                            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'}
                        `}
                    >
                        {cat.icon && <cat.icon size={16} />}
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>

        {/* Grid Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-neutral-50/50">
            {filteredBuildings.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filteredBuildings.map(b => (
                        <button
                            key={b.id}
                            onClick={() => onSelect(b.name)}
                            className={`text-left p-4 rounded-2xl border transition-all group relative overflow-hidden
                                ${selectedValue === b.name 
                                    ? 'bg-primary-50 border-primary-500 ring-1 ring-primary-500' 
                                    : 'bg-white border-neutral-200 hover:border-primary-300 hover:shadow-md hover:-translate-y-0.5'}
                            `}
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className={`p-2 rounded-xl ${selectedValue === b.name ? 'bg-primary-100 text-primary-600' : 'bg-neutral-100 text-neutral-500 group-hover:bg-primary-50 group-hover:text-primary-600'} transition-colors`}>
                                    <Building2 size={20} />
                                </div>
                                {b.popular && (
                                    <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                        <Users size={10} /> Popular
                                    </span>
                                )}
                            </div>
                            <div className="font-bold text-neutral-800 group-hover:text-primary-700 transition-colors">
                                {b.name}
                            </div>
                            <div className="text-xs text-neutral-500 mt-1 font-medium">
                                {b.category}
                            </div>
                        </button>
                    ))}
                </div>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-neutral-400">
                    <Search size={48} className="mb-4 opacity-20" />
                    <p className="text-lg font-medium">No buildings found</p>
                    <p className="text-sm">Try adjusting your search or category</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default BuildingSelectionPanel;
