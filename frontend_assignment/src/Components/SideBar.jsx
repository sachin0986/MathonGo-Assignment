import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Flask, MathOperations, Atom } from "@phosphor-icons/react";

// Assuming this path for your logo, adjust if different
const LogoLink = "https://res.cloudinary.com/dm2ek1ift/image/upload/v1749150738/jee_iirdwe.png";

// --- Sidebar Component ---
const SideBar = ({ currentView, onViewChange }) => {
  const subjects = [
    {
      key: 'physics',
      label: 'Physics PYQs',
      icon: <Atom size={28} className='p-[3px] bg-orange-400 text-white rounded-md' />,
      active: currentView === 'physics'
    },
    {
      key: 'chemistry',
      label: 'Chemistry PYQs',
      icon: <Flask size={28} className='p-[3px] bg-green-400 text-white rounded-md' />,
      active: currentView === 'chemistry'
    },
    {
      key: 'mathematics',
      label: 'Mathematics PYQs',
      icon: <MathOperations size={28} className='p-[3px] bg-blue-500 text-white rounded-md' />,
      active: currentView === 'mathematics'
    }
  ];

  return (
    <div className="hidden md:block w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 min-h-screen">
      <div className='flex gap-3 items-center justify-center p-4 border-b border-gray-200 dark:border-gray-700'>
        <div className='w-10 h-10 flex items-center justify-center text-xl'>
          <img src={LogoLink} alt="logo" className='h-8 w-12 bg-transparent' />
        </div>
        <div>
          <h1 className='font-bold text-2xl text-gray-900 dark:text-gray-100'>JEE Main</h1>
        </div>
      </div>
      <div className='py-4'>
        <h1 className='text-[14px] text-gray-500 dark:text-gray-400 flex justify-center'>2025 - 2009 | 173 papers | 15825 Qs</h1>
      </div>
      <div className="p-8">
        <div className="space-y-6">
          {subjects.map((subject) => (
            <button
              key={subject.key}
              onClick={() => onViewChange(subject.key)}
              className={`w-full p-4 rounded-2xl text-left transition-all duration-200 group ${
                subject.active
                  ? 'bg-gray-800 text-white shadow-lg dark:bg-gray-900'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${
                    subject.active ? 'bg-white/20' : 'bg-white dark:bg-gray-800'
                  }`}>
                    {subject.icon}
                  </div>
                  <span className="font-medium">{subject.label}</span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-colors ${
                  subject.active ? 'text-white/70' : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300'
                }`} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
