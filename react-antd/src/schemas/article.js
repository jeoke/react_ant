const mongDB =  require('mongoose');
let ArticleSchema = new mongDB.Schema({
	article: String,
	current: Number,
	href: String,
	title: String,
    avatar: String,
    description: String,
    content: String
});

ArticleSchema.static = {
	fetch:function(cb) {
		return this.find({})
		           .sort()
		           .exec(cb);
	}
};

module.exports = ArticleSchema;