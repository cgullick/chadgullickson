(function() {
  "use strict";

  angular
    .module("app.about")
    .controller("AboutCtrl", AboutCtrl);

  AboutCtrl.$inject = [];
  /* @ngInject */
  function AboutCtrl() {
    var vm = this;
  }
})();