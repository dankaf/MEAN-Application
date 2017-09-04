angular.module('articles').factory('Articles', ['$resource', function($resource) {
	// Use the '$resource' service to return an article '$resource' object
    return $resource('api/articles/:articleId', {
      articleId: '@_id'
    }, null, {
        query: {
          method: 'GET',
          isArray: true,
          transformResponse: function(data) {
            return angular.fromJson(data).articles;
          }
        }
    });
  }
]);
