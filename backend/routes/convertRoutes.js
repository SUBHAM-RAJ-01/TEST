// routes/convertRoutes.js
const express = require('express');
const multer = require('multer');
const { convertFile } = require('../controllers/convertController'); // Correctly import the function
const router = express.Router();

// Set up multer to handle file uploads
const upload = multer({
  dest: 'uploads/', // Temporary folder for uploaded files
  limits: { fileSize: 10000000 }, // Limit file size to 10MB
});

// POST route for file upload and conversion
router.post('/upload', upload.single('file'), convertFile);  // Pass the function as a callback

module.exports = router;
