'use strict';
const logger = require('./../../applogger');
const {restaurant} = require('./restaurantEntity');

var addRestaurant = (req, res) => {
    let newRestaurant = new restaurant(req.body);
    newRestaurant.save().then((docs) => {
        logger.debug(docs);
        res.send(docs);
    }, (err) => {
        res.status(400).send(err);
        logger.debug(err);
        logger.debug('error occurred while adding');
    });
};

var viewRestaurant = (req, res) => {
    console.log('Inside get');
    restaurant.find().then((docs) => {
        res.send(docs);
        logger.debug(docs);
    }, (err) => {
        res.status(400).send(err);
        logger.debug(err);
    });
};

var updateRestaurant = (req, res) => {
    let newComment = req.body.comments;
    console.log('my comment is :'+newComment);
    restaurant.findOneAndUpdate({_id:req.body.id}, {
        $set: {comments: req.body.comments}
    },function(err,docs) {
        res.send(docs + "update successfully");
        if(err)
        res.status(400).send(err);
    })
};

var deleteRestaurant = (req, res) => {
    restaurant.remove({_id : req.body.id}).then((docs) => {
        if (!docs) {
            return console.log('id not found');
        }
        res.send(docs);
        logger.debug('deleted successfully');
    }, (err) => {
        res.status(400).send(err);
    })
}

module.exports = {
    addRestaurant,
    viewRestaurant,
    updateRestaurant,
    deleteRestaurant
}
