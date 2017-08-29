module.exports = function(app) {
  var index = require('../controllers/index.server.controller'),
      static = require('../controllers/static-pages.server.controller');

  app.get('/', index.render);
};
