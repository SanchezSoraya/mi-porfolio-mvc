const express = require('express');
const mainController = require('../controllers/mainController.js')

const router = express.Router();

/*vista home*/
router.get('/', mainController.home);

/*vista about*/
router.get('/about', mainController.about);

module.exports = router; 