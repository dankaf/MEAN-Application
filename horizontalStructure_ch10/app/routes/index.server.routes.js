module.exports = function(app) {
  var index = require('../controllers/index.server.controller'),
      static = require('../controllers/static-pages.server.controller');

  app.get('/', index.render);

  app.get('/contact', static.renderContact);

  app.get('/members', static.renderMembers);

  app.get('/photos', static.renderPhotos);

};
