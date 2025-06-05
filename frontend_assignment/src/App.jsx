import React, { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';

// Import components and context from their correct paths (lowercase 'components' and 'context')
import { ThemeProvider } from './Context/ThemeContext';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import FilterBar from './Components/FilterBar';
import MobileNav from './Components/MobileNav';
import ChapterCard from './Components/CardChapter';

// Import mock data
import { mockData } from './DummyData/MockData';


// --- Main App Component ---
const AppContent = () => {
  const [currentView, setCurrentView] = useState('physics');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [showNotStarted, setShowNotStarted] = useState(false);
  const [showWeakChapters, setShowWeakChapters] = useState(false);

  const handleViewChange = (view) => {
    setCurrentView(view);
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col md:flex-row font-sans">
      <SideBar currentView={currentView} onViewChange={handleViewChange} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentView={currentView} />
        <MobileNav currentView={currentView} onNavigate={handleViewChange} />
        <FilterBar
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
          selectedUnit={selectedUnit}
          setSelectedUnit={setSelectedUnit}
          showNotStarted={showNotStarted}
          setShowNotStarted={setShowNotStarted}
          showWeakChapters={showWeakChapters}
          setShowWeakChapters={setShowWeakChapters}
        />

        <div className="bg-white dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Showing all chapters ({filteredChapters.length})
          </span>
          <button
            onClick={handleSort}
            className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowUpDown className="w-4 h-4" />
            Sort
          </button>
        </div>

        <div className="p-4 space-y-3 overflow-y-auto flex-1 custom-scrollbar">
          {filteredChapters.length > 0 ? (
            filteredChapters.map((chapter, index) => (
              <ChapterCard
                key={index}
                chapter={chapter}
                onClick={() => handleChapterClick(chapter)}
              />
            ))
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 p-8">No chapters found for the selected filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

// Wrapper for ThemeProvider (This is the default export)
const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
