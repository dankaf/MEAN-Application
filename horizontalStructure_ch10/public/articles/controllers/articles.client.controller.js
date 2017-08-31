angular.module('articles').controller('ArticlesController', ['$scope', '$routeParams', '$location', 'Authentication', 'Articles', 'infinite-scroll',
    function($scope, $routeParams, $location, Authentication, Articles, infinite-scroll) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;
        $scope.articlesTemp = [];
        $scope.article = {};

        $scope.busy = true;
        $scope.allData = [];
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

        // Create a new controller method for retrieving a list of articles
        $scope.find() = function() {
          $scope.articles = Articles.query();
          $scope.articlesTemp = scope.articles;
        };


        $scope.getALL() = function() {
        	// Use the article 'query' method to send an appropriate GET request
            //$scope.articles = Articles.query();
            console.log("hello");
            $scope.articlesTemp = [];
            $scope.allData = Articles.query();
            $scope.nextPage();
            $scope.busy = false;
        };

        $scope.nextPage() = function() {
          var articlesLength = $scope.articlesTemp.length;
          console.log(3+4);
          System.out.println(3+4);
          if ($scope.busy){
            return;
          }
          $scope.busy = true;

          $scope.articlesTemp = $scope.articlesTemp.concat($scope.allData.splice(page*step, step));
          page++;
          $scope.busy = false;

          if($scope.allData.length === 0){
            $scope.noMoreData = true;
          }
        };

        // Create a new controller method for retrieving a single article
        $scope.findOne = function() {
        	// Use the article 'get' method to send an appropriate GET request
            $scope.article = Articles.get({
                articleId: $routeParams.articleId
            });
        };

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

        $scope.loadMore() = function(article) {
          $scope.images = []
        }
    }
]);
