(function() {
"use strict";

  angular
    .module("app.shell")
    .controller("HeaderCtrl", HeaderCtrl);

  HeaderCtrl.$inject = ["$scope"];
  /* @ngInject */
  function HeaderCtrl($scope, authService, userService) {
    var vm = this;
  }
})();
