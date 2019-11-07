const express = require('express');
const controller = require('../controller/controller.js');
router = express.Router();
router.route('/getBMI').get(controller.getBMI);
module.exports = router;
