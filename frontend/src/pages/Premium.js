// src/pages/Premium.js
import React from 'react';

const Premium = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-8 bg-white shadow-md rounded-lg font-orbitron">
      <h1 className="text-3xl font-bold mb-4">Premium Features</h1>
      <p className="text-lg mb-6">Upgrade to Premium to unlock exclusive features:</p>

      <ul className="list-disc pl-6">
        <li>Unlimited file conversions</li>
        <li>Priority processing speed</li>
        <li>Access to advanced file formats</li>
        <li>Personalized customer support</li>
      </ul>

      <button className="mt-6 px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800">
        Upgrade to Premium
      </button>
    </div>
  );
};

export default Premium;
