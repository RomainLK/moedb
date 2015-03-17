angular.module('HomeController', []).config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
  });
})