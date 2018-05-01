const mongoose =  require('mongoose');
const PoetrySchema = require('../schemas/Poetry.js');
let Poetry = mongoose.model('Poetry',PoetrySchema);

module.exports = Poetry;