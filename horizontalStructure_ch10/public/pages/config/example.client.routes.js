angular.module('example').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'pages/views/about.client.view.html',
      css: 'css/index.css'
    }).
    when('/articles', {
      templateUrl: 'articles/views/list-articles.client.view.html',
      css: 'css/articles.css'
    }).
    when('/contact', {
      templateUrl: 'pages/views/contact.client.view.html',
      css: 'css/contact.css'
    }).
    when('/members', {
      templateUrl: 'pages/views/members.client.view.html',
      css: 'css/members.css'
    }).
    when('/photos', {
      templateUrl: 'pages/views/photos.client.view.html',
      css: 'css/photos.css'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);
