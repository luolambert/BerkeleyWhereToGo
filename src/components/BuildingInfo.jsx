import React from 'react';
import { motion } from 'framer-motion';

function BuildingInfo({ onBack }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full h-full flex flex-col p-6 sm:p-8 overflow-y-auto"
    >
      <div className="w-full max-w-7xl mx-auto">
        <p className="text-neutral-600 text-lg text-center mb-12 max-w-2xl mx-auto">
          Explore the history and details of every building on campus.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
            {/* Placeholders for building cards */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-48 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow border border-neutral-100 p-6">
                    <div className="w-12 h-12 rounded-full bg-neutral-100 mb-4" />
                    <div className="h-4 w-3/4 bg-neutral-100 rounded mb-2" />
                    <div className="h-3 w-1/2 bg-neutral-50 rounded" />
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default BuildingInfo;
