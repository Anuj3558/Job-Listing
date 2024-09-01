// SkeletonSidebar.js
import React from 'react';

const SkeletonSidebar = () => {
  return (
    <div className="lg:w-1/3 w-full pl-4 lg:pl-8">
      <div className="bg-white p-6 lg:shadow-md mb-8 animate-pulse">
        <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>
        <div className="h-6 bg-gray-300 mb-2"></div>
        <div className="h-4 bg-gray-300 mb-4"></div>
        <div className="flex space-x-4">
          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
          <div className="w-6 h-6 rounded-full bg-gray-300"></div>
        </div>
      </div>

      <div className="bg-white p-6 lg:shadow-md mb-8 animate-pulse">
        <div className="h-6 bg-gray-300 mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300"></div>
          <div className="h-4 bg-gray-300"></div>
          <div className="h-4 bg-gray-300"></div>
        </div>
      </div>

      <div className="bg-white p-6 lg:shadow-md animate-pulse">
        <div className="h-6 bg-gray-300 mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300"></div>
          <div className="h-4 bg-gray-300"></div>
          <div className="h-4 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSidebar;
