import React, { useState } from 'react';
import FileUploader from '../components/FileUpload';
import ConverterOptions from '../components/ConverterOptions';
import ProgressTracker from '../components/ProgressTracker';
import DownloadLink from '../components/DownloadLink';
import HowItWorks from '../components/HowItWorks';
import Advertisement from '../components/Advertisement'; // Import the Advertisement component

const Home = () => {
  const [file, setFile] = useState(null);
  const [conversionFormat, setConversionFormat] = useState('');
  const [progress, setProgress] = useState(0);
  const [convertedFile, setConvertedFile] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-semibold mt-24 mb-10 text-gray-800">Convert Your Files Here</h1>

      {/* File Uploader */}
      <FileUploader setFile={setFile} />
      <h1 className="text-sm font-bold mt-4 text-gray-600">Click to Select or Drag files here</h1>

      {/* Converter Options */}
      {file && (
        <div className="mt-6 w-full max-w-lg">
          <ConverterOptions setConversionFormat={setConversionFormat} />
        </div>
      )}

      {/* Progress Tracker */}
      {conversionFormat && file && <ProgressTracker progress={progress} />}

      {/* Download Link */}
      {convertedFile && <DownloadLink file={convertedFile} />}

      {/* How It Works section */}
      <div className="mt-12 w-full">
        <HowItWorks />
      </div>

      {/* Advertisement section */}
      <div className="mt-12 mb-0 pb-0 w-full">
        <Advertisement />
      </div>
    </div>
  );
};

export default Home;
