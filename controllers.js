module.exports.home = (function() {
  var get = function(req, res, next) {
    res.send('First Controller!');
    next();
  };

  return {
    get: get
  };
})();
