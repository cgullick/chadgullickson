(function() {
  "use strict";
  
  angular
    .module("app.contact")
    .run(run);
  
  run.$inject = ["routerHelper"];
  /* @ngInject */
  function run(routerHelper) {
    routerHelper.configureStates(getStates());
  }
  
  function getStates() {
    return [
      {
        state: "contact",
        config: {
          url: "/contact",
          templateUrl: "app/contact/contact.html",
          controller: "ContactCtrl",
          controllerAs: "cc"
        }
      }
    ];
  }
})();