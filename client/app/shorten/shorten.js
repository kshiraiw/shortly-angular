angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};
  $scope.newLink = {};
  $scope.Auth = Auth;
  $scope.addLink = function(link) {
    Links.addLink(link).then(function(data) {
      $scope.shorten.$setPristine();
      $scope.newLink.url = '';
      $scope.link = data.data;
      console.log("scope.link is ", $scope.link)
      console.log(data);
    });
  };
  // Your code here
});
