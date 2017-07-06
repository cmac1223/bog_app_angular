CreatureController.$inject = ["$stateParams", "creaturesService"];

function CreatureController($stateParams, creaturesService) {
  const vm = this;

  activate();

  function activate () {
    creaturesService.getCreature($stateParams.id).then(response => {
      vm.creature = response.creature;
    })
  }
}

export default CreatureController;