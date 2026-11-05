import React from 'react';

interface ProgressBarProps {
  title: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, percentage }) => (
  <div className="p-3">
    <div className="w-full flex justify-between">
      <h3 className="font-semibold text-indigo-900">{title}</h3>
      <h3 className="font-semibold text-indigo-900">{percentage}%</h3>
    </div>
    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden mt-1">
      <div
        className="h-2 bg-pink-400 transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

export default ProgressBar;

