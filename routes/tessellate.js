var auth = require ('../auth');
var models = require('../models');

exports.view = function(req, res) {
	res.render('tessellate');
}

// exports.getPiece = function(req, res) {
// 	auth.fb.tags.recent({
// 	name:req.body.hashtag,
// 	complete: function(data_) {
// 		//create a piece array
// 		pieceArr = [];
// 		data.map(function(item) {
// 			//create temporary json object
// 			tempJSON = {};
// 			tempJSON.url = item.images.standard_resolution.url;
// 			//insert json object into piece array
// 			pieceArr.push(tempJSON);
// 		});
// 		data = {pieceArray: pieceArr, pieceValue:req.body.hashtag};

// 		res.render('piece', data);
// 	}
// 	});
// }

exports.savePiece = function(req, res) {
		var newPiece = new models.Piece({
			"hashtag" : req.body.hashtag,
			"image": req.body.url
		});
		
		newPiece.save(callbackFunction);

		function callbackFunction(err) {
			err ? (console.log(err), res.redirect('/')) : res.redirect('/');
		}
}

// exports.deletePiece = function(req, res) {
// 		auth.
// }