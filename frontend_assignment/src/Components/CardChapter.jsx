import React from 'react';
import { Atom, Function, Ruler, ArrowLeft, ArrowElbowRightUp, MathOperations, BookOpenText } from "@phosphor-icons/react";

// --- Chapter Card Component ---
const ChapterCard = ({ chapter, onClick }) => {
  const getIcon = (chapterName) => {
    const iconMap = {
      'Mathematics in Physics': <Atom className='text-orange-400' />,
      'Units and Dimensions': <Function className='text-purple-500' />,
      'Gravitation': <Ruler className='text-red-500' />,
      'Motion in One Dimension': <ArrowLeft className='text-blue-500' />,
      'Atomic Structure': <Atom className='text-green-500' />,
      'Sets and Relations': <MathOperations className='text-blue-500' />,
      // Add more mappings as needed for other chapters
    };
    return iconMap[chapterName] || <BookOpenText className='text-gray-500' />;
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
      className="w-full p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-200 text-left hover:border-gray-300 dark:hover:border-gray-600"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
            {getIcon(chapter.chapter)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate mb-1">{chapter.chapter}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>2025: {current2025}Qs {current2025 > current2024 ? '↑' : current2025 < current2024 ? '↓' : ''}</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span>2024: {current2024}Qs</span>
            </div>
          </div>
        </div>
        <div className="text-right flex-shrink-0 ml-4">
          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{chapter.questionSolved}/{total} Qs</div>
        </div>
      </div>
    </button>
  );
};

export default ChapterCard;
