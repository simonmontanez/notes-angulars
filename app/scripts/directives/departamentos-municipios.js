var app = angular.module("iniciandoAngularApp");

app.directive('departamentomunicipio', function($q, departamentosServices) {

  return{
    restrict: 'E',
    templateUrl: 'views/departamentos-municipios.html',
    require: ['^ngModel'],
    link: function (scope, elem, att, ngModelController) {

      $q.all([
        departamentosServices.departamentos(),
        departamentosServices.municipios()
      ]).then(function(listas){
        scope.departamentos = listas[0].data;
        scope.municipios = listas[1].data;


        scope.reset = function() {
          scope.idMunicipio = undefined;
          scope.idDepartamento = undefined;
          scope.municipiosFiltrado = [];
        }

        scope.reset();

        var ngModel = ngModelController[0];


        ngModel.$formatters.push(function(modelValue) {
          if(modelValue != undefined && modelValue != "" && modelValue != null) {
            scope.idDepartamento = modelValue.substring(0, 2);
            scope.filtrarMunicipios();
            scope.idMunicipio = modelValue;
          } else {
            scope.reset();
          }
        });


        scope.$watch('idMunicipio', function () {
          ngModel.$setViewValue(scope.idMunicipio);
        });


        /*scope.$watch(function(){
          console.debug("$watch.return", ngModel.$modelValue);
          return ngModel.$modelValue;
        }, function(modelValue){
          console.debug("$watch.$modelValue", modelValue);
          scope.idMunicipio = modelValue;
        });*/


        scope.filtrarMunicipios = function () {
          scope.municipiosFiltrado = [];
          for (var i = 0; i < scope.municipios.length; i++) {
            if (scope.municipios[i].id.indexOf(scope.idDepartamento) == 0)
              scope.municipiosFiltrado[scope.municipiosFiltrado.length] = scope.municipios[i];
          }
        }


      },function (error){

      })


    }

  }
});
