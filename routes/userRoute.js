const express = require('express');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');
const userController = require('../controllers/userController');

const user_route = express.Router();

// Configure body-parser middleware
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
user_route.use(express.static(path.join(__dirname, '../public')));

// Set up multer for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});

const upload = multer({ storage: storage });

// Define routes
user_route.get('/register', userController.registerLoad);
user_route.post('/register', upload.single('image'), userController.register);

module.exports = user_route;
