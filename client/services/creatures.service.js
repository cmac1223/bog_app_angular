creaturesService.$inject = ["$http"];

function creaturesService($http){
  const service = this;

  service.getCreatures = function () {
    return $http.get("/creatures").then(response => response.data);
  }

  service.getCreature = function (id) {
    return $http.get(`/creatures/${id}`).then(response => response.data);
  }

  service.saveCreature = function (newCreature){
    return $http.post("/creatures", newCreature).then(response => {
      return response.data;
    })
  }

  return service;
}

angular.module("BogApp").service("creaturesService", creaturesService);