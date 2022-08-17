const forums = require('./forums.js');

module.exports.userAuth = require('./userAuth.js');

module.exports.getPosts = forums.getPosts;
module.exports.addPost = forums.addPost;
module.exports.getPost = forums.getPost;
module.exports.getResponses = forums.getResponses;
