const express = require('express');
const multer = require('multer');
const textController = require('../controllers/text.controller');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/plain-text', express.text(), textController.handlePlainText);
router.post('/json', textController.handleJson);
router.post('/text-file', upload.single('file'), textController.handleTextFile);

module.exports = router;
