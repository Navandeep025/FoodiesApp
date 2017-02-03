'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
// const userCtrl = require('./userController');

router.post('/add', function(req, res) {
    logger.debug("Inside user post");
    let user = req.body;
    res.send('Hello '+JSON.stringify(user));
});

// Get details of all user in the system
router.get('/', function(req, res) {
  console.log('Inside get');
  res.send('response from user GET route check');
});

router.put('/update', (req, res) => {
  res.send('updated successfully');
});

router.delete('/delete', (req, res) => {
  res.send('deleted successfully');
});


module.exports = router;
