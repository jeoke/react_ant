const mongoose =  require('mongoose');
const UserSchema = require('../schemas/user.js');
let User = mongoose.model('User',UserSchema);

module.exports = User;