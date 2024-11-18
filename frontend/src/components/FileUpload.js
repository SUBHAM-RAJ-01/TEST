import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [conversionStatus, setConversionStatus] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      return alert('Please select a file');
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setConversionStatus('Uploading...');

      // POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/convert/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setConversionStatus('Conversion in progress...');

      // Fetch the conversion result once it's done
      setDownloadUrl(`http://localhost:5000${response.data.downloadUrl}`);
      setConversionStatus('Conversion completed!');
    } catch (error) {
      console.error('Error during file upload and conversion', error);
      setConversionStatus('Error during conversion');
    }
  };

  return (
    <div>
      <h1>File Conversion</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Convert</button>
      {conversionStatus && <p>{conversionStatus}</p>}
      {downloadUrl && (
        <div>
          <p>Download your converted file:</p>
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            Download Converted File
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
