const mongoose =  require('mongoose');
const ArticleSchema = require('../schemas/article.js');
let Article = mongoose.model('Article',ArticleSchema);

module.exports = Article;