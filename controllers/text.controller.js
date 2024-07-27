const fs = require('fs');
const path = require('path');

/**
 * Handles plain text input by logging it and sending a response.
 * @param {Object} req - The request object, containing the plain text in `req.body`.
 * @param {Object} res - The response object used to send a response back to the client.
 * @returns {void}
 */
exports.handlePlainText = (req, res) => {
  const text = req.body;
  console.log('Plain Text:', text);
  res.send('Plain text received');
};

/**
 * Handles JSON input by logging it and sending a response.
 * @param {Object} req - The request object, containing the JSON data in `req.body`.
 * @param {Object} res - The response object used to send a response back to the client.
 * @returns {void}
 */
exports.handleJson = (req, res) => {
  const jsonData = req.body;
  console.log('JSON Data:', jsonData);
  res.send('JSON data received');
};

/**
 * Handles text file uploads by reading the file content and sending a response.
 * @param {Object} req - The request object, containing the file information in `req.file`.
 * @param {Object} res - The response object used to send a response back to the client.
 * @returns {void}
 */
exports.handleTextFile = (req, res) => {
  const filePath = req.file.path;
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading file');
    }
    console.log('Text File Content:', data);
    res.send('Text file received');
  });
};
