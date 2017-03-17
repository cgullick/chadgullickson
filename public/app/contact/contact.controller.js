(function() {
  "use strict";

  angular
    .module("app.contact")
    .controller("ContactCtrl", ContactCtrl);

  ContactCtrl.$inject = [];
  /* @ngInject */
  function ContactCtrl() {
    var vm = this;
  }
})();