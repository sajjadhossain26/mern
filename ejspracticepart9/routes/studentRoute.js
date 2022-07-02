const express = require('express');
const { allStudent } = require('../controller/studentController');
const router = express.Router();

router.get('/', allStudent)


module.exports = router;