angular.module('formDirectives', [])
.directive('moeFormRow', function(){
  var autoId = 0;
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      label: '@'
    },
    templateUrl: 'components/form/formRow.html',
    link: function(scope, element, attrs, ctrl, transclude){
      transclude(function(clone){
        var input = clone.find('input,select').eq(0).attr('id');
        if(!input){
          input = clone.filter('input,select');
        }
        var id = autoId;
        var inputId = input.attr('id');
        if(inputId){
          id = inputId;
        }
        element.find('label').attr('for', id);
        element.find('[transclude-here]').append(clone);
      });
    }
  }
})