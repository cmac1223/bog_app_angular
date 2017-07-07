const angular = require('angular');
require("angular-ui-router");

angular.module("BogApp", ["ui.router"]).config(router);

router.$inject = ["$stateProvider", "$urlRouterProvider"];

function router ($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home", {
    url: "/",
    template: "<bog-creatures></bog-creatures>"
  })
  .state("creature", {
    url: "/creature/:id",
    template: "<bog-creature></bog-creature>"
  })
  .state("newCreature", {
    url: "/creature/new",
    template: "<bog-new-creature></bog-new-creature>"
  });

  $urlRouterProvider.otherwise("/");
}