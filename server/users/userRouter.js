'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const {user} = require('./userEntity');
const userCtrl = require('./userController');

router.post('/add', (req, res) => {
  userCtrl.addUser(req, res);
});

router.get('/', function(req, res) {
  userCtrl.viewUser(req, res);
});

router.patch('/update/:id', (req, res) => {
  userCtrl.updateUser(req, res);
});

router.delete('/delete/:id', (req, res) => {
  userCtrl.deleteUser(req, res);
});


module.exports = router;
