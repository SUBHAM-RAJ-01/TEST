import React, { useState } from 'react';

const FileConverter = () => {
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    // Start conversion process (sending the file to the backend)
    setIsConverting(true);

    const eventSource = new EventSource('/api/convert', {
      method: 'POST',
      body: formData,
    });

    eventSource.onmessage = (event) => {
      const { progress } = JSON.parse(event.data);
      setProgress(progress); // Update the progress bar
      if (progress === 100) {
        setIsConverting(false); // Stop the conversion state when done
        eventSource.close();
      }
    };

    eventSource.onerror = (error) => {
      console.error('Error during conversion:', error);
      setIsConverting(false);
      eventSource.close();
    };
  };

  return (
    <div className="file-converter">
      <h1>Convert your file</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload} disabled={isConverting}>
        {isConverting ? 'Converting...' : 'Start Conversion'}
      </button>

      <div className="progress-bar" style={{ marginTop: '20px' }}>
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%`, height: '10px', backgroundColor: '#4caf50' }}
        />
      </div>
      <p>{progress}%</p>
    </div>
  );
};

export default FileConverter;
