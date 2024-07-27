const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Initialize the Express app
const app = express();
const port = process.env.PORT || 3000;

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Middleware to parse JSON and plain text
app.use(bodyParser.json());
app.use(bodyParser.text());

// Endpoint to handle plain text input
app.post('/api/plain-text', (req, res) => {
  const text = req.body;
  console.log('Plain Text:', text);
  res.send('Plain text received');
});

// Endpoint to handle JSON input
app.post('/api/json', (req, res) => {
  const jsonData = req.body;
  console.log('JSON Data:', jsonData);
  res.send('JSON data received');
});

// Endpoint to handle text file upload
app.post('/api/text-file', upload.single('file'), (req, res) => {
  const filePath = req.file.path;
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    console.log('Text File Content:', data);
    res.send('Text file received');
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

