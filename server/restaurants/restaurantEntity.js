const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
  imageurl: String,
  resName: {
    type:String,
    unique : true
  },
  resCuisines: String,
  resAddress: {type:String},
  resRating: String,
  resVotes: String
});

var restaurant = mongoose.model('restaurant', schema);

module.exports = {
    restaurant
}
