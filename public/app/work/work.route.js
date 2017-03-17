(function() {
  "use strict";
  
  angular
    .module("app.work")
    .run(run);
  
  run.$inject = ["routerHelper"];
  /* @ngInject */
  function run(routerHelper) {
    routerHelper.configureStates(getStates());
  }
  
  function getStates() {
    return [
      {
        state: "work",
        config: {
          url: "/work",
          templateUrl: "app/work/work.html",
          controller: "WorkCtrl",
          controllerAs: "wc"
        }
      }
    ];
  }
})();