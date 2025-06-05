import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';
import { mockData } from './DummyData/MockData';
import { Flask } from "@phosphor-icons/react";
import { MathOperations } from "@phosphor-icons/react";
import { Atom, Function, } from "@phosphor-icons/react";
import { LogoLink } from './DummyData/MockData'; // Assuming you have a LogoLink component
import { Ruler, ArrowLeft, ArrowElbowRightUp,BookOpenText } from "@phosphor-icons/react";


// Header Component
const Header = ({ currentView }) => {
  const getHeaderInfo = () => {
    if (currentView === 'physics') {
      return {
        icon: <Atom size={32} className='p-[3px] bg-orange-400 text-white rounded-md'/>,
        title: 'Physics PYQs',
        subtitle: 'Chapter-wise Collection of Physics PYQs'
      };
    } else if (currentView === 'chemistry') {
      return {
        icon: <Flask size={32} className='p-[3px] bg-green-400 text-white rounded-md'/>,
        title: 'Chemistry PYQs',
        subtitle: 'Chapter-wise Collection of Chemistry PYQs'
      };
    } else if (currentView === 'mathematics') {
      return {
        icon: <MathOperations size={32} className='p-[3px] bg-blue-400 text-white rounded-md'/>,
        title: 'Mathematics PYQs',
        subtitle: 'Chapter-wise Collection of Mathematics PYQs'
      };
    }
    return {
      icon: {LogoLink},
      title: 'JEE Main',
      subtitle: '2025 - 2009 | 173 Papers | 15825 Qs'
    };
  };

  const { icon, title, subtitle } = getHeaderInfo();

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Mobile Header */}
      <div className="md:hidden px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-lg">
              {icon}
            </div>
            <div>
              <h1 className="font-semibold text-gray-900">{title}</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block p-10">
        <div className="flex justify-center items-center gap-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl">
            {icon}
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          </div>
        </div>
         <div className='flex flex-col items-center justify-center'>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ currentView, onViewChange }) => {
  const subjects = [
    { 
      key: 'physics', 
      label: 'Physics PYQs', 
      icon: <Atom size={28} className='p-[3px] bg-orange-400 text-white rounded-md'/>, 
      bgColor: 'bg-gray-800',
      active: currentView === 'physics' 
    },
    { 
      key: 'chemistry', 
      label: 'Chemistry PYQs', 
      icon: <Flask size={28} className='p-[3px] bg-green-400 text-white rounded-md'/>, 
      bgColor: 'bg-gray-800',
      active: currentView === 'chemistry' 
    },
    { 
      key: 'mathematics', 
      label: 'Mathematics PYQs', 
      icon: <MathOperations size={28} className='p-[3px] bg-blue-500 text-white rounded-md'/>, 
      bgColor: 'bg-gray-800',
      active: currentView === 'mathematics' 
    }
  ];

  return (
    <div className="hidden md:block w-80 bg-white border-r border-gray-200 min-h-screen">
      <div className='flex gap-3 items-center justify-center p-4'>
        <div className='w-10 h-10 flex items-center justify-center text-xl'>
        <img src={LogoLink} alt="link" className=''/>
        </div>
        <div>
          <h1 className='font-bold text-2xl'>JEE Main</h1>
        </div>
      </div>
      <div>
        <h1 className='text-[14px] text-gray-500 flex justify-center'>2025 - 2009 | 173 papers | 15825 Qs</h1>
      </div>
      <div className="p-8">
        <div className="space-y-6">
          {subjects.map((subject) => (
            <button
              key={subject.key}
              onClick={() => onViewChange(subject.key)}
              className={`w-full p-4 rounded-2xl text-left transition-all duration-200 group ${
                subject.active 
                  ? `${subject.bgColor} text-white shadow-lg` 
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${
                    subject.active ? 'bg-white/20' : 'bg-white'
                  }`}>
                    {subject.icon}
                  </div>
                  <span className="font-medium">{subject.label}</span>
                </div>
                <ChevronRight className={`w-5 h-5 transition-colors ${
                  subject.active ? 'text-white/70' : 'text-gray-400 group-hover:text-gray-600'
                }`} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Filter Bar Component
const FilterBar = ({ 
  selectedClass, 
  setSelectedClass, 
  selectedUnit, 
  setSelectedUnit, 
  showNotStarted, 
  setShowNotStarted, 
  showWeakChapters, 
  setShowWeakChapters,
  onSort
}) => {
  return (
    <div className="bg-white px-4 py-3">
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
        <select 
          value={selectedClass} 
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-xl text-sm bg-white min-w-fit"
        >
          <option value="">Class</option>
          <option value="Class 11">Class 11</option>
          <option value="Class 12">Class 12</option>
        </select>
        
        <select 
          value={selectedUnit} 
          onChange={(e) => setSelectedUnit(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-xl text-sm bg-white min-w-fit"
        >
          <option value="">Units</option>
          <option value="Mechanics 1">Mechanics 1</option>
          <option value="Mechanics 2">Mechanics 2</option>
          <option value="Inorganic Chemistry">Inorganic Chemistry</option>
          <option value="Algebra">Algebra</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        
        <button
          onClick={() => setShowNotStarted(!showNotStarted)}
          className={`px-3 py-2 rounded-xl border text-sm whitespace-nowrap transition-colors ${
            showNotStarted 
              ? 'bg-orange-50 border-orange-300 text-orange-700' 
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Not Started
        </button>
        
        <button
          onClick={() => setShowWeakChapters(!showWeakChapters)}
          className={`px-3 py-2 rounded-xl border text-sm whitespace-nowrap transition-colors ${
            showWeakChapters 
              ? 'bg-orange-50 border-orange-300 text-orange-700' 
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          Weak Chapters
        </button>
      </div>
    </div>
  );
};

// Mobile Navigation Component
const MobileNavigation = ({ currentView, onNavigate }) => {
  const subjects = [
    { key: 'physics', label: 'Phy', icon: <Atom />, active: currentView === 'physics' },
    { key: 'chemistry', label: 'Chem', icon: <Flask />, active: currentView === 'chemistry' },
    { key: 'mathematics', label: 'Math', icon: <MathOperations />, active: currentView === 'mathematics' }
  ];

  return (
    <div className="md:hidden bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex gap-1">
        {subjects.map((subject) => (
          <button
            key={subject.key}
            onClick={() => onNavigate(subject.key)}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
              subject.active 
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
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

// Chapter Card Component
const ChapterCard = ({ chapter, onClick }) => {
  const getIcon = (chapterName) => {
    const iconMap = {
      'Mathematics in Physics': <Atom className='text-orange-400'/>,
      'Units and Dimensions': <Function />,
      'Gravitation': <Ruler />,
      'Motion in One Dimension': <ArrowLeft />,
      'Motion in Two Dimensions': <ArrowElbowRightUp />,
      'Laws of Motion': <BookOpenText />,
    };
    return iconMap[chapterName] || '📚';
  };

  const getTotalQuestions = () => {
    return Object.values(chapter.yearWiseQuestionCount).reduce((sum, count) => sum + count, 0);
  };

  const current2025 = chapter.yearWiseQuestionCount['2025'] || 0;
  const current2024 = chapter.yearWiseQuestionCount['2024'] || 0;
  const total = getTotalQuestions();

  return (
    <button
      onClick={onClick}
      className="w-full p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 text-left hover:border-gray-300"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
            {getIcon(chapter.chapter)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate mb-1">{chapter.chapter}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>2025: {current2025}Qs {current2025 > current2024 ? '↑' : current2025 < current2024 ? '↓' : ''}</span>
              <span className="text-gray-300">|</span>
              <span>2024: {current2024}Qs</span>
            </div>
          </div>
        </div>
        <div className="text-right flex-shrink-0 ml-4">
          <div className="text-sm font-medium text-gray-900">{chapter.questionSolved}/{total} Qs</div>
        </div>
      </div>
    </button>
  );
};

// Main App Component
const App = () => {
  const [currentView, setCurrentView] = useState('physics'); // Start with physics view
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [showNotStarted, setShowNotStarted] = useState(false);
  const [showWeakChapters, setShowWeakChapters] = useState(false);

  const handleViewChange = (view) => {
    setCurrentView(view);
    // Reset filters when changing view
    setSelectedClass('');
    setSelectedUnit('');
    setShowNotStarted(false);
    setShowWeakChapters(false);
  };

  const handleSort = () => {
    console.log('Sort clicked');
  };

  const handleChapterClick = (chapter) => {
    console.log('Chapter clicked:', chapter.chapter);
  };

  const getFilteredChapters = () => {
    let filtered = mockData.filter(item => {
      if (currentView === 'physics' && item.subject !== 'Physics') return false;
      if (currentView === 'chemistry' && item.subject !== 'Chemistry') return false;
      if (currentView === 'mathematics' && item.subject !== 'Mathematics') return false;
      
      if (selectedClass && item.class !== selectedClass) return false;
      if (selectedUnit && item.unit !== selectedUnit) return false;
      if (showNotStarted && item.status !== 'Not Started') return false;
      if (showWeakChapters && !item.isWeakChapter) return false;
      
      return true;
    });

    return filtered;
  };

  const filteredChapters = getFilteredChapters();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar - Always visible */}
      <Sidebar currentView={currentView} onViewChange={handleViewChange} />
      
      {/* Main Content */}
      <div className="flex-1">
        <Header currentView={currentView} />
        <MobileNavigation currentView={currentView} onNavigate={handleViewChange} />
        <FilterBar 
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
          showNotStarted={showNotStarted}
          setShowNotStarted={setShowNotStarted}
          showWeakChapters={showWeakChapters}
          setShowWeakChapters={setShowWeakChapters}
          onSort={handleSort}
        />
        
        {/* Chapter List Header */}
        <div className="bg-white px-4 py-3 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">
              Showing all chapters ({filteredChapters.length})
            </span>
            <button 
              onClick={handleSort}
              className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowUpDown className="w-4 h-4" />
              Sort
            </button>
          </div>
        </div>

        {/* Chapter List */}
        <div className="p-4 space-y-3 overflow-y-auto">
          {filteredChapters.map((chapter, index) => (
            <ChapterCard 
              key={index} 
              chapter={chapter} 
              onClick={() => handleChapterClick(chapter)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;