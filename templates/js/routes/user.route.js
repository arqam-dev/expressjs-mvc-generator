var express = require('express');
var router = express.Router();
require('../../../models/user.model');

// import middleware 
const auth = require('../../../server/middlewares/auth');

// import controller
const UserController = require('../controller/user.controller');

/* APIs listing. */
router.post('/', UserController.getAllUsers);

module.exports = router;