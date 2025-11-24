import React from 'react';
import { motion } from 'framer-motion';
import BuildingInfo from '../components/BuildingInfo';

function InfoPage() {
  return (
    <motion.div 
        key="info"
        className="absolute inset-0 w-full h-full z-50 overflow-hidden bg-neutral-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
    >
         <div className="relative z-10 w-full h-full flex flex-col items-center">
             {/* Centered Header */}
             <div className="flex-1 w-full overflow-hidden mx-auto pb-8">
                <BuildingInfo 
                    currentView="info"
                />
             </div>
         </div>
    </motion.div>
  );
}

export default InfoPage;
