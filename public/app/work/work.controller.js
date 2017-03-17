(function() {
  "use strict";

  angular
    .module("app.work")
    .controller("WorkCtrl", WorkCtrl);

  WorkCtrl.$inject = ["workService"];
  /* @ngInject */
  function WorkCtrl(workService) {
    var vm = this;

    vm.repos = [];

    workService.getRepos().then(function(response) {
      response.forEach(function(repo) {
        if(repo.name == "chadgullickson" || repo.name == "wildcatssoftball") {
          vm.repos.push(repo);
        }
      })
    });
  }
})();