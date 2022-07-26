// external imports
const express = require('express');

// internal imports
const { loginController } = require('../controller/loginController');

const router = express.Router();

// login page
router.get('/', loginController);

module.exports = router;
