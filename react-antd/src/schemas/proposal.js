const mongDB =  require('mongoose');
let ProposalSchema = new mongDB.Schema({
	author: String,
    content: String
});

ProposalSchema.static = {
	fetch:function(cb) {
		return this.find({})
		           .sort()
		           .exec(cb);
	}
};

module.exports = ProposalSchema;