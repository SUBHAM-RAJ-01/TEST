import React from 'react';

const ProgressTracker = ({ progress }) => {
  return (
    <div className="w-full mt-6">
      <div className="bg-gray-300 h-4 rounded-full">
        <div
          className="bg-blue-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center text-sm mt-2 text-gray-600">{progress}%</p>
    </div>
  );
};

export default ProgressTracker;
