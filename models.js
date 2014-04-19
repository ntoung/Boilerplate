var Mongoose = require('mongoose');


var PieceSchema = new Mongoose.Schema({
	"image" : { type: String },
	"hashtag" : { type: String}
});

exports.Piece = Mongoose.model('Piece', PieceSchema);


