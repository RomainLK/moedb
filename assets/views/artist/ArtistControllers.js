angular.module('Artists', ['formDirectives']).config(
  function($routeProvider){
  $routeProvider.when('/artist', {
    templateUrl: 'artist/artistList.html',
    controller: 'ArtistListController'
  })
  .when('/artist/edit/:id', {
    templateUrl: 'artist/artistEdit.html',
    controller: 'ArtistEditController',
    resolve: {
      model : function($route, Artist) {
        return Artist.get({id: parseInt($route.current.params.id,10)})
      }
    }
  })
    .when('/artist/new', {
    templateUrl: 'artist/artistEdit.html',
    controller: 'ArtistEditController',
    resolve: {
      model : function(Artist) {
        return new Artist();
      }
    }
  });
  
  
})


.controller('ArtistListController', function($scope,$resource){
  var Artist = $resource('artist',{}, {});
  Artist.query().$promise.then(function(result){
    $scope.artists = result;
  })
})



.controller('ArtistEditController', function($scope,model){
  $scope.artist = model;
})
;