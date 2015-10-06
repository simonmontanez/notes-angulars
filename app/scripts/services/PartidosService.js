var app = angular.module("iniciandoAngularApp");

app.factory("partidosServices", function ($http){

      var factory =  {};

      factory.listaPartidos = function(){
        return $http.get("scripts/lists/partidos.json")
      }

      return factory;
});
