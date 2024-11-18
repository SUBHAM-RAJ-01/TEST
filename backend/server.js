const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const convertRoutes = require('./routes/convertRoutes');
const multer = require('multer');
const fs = require('fs');

dotenv.config();

// Create an instance of the Express application
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // React frontend URL
  methods: ['GET', 'POST'],
}));
app.use(express.json()); // For parsing JSON requests

// Set up Multer for file uploads
const upload = multer({
  dest: 'uploads/', // Temporary folder for uploaded files
  limits: { fileSize: 10000000 }, // Max file size 10MB (adjust as needed)
});

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files from this folder
app.use('/converted', express.static(path.join(__dirname, 'converted'))); // Serve converted files from this folder

// API Routes
app.use('/api/auth', authRoutes);

// File Conversion Route
app.use('/api/convert', convertRoutes);

// Serve converted files (or React frontend in production)
app.use('/download', express.static(path.join(__dirname, 'converted')));

// Serve static files if in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
