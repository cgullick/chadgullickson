(function() {
  "use strict";
  
  angular
    .module("app.about")
    .run(run);
  
  run.$inject = ["routerHelper"];
  /* @ngInject */
  function run(routerHelper) {
    routerHelper.configureStates(getStates());
  }
  
  function getStates() {
    return [
      {
        state: "about",
        config: {
          url: "/about",
          templateUrl: "app/about/about.html",
          controller: "AboutCtrl",
          controllerAs: "ac"
        }
      }
    ];
  }
})();