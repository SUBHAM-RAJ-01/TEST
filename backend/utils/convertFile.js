// utils/convertFiles.js
const { exec } = require('child_process');
const fs = require('fs');

const convertFile = (inputPath, outputPath, progressCallback) => {
  return new Promise((resolve, reject) => {
    let progress = 0;

    console.log(`Starting conversion from ${inputPath} to ${outputPath}`);
    
    // Start the conversion using ffmpeg
    const conversion = exec(`ffmpeg -i "${inputPath}" "${outputPath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Conversion error: ${error.message}`);
        return reject(new Error('Error during conversion'));
      }

      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);

      resolve();
    });

    // Mock progress callback (replace with actual progress from ffmpeg)
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        return;
      }
      progress += 10;
      progressCallback(progress);  // Send progress to the client
    }, 1000);  // Update every second
  });
};

module.exports = { convertFile };
