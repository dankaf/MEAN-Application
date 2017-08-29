angular.module('example').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'pages/views/about.client.view.html'
    }).
    when('/articles', {
      templateUrl: 'articles/views/list-articles.client.view.html'
    }).
    when('/contact', {
      templateUrl: 'pages/views/contact.client.view.html'
    }).
    when('/members', {
      templateUrl: 'pages/views/members.client.view.html'
    }).
    when('/photos', {
      templateUrl: 'pages/views/photos.client.view.html'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);
