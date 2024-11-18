// controllers/convertController.js
const path = require('path');
const fs = require('fs');
const { fromPath } = require('pdf2pic'); // Example: pdf to image conversion
const sharp = require('sharp'); // For image conversion
const mammoth = require('mammoth'); // For DOCX to HTML conversion

const convertFile = async (req, res) => {
  try {
    const file = req.file;
    const ext = path.extname(file.originalname).toLowerCase();

    // PDF to image conversion
    if (ext === '.pdf') {
      const outputImagePath = path.join(__dirname, '../converted', `${file.filename}-image.png`);
      const convert = fromPath(file.path, {
        density: 100,
        saveFilename: `${file.filename}-image`,
        savePath: path.join(__dirname, '../converted')
      });

      await convert(1).then(() => {
        return res.json({
          message: 'PDF converted to image',
          downloadUrl: `/download/${file.filename}-image.png`,
        });
      });

    // DOCX to HTML conversion
    } else if (ext === '.docx') {
      const htmlOutput = await mammoth.convertToHtml({ path: file.path });
      const outputHtmlPath = path.join(__dirname, '../converted', `${file.filename}.html`);
      fs.writeFileSync(outputHtmlPath, htmlOutput.value);
      return res.json({
        message: 'DOCX converted to HTML',
        downloadUrl: `/download/${path.basename(outputHtmlPath)}`,
      });

    // Image conversion (JPG, PNG)
    } else if (ext === '.jpg' || ext === '.png') {
      const outputImagePath = path.join(__dirname, '../converted', `${file.filename}-converted.png`);
      await sharp(file.path).toFile(outputImagePath);
      return res.json({
        message: 'Image converted to PNG',
        downloadUrl: `/download/${path.basename(outputImagePath)}`,
      });

    } else {
      return res.status(400).json({ error: 'Unsupported file type' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error during conversion', details: error.message });
  }
};

module.exports = { convertFile };
