import React from 'react';

const DownloadLink = ({ file }) => {
  return (
    <div className="mt-6 text-center">
      <a
        href={file}
        download
        className="bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
      >
        Download Converted File
      </a>
    </div>
  );
};

export default DownloadLink;
