var mongoose = require('mongoose');
var Schema = mongoose.Schema;

ImageSchema = new Schema( {
	name: String,
	desc: String,
	image: String,
	user_id: Schema.ObjectId,
	is_delete: { type: Boolean, default: false },
	date : { type : Date, default: Date.now }
}),
Image = mongoose.model('Image', ImageSchema);

module.exports = Image;