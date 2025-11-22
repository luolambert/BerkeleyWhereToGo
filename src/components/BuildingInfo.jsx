import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, User, Info, ExternalLink, Camera, BookOpen, Ghost, Accessibility, ChevronDown } from 'lucide-react';
import { knowLocations } from '../data/know_chinese';

// Simple Markdown Renderer Component
const MarkdownText = ({ text, className = "" }) => {
  if (!text) return null;
  
  // Split by links [text](url) OR bold markers **text**
  const regex = /(\[.*?\]\(.*?\)|(?:\*\*.*?\*\*))/g;
  const parts = text.split(regex);
  
  return (
    <span className={className}>
      {parts.map((part, index) => {
        // Handle Links: [text](url)
        if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
          const match = part.match(/\[(.*?)\]\((.*?)\)/);
          if (match) {
            const [_, linkText, linkUrl] = match;
            return (
              <a 
                key={index} 
                href={linkUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-800 transition-colors font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                {linkText}
              </a>
            );
          }
        }

        // Handle Bold: **text**
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index} className="font-bold text-neutral-900">{part.slice(2, -2)}</strong>;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};

function BuildingInfo({ onBack }) {
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  return (
    <div className="w-full h-full relative bg-neutral-50">
      <AnimatePresence mode="wait">
        {selectedBuilding ? (
          <BuildingDetail 
            key="detail" 
            building={selectedBuilding} 
            onBack={() => setSelectedBuilding(null)} 
          />
        ) : (
          <BuildingGrid 
            key="grid" 
            buildings={knowLocations} 
            onSelect={setSelectedBuilding} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function BuildingGrid({ buildings, onSelect }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full flex flex-col px-6 py-2 sm:px-8 sm:py-4 overflow-y-auto"
    >
      {/* Increased width to 90% as requested */}
      <div className="w-[90%] max-w-[1920px] mx-auto">
        <p className="text-neutral-600 text-lg text-center mb-6 max-w-2xl mx-auto font-medium">
          Discover the stories and legends behind Berkeley's campus buildings
        </p>
        
        {/* Grid with 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
          {buildings.map((building) => (
            <motion.div
              key={building.id}
              onClick={() => onSelect(building)}
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              // Image background card style
              className="group cursor-pointer relative rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-[220px]"
            >
              {/* Full background image */}
              <motion.img 
                src={building.images[0]} 
                alt={building.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay - Darker at bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Hover "View Details" badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                 <span className="text-white text-xs font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    View Details
                </span>
              </div>

              {/* Text Content - Overlaid at bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end z-10">
                <motion.h3 
                  className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors text-shadow-sm"
                >
                  {building.title}
                </motion.h3>
                <p className="text-sm text-white/80 line-clamp-1 leading-relaxed font-medium">
                  {building.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="fixed bottom-4 left-4 z-50 pointer-events-none text-left">
        <div className="text-[10px] text-neutral-400 font-medium bg-white/50 backdrop-blur-sm px-2 py-1 rounded-md border border-neutral-100 inline-block">
          <p>Information collected personally, may be inaccurate or outdated.</p>
          <p>Images sourced from Google or UC Berkeley official website.</p>
        </div>
      </div>
    </motion.div>
  );
}

function BuildingDetail({ building, onBack }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] w-full h-full overflow-y-auto bg-white"
    >
      {/* Hero Section - Full Screen */}
      <div className="relative w-full h-screen">
        {/* Main Image - Full screen cover */}
        <motion.img 
          src={building.images[0]} 
          alt={building.title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
        
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 p-3 bg-black/30 hover:bg-black/50 backdrop-blur-md rounded-full text-white transition-colors border border-white/10 group z-50"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>

        {/* Bottom Left Info */}
        <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 z-30 flex flex-col justify-end h-full pb-24">
          <div className="max-w-7xl mx-auto w-full">
            <motion.h1 
              className="text-4xl sm:text-6xl font-bold text-white mb-6"
            >
              {building.title}
            </motion.h1>
            <div className="flex flex-wrap gap-4 text-white/90 text-sm sm:text-base font-medium">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <Calendar className="w-4 h-4" />
                <span>Built {building.yearBuilt}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <User className="w-4 h-4" />
                <span>{building.architect}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center z-30">
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 text-white/80"
            >
                <span className="text-xs font-medium tracking-widest uppercase">Scroll for details</span>
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        
        {/* Summary & Description */}
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4 border-l-4 border-blue-500 pl-4">
            简介
          </h2>
          <p className="text-xl text-neutral-800 font-medium mb-6 leading-relaxed">
            <MarkdownText text={building.summary} />
          </p>
          <div className="text-neutral-600 leading-relaxed whitespace-pre-line text-lg">
            <MarkdownText text={building.description} />
          </div>
        </section>

        {/* Fun Facts */}
        {building.funFacts && (
          <section className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-blue-900">冷知识 (Fun Facts)</h3>
            </div>
            <ul className="space-y-4">
              {building.funFacts.map((fact, index) => (
                <li key={index} className="flex gap-3 text-blue-800">
                  <span className="font-bold text-blue-400 select-none">•</span>
                  <span><MarkdownText text={fact} /></span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Student Tips */}
        {building.studentTips && (
          <section className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <div className="flex items-center gap-3 mb-6">
              <Info className="w-6 h-6 text-amber-600" />
              <h3 className="text-xl font-bold text-amber-900">学生生存指南</h3>
            </div>
            <ul className="space-y-4">
              {building.studentTips.map((tip, index) => (
                <li key={index} className="flex gap-3 text-amber-800">
                  <span className="font-bold text-amber-400 select-none">•</span>
                  <span><MarkdownText text={tip} /></span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Legend & Photo Spots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {building.relatedLegend && (
            <section className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <Ghost className="w-6 h-6 text-purple-600" />
                <h3 className="text-lg font-bold text-purple-900">校园传说</h3>
              </div>
              <p className="text-purple-800 leading-relaxed">
                <MarkdownText text={building.relatedLegend} />
              </p>
            </section>
          )}

          {building.photoSpots && (
            <section className="bg-pink-50 rounded-2xl p-8 border border-pink-100">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-6 h-6 text-pink-600" />
                <h3 className="text-lg font-bold text-pink-900">最佳拍照点</h3>
              </div>
              <ul className="space-y-3">
                {building.photoSpots.map((spot, index) => (
                  <li key={index} className="text-pink-800 text-sm">
                    <MarkdownText text={spot} />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Accessibility & Link */}
        <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-neutral-100">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2 text-neutral-900 font-bold">
              <Accessibility className="w-5 h-5" />
              <span>无障碍设施</span>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed">
              <MarkdownText text={building.accessibility} />
            </p>
          </div>
          
          {building.officialLink && (
            <div className="shrink-0">
              <a 
                href={building.officialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                <span>Official Web</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Tags */}
        {building.tags && (
          <div className="flex flex-wrap gap-2 pt-4">
            {building.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="h-20" /> {/* Bottom spacer */}
      </div>
    </motion.div>
  );
}

export default BuildingInfo;
