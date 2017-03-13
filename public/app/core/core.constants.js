/* global jwt_decode:false */

(function() {
  "use strict";
  
  angular
    .module("app.core")
    .constant("jwt_decode", jwt_decode);
})();
