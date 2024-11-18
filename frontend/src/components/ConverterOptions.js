import React from 'react';

const ConverterOptions = ({ setConversionFormat }) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        onClick={() => setConversionFormat('pdf')}
      >
        Convert to PDF
      </button>
      <button
        className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        onClick={() => setConversionFormat('word')}
      >
        Convert to Word
      </button>
      <button
        className="bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        onClick={() => setConversionFormat('image')}
      >
        Convert to Image
      </button>
    </div>
  );
};

export default ConverterOptions;
