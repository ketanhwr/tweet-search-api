var models = require('./models');

var Tweet = models.Tweet;

var TweetController = function() {
  const INVALID = {
    'status': 'invalid'
  };

  var get = function(req, res, next) {
    var id = req.params.id;

    Tweet.findById(id, function(err, tweet) {
      if (err) {
        console.error(err);

        res.send(INVALID);
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

        res.send(INVALID);
        return next();
      }

      var response = {
        'status': 'ok',
        '_id': tweet.id
      };

      res.send(response);
      next();
    });
  }

  var del = function(req, res, next) {
    var id = req.params.id;

    var find = { '_id': id };

    Tweet.deleteOne(find, function(err) {
      if (err) {
        console.log(err);

        res.send(INVALID);
        return next();
      }

      var response = {
        'status': 'ok'
      };

      res.send(response);
      next();
    });
  }

  var put = function(req, res, next) {
    var id = req.params.id;

    var find = { '_id': id };
    var update = {};

    if ('username' in req.query) {
      update.username = req.query.username;
    }

    if ('content' in req.query) {
      update.content = req.query.content;
    }

    if ('date' in req.query) {
      update.date = req.query.date;
    }

    Tweet.update(find, update, function(err, raw) {
      if (err) {
        console.error(err);

        res.send(INVALID);
        return next();
      }

      var response = {
        'status': 'ok',
        '_id': id
      };

      res.send(response);
      next();
    });
  }

  return {
    get: get,
    post: post,
    del: del,
    put: put
  };
};

module.exports = {
  tweet: TweetController()
};
