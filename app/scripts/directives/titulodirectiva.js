var app = angular.module("iniciandoAngularApp");

app.directive('titulo', function() {
  return{
    restrict: 'AE' ,
    template: '<h1>Titulo</h1>'
  };
});
