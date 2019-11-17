const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
// using multer for upload of files 
const upload = multer(uploadConfig);


routes.post('/sessions', SessionController.store);
// Passing multer const as a paramether for the post requisition
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routes;