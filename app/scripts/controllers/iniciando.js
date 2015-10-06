angular.module("iniciandoAngularApp").controller('InciandoCtrl',  function ($scope, partidosServices) {

  $scope.candidatos = [];
  $scope.candidato  = {};
  $scope.partidos = [];
  obtenerPartidos();

  function obtenerPartidos() {
    partidosServices.listaPartidos().then(function success(response){
         $scope.partidos = response.data;
         console.log("Lista partidos", $scope.partidos);
       },
       function error(response){
         console.error("Error consultando Partidos", response)
       }
     );
  }



  $scope.agregarCandidato = function(){
    if($scope.formAgregar.$valid){
      $scope.candidatos.push($scope.candidato);
      console.log("candidatos", $scope.candidatos);
      $scope.candidato = {};

    }

  }



});
