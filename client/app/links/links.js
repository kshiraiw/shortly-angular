angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  // Your code here
  // console.log("IN LINKS CONTROLLER, SCOPE IS " + Object.keys($scope));
  // $scope.data = Links.getLinks();
  $scope.Auth = Auth;
  $scope.data = {};
  $scope.getLinks = function() {
    Links.getLinks().then(function(data) {
      $scope.data.links = data.data;
    });
  }
  $scope.getLinks();
})
.directive('ac_linkView', function() {
  
}); 
