var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TweetModel = function() {
  var tweetSchema = new Schema({
    username: String,
    content: { type: String, minLength: 1, maxLength: 140 },
    date: { type: Date, default: Date.now }
  });

  return mongoose.model('Tweet', tweetSchema);
}

module.exports = {
  Tweet: TweetModel()
};
