import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Flask, MathOperations, Atom } from "@phosphor-icons/react";
import ThemeToggle from './ThemeToggle'; // Corrected path

const LogoLink = "https://res.cloudinary.com/dm2ek1ift/image/upload/v1749150738/jee_iirdwe.png";



// --- Header Component ---
const Header = ({ currentView }) => {
  // Desktop header info
  const getDesktopHeaderInfo = () => {
    if (currentView === 'physics') {
      return {
        icon: <Atom size={32} className='p-[3px] bg-orange-400 text-white rounded-md' />,
        title: 'Physics PYQs',
        subtitle: 'Chapter-wise Collection of Physics PYQs'
      };
    } else if (currentView === 'chemistry') {
      return {
        icon: <Flask size={32} className='p-[3px] bg-green-400 text-white rounded-md' />,
        title: 'Chemistry PYQs',
        subtitle: 'Chapter-wise Collection of Chemistry PYQs'
      };
    } else if (currentView === 'mathematics') {
      return {
        icon: <MathOperations size={32} className='p-[3px] bg-blue-400 text-white rounded-md' />,
        title: 'Mathematics PYQs',
        subtitle: 'Chapter-wise Collection of Mathematics PYQs'
      };
    }
    return { // Default for desktop
      icon: <img src={LogoLink} alt="JEE Main Logo" className="w-8 h-8 bg-transparent" />,
      title: 'JEE Main',
      subtitle: '2025 - 2009 | 173 Papers | 15825 Qs'
    };
  };

  const desktopInfo = getDesktopHeaderInfo();
  // Mobile header will always show JEE Main info
  const mobileInfo = {
    icon: <img src={LogoLink} className="w-8 h-8 bg-transparent" />,
    title: 'JEE Main',
    subtitle: '2025 - 2009 | 173 Papers | 15825 Qs'
  };


  return (
    <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 relative">
      {/* Mobile Header (visible on small screens) */}
      <div className="md:hidden px-4 py-3 flex items-center justify-between">
        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-800 dark:text-gray-200 flex-shrink-0">
          <ChevronLeft className="w-5 h-5" />
        </button>
        {/* Centered JEE Main info */}
        <div className="flex items-center gap-2 flex-1 justify-center">
          <div>
            <h1 className="font-semibold text-gray-900 dark:text-gray-100 whitespace-nowrap">{mobileInfo.title}</h1>
          </div>
        </div>
        <ThemeToggle />
      </div>

      {/* Desktop Header (hidden on small screens) */}
      <div className="hidden md:block p-10">
        <div className="flex justify-center items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl">
            {desktopInfo.icon}
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{desktopInfo.title}</h1>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className="text-sm text-gray-500 dark:text-gray-400">{desktopInfo.subtitle}</p>
        </div>
        <div className="absolute top-4 right-4 hidden md:block">
            <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
