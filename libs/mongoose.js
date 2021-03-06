// db
var mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/places');

var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err.message);
});

db.once('open', function callback () {
    console.log("Connected to DB!");
});

var Schema = mongoose.Schema;


var PlaceSchema = new Schema({
  name: { type: String, required: true }
});

PlaceSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
PlaceSchema.set('toJSON', { virtuals: true });

var Place = mongoose.model('Place', PlaceSchema);

module.exports.Place = Place;
