var models = require('./models.js');

var Tweet = models.Tweet;

var TweetController = function() {
  var get = function(req, res, next) {
    var id = req.params.id;

    Tweet.findById(id, function(err, tweet) {
      if (err) {
        console.error(err);
        return next();
      }

      res.send(tweet);
      next();
    });
  };

  var post = function(req, res, next) {
    var tweet = new Tweet(req.query);

    tweet.save(function(err, tweet) {
      if (err) {
        console.error(err);
        return next();
      }

      var response = {
        '_id': tweet.id
      }

      res.send(response);
      next();
    });
  }

  return {
    get: get,
    post: post
  };
};

module.exports = {
  tweet: TweetController()
};
