const mongDB =  require('mongoose');
const crypto = require('crypto');
let UserSchema = new mongDB.Schema({
        username:{
        	unique:true,
        	type:String
        },
        password:String,
        email:String,
        residence:Array,
        agreement:Boolean,
        website:String,
        phone:Number,
        avatar:String,
        avatarPath:String,
        meta:{
        	createAt:{
        		type:Date,
        		default:Date.now()
        	},
        	updataAt:{
        		type:Date,
        		default:Date.now()
        	}
        }
});

UserSchema.pre('save',function(next){
    let user = this;
    if(this.isNew){
        this.meta.createAt = this.meta.updataAt = Date.now();
    }else{
        this.meta.updataAt = Date.now();
    }
    const md5 = crypto.createHash('md5');
    md5.update(user.password);
    user.password = md5.digest('hex'); //加密存储
    next();
});

UserSchema.methods = {
	comparePassword:function(_password,cb) {
	    let user = this;  
	    const vilidate = require('crypto').createHash('md5').update(_password).digest('hex');

	    let isMatch;
	    if (vilidate === user.password) {
             isMatch = true;
             cb(null,isMatch);
	    }else{
	    	isMatch = false;
	    	cb(null,isMatch);
	    }
	}
};

UserSchema.static = {
	fetch:function(cb) {
		return this.find({})
		           .sort()
		           .exec(cb);
	},
	findById:function(id,cb) {
		return this.findOne({_id:id})
		           .exec(cb);
	}
};

module.exports = UserSchema;