'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const {restaurant} = require('./restaurantEntity');
// const userCtrl = require('./userController');

router.post('/add', (req, res) => {
    let newRestaurant = new restaurant({
      resId : req.body.resId,
      resLoc : req.body.resLoc,
      resAddr : req.body.resAddr
    });
    newRestaurant.save().then((docs) => {
      logger.debug(docs);
      res.send(docs);
    }, (err) => {
      res.status(400).send(err);
      logger.debug('error occurred while adding');
    });
});

router.get('/', function(req, res) {
  console.log('Inside get');
  restaurant.find().then((docs) => {
      res.send(docs);
      logger.debug(docs);
  },(err) => {
    res.status(400).send(err);
    logger.debug(err);
  });
});

router.put('/update', (req, res) => {
  res.send('updated successfully');
});

router.delete('/delete', (req, res) => {
  res.send('deleted successfully');
});


module.exports = router;
