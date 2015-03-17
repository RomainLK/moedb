angular.module('moeResource', ['ngResource']).provider('Artist', function(){
  this.$get=function($resource){
    return $resource('artist',{}, {});
  }
});