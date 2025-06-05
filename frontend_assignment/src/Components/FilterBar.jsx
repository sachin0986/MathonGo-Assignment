import React from 'react';

// --- Filter Bar Component ---
const FilterBar = ({
  selectedClass,
  setSelectedClass,
  selectedUnit,
  setSelectedUnit,
  showNotStarted,
  setShowNotStarted,
  showWeakChapters,
  setShowWeakChapters,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 min-w-fit focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Class</option>
          <option value="Class 11">Class 11</option>
          <option value="Class 12">Class 12</option>
        </select>

        <select
          value={selectedUnit}
          onChange={(e) => setSelectedUnit(e.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 min-w-fit focus:ring-blue-500 focus:border-blue-500"
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
              ? 'bg-orange-50 border-orange-300 text-orange-700 dark:bg-orange-900 dark:border-orange-600 dark:text-orange-200'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Not Started
        </button>

        <button
          onClick={() => setShowWeakChapters(!showWeakChapters)}
          className={`px-3 py-2 rounded-xl border text-sm whitespace-nowrap transition-colors ${
            showWeakChapters
              ? 'bg-orange-50 border-orange-300 text-orange-700 dark:bg-orange-900 dark:border-orange-600 dark:text-orange-200'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Weak Chapters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;