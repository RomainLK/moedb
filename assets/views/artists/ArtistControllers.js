angular.module('Artists', ['formDirectives']).config(
  function($routeProvider){
  $routeProvider.when('/artists', {
    templateUrl: 'artists/artistList.html',
    controller: 'ArtistsListController'
  })
  .when('/artists/:id', {
    templateUrl: 'artists/artistEdit.html',
    controller: 'ArtistEditController'
  });
})
.controller('ArtistsListController', function($scope,$resource){
  var Artist = $resource('artist',{}, {});
  Artist.query().$promise.then(function(result){
    $scope.artist = result;
  })
})
.controller('ArtistEditController', function($scope,$resource){
  var Artist = $resource('artist',{}, {});
  $scope.artist = new Artist();
})
;