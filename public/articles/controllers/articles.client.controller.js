angular.module('articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Authentication', 'Articles',
    function($scope, $routeParams, $location, Authentication, Articles) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;

        $scope.busy = true;
        $scope.allData = [];
        $scope.articles = [];
        var page = 0;
        var step = 10;
        // Create a new controller method for creating new articles
        $scope.create = function() {
        	// Use the form fields to create a new article $resource object
            var article = new Articles({
                title: this.title,
                content: this.content
            });

            // Use the article '$save' method to send an appropriate POST request
            article.$save(function(response) {
            	// If an article was created successfully, redirect the user to the article's page
                $location.path('articles/' + response._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };


        //$scope.find = function() {
          //$scope.articles = Articles.query();
          //console.log($scope.articles);
        //};
        $scope.find = Articles.query().$promise.then(function(data) {
          $scope.allData = data;
          console.log($scope.allData[0].created);
          $scope.busy = false;
          $scope.nextPage();

          //$scope.data = $scope.articles.slice(0, 10);
          //console.log($scope.articles);
          //console.log($scope.articles[0]);
          //return $scope.articles;
        });//.$promise.then($scope.getMoreData = function($scope.articles))
        //console.log($scope.articles);
        //console.log($scope.find);
        //console.log($scope.find());
        // Create a new controller method for retrieving a single article

        $scope.nextPage = function() {
          var articlesLength = $scope.articles.length;

          if ($scope.busy) {
            return;
          }

          $scope.busy = true;
          console.log($scope.data.length);
          console.log($scope.articles.length);
          $scope.articles = $scope.articles.concat($scope.allData.splice(page*step, step));
          console.log($scope.data.length);
          console.log($scope.articles.length);
          console.log($scope.articles[0].created);
          page++;
          $scope.busy = false;

          if ($scope.articles.length === 0) {
            $scope.noMoreData = true;
          }
        };
        $scope.findOne = function() {
        	// Use the article 'get' method to send an appropriate GET request
            $scope.article = Articles.get({
                articleId: $routeParams.articleId
            });
        };

        //$scope.find.$promise.then(console.log($scope.articles));
        //$scope.getMoreData = function() {
        //  $scope.data = temp.slice(0, $scope.data.length + 10);
        //};

        // Create a new controller method for updating a single article
        $scope.update = function() {
        	// Use the article '$update' method to send an appropriate PUT request
            $scope.article.$update(function() {
            	// If an article was updated successfully, redirect the user to the article's page
                $location.path('articles/' + $scope.article._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for deleting a single article
        $scope.delete = function(article) {
        	// If an article was sent to the method, delete it
            if (article) {
            	// Use the article '$remove' method to delete the article
                article.$remove(function() {
                	// Remove the article from the articles list
                    for (var i in $scope.articles) {
                        if ($scope.articles[i] === article) {
                            $scope.articles.splice(i, 1);
                        }
                    }
                });
            } else {
            	// Otherwise, use the article '$remove' method to delete the article
                $scope.article.$remove(function() {
                    $location.path('articles');
                });
            }
        };
    }
]);
