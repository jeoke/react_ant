const mongDB =  require('mongoose');
let PoetrySchema = new mongDB.Schema({
	article: String,
	mark: Number,
	title: String,
    content: String
});

PoetrySchema.static = {
	fetch:function(cb) {
		return this.find({})
		           .sort()
		           .exec(cb);
	}
};

module.exports = PoetrySchema;