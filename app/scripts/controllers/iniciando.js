angular.module("iniciandoAngularApp").controller('InciandoCtrl',  function ($scope) {

  $scope.candidatos = [];
  $scope.candidato = {};

  $scope.agregarCandidato = function(){
    $scope.candidatos.push($scope.candidato);
    console.log("candidatos", $scope.candidatos);
    $scope.candidato = {};
  }

});
