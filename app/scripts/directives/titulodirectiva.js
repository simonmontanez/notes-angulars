var app = angular.module("iniciandoAngularApp");

app.directive('titulo', function() {
  return{
    scope:{
      tituloText: '@'
    },
    restrict: 'AE' ,
    template: '<h1>{{tituloText}}</h1>'
    /*link: function(scope, elem, attrs){

    }*/
  };
});
