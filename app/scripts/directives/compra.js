var app = angular.module("iniciandoAngularApp");

app.directive('compra', function() {
  return{
    scope:{
      valorCompra: '='
    },
    restrict: 'AE' ,
    template: '<span>{{valorTotal}}</span>',
    link: function(scope, elem, attrs){

      scope.$watch('valorCompra', function (newVal, oldVal){

        if(typeof scope.valorCompra == 'undefined' || scope.valorCompra == '' )
          scope.valorTotal = 0;
        else
          scope.valorTotal = (parseFloat(scope.valorCompra) * 0.16) + parseFloat(scope.valorCompra);

      },true);

    }
  };
});
