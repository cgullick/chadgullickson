(function() {
	"use strict";

	angular.module("app.work").service("workService", workService);

	workService.$inject = ["$http", "$q"];

	function workService($http, $q) {
		var vm = this;

		vm.getRepos = getRepos;

		function getRepos() {
			return $http.get("https://api.github.com/users/cgullick/repos").then(success, fail);

			function success(response) {
				return response.data;
			}

			function fail(response) {
				return response.data;
			}
		}
	}
})();
