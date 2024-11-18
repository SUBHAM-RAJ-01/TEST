// src/components/HowItWorks.js
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="bg-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-orbitron text-center text-black mb-8">
          How It Works?
        </h2>
        <div className="flex justify-between items-center space-x-10">
          {/* Upload Section */}
          <div className="flex flex-col items-center">
            <div className="bg-black text-white p-4 rounded-full mb-4">
              <i className="fas fa-upload text-4xl"></i>
            </div>
            <p className="text-center text-lg font-medium">Upload</p>
            <p className="text-center text-sm text-gray-600">Drag & drop your file here</p>
          </div>

          {/* Select Format Section */}
          <div className="flex flex-col items-center">
            <div className="bg-black text-white p-4 rounded-full mb-4">
              <i className="fas fa-list-alt text-4xl"></i>
            </div>
            <p className="text-center text-lg font-medium">Select Format</p>
            <p className="text-center text-sm text-gray-600">Choose the output format</p>
          </div>

          {/* Download Section */}
          <div className="flex flex-col items-center">
            <div className="bg-black text-white p-4 rounded-full mb-4">
              <i className="fas fa-download text-4xl"></i>
            </div>
            <p className="text-center text-lg font-medium">Download</p>
            <p className="text-center text-sm text-gray-600">Download your converted file</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
