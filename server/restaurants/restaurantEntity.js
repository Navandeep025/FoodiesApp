const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({resId: Number, resLoc: String, resAddr: String});

var restaurant = mongoose.model('restaurant', schema);

module.exports = {
    restaurant
}
