'use strict';
const logger = require('./../../applogger');
const {restaurant} = require('./restaurantEntity');

var addRestaurant = (req, res) => {
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
};

var viewRestaurant = (req, res) => {
  console.log('Inside get');
  restaurant.find().then((docs) => {
      res.send(docs);
      logger.debug(docs);
  },(err) => {
    res.status(400).send(err);
    logger.debug(err);
  });
};

var updateRestaurant = (req, res) => {
  let newLocation = req.body.resLoc;
  console.log(newLocation);
  restaurant.findByIdAndUpdate(req.params.id,{
    $set:{
      resLoc: newLocation
    }
  }).then((docs) => {
    res.send(docs+"update successfully");
  }, (err) => {
    res.status(400).send(err);
  })
};

var deleteRestaurant = (req, res) => {
  restaurant.findByIdAndRemove(req.params.id).then((docs)=>{
    if(!docs) {
      return console.log('id not found');
    }
    res.send(docs);
    logger.debug('deleted successfully');
  },(err)=> {
    res.status(400).send(err);
  })
}

module.exports = {
  addRestaurant,
  viewRestaurant,
  updateRestaurant,
  deleteRestaurant
}
