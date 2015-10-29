var app = angular.module("iniciandoAngularApp");

app.factory("departamentosServices", function ($http){

      var factory =  {};

      factory.departamentos = function(){
        return $http.get("scripts/lists/departamentos.json")
      };

      factory.municipios = function() {
        return $http.get("scripts/lists/municipios.json")
      };

      return factory;
});
