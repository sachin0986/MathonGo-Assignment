import React from 'react';
import { Flask, MathOperations, Atom } from "@phosphor-icons/react";

// --- Mobile Navigation Component ---
const MobileNav = ({ currentView, onNavigate }) => {
  const subjects = [
    { key: 'physics', label: 'Phy', icon: <Atom size={20} className='bg-orange-400 text-white rounded-md p-[2px]'/>, active: currentView === 'physics' },
    { key: 'chemistry', label: 'Chem', icon: <Flask size={20} className='bg-green-400 text-white rounded-md p-[2px]' />, active: currentView === 'chemistry' },
    { key: 'mathematics', label: 'Math', icon: <MathOperations size={20} className=' bg-blue-400 text-white rounded-md p-[2px]'/>, active: currentView === 'mathematics' }
  ];

  return (
    <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-2">
      <div className="flex justify-around gap-1">
        {subjects.map((subject) => (
          <button
            key={subject.key}
            onClick={() => onNavigate(subject.key)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              subject.active
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-400'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <div className="flex flex-col items-center gap-1">
              <span>{subject.icon}</span>
              <span>{subject.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
