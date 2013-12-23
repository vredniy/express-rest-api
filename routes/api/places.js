/*
 * Place resource
 */

var Place = require('../../libs/mongoose').Place;

exports.index = function(req, res){
  return Place.find(function(err, places){
    if(err) {
      res.statusCode = 500;
      console.log('Internal error(%d): %s', res.statusCode, err.message);
      return res.send({ error: 'Server error' });
    } else {
      return res.send({ places: places });
    }
  });

  res.send(places);
};

exports.show = function(req, res){
  return Place.findById(req.params.place, function(err, place){
    if (!place) {
      res.statusCode = 404;
      return res.send({ error: 'Not found' });
    }

    if (err) {
      res.statusCode = 500;
      console.log('Internal error(%d): %s', res.statusCode, err.message);
      return res.send({ error: 'Server error' });
    } else {
      return res.send(place);
    }
  });
};
