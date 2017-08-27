module.exports = function(app) {
  var static = require('../controllers/static-pages.server.controller');

  app.get('/contact', function(req, res) {res.send('hello world'); });
  console.log("hello world");
  app.get('/members', static.renderMembers);

  app.get('/photos', static.renderPhotos);
};
