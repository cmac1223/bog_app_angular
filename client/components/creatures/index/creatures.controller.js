CreaturesController.$inject = ["creaturesService"]

function CreaturesController(creaturesService){
  const vm = this;

  activate();

  function activate() {
    creaturesService.getCreatures()
      .then(Response => {
        console.log(Response);
        vm.creatures = Response;
      });
  }
}

export default CreaturesController;