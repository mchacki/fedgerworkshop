(function () {
  "use strict";

  var Foxx = require("org/arangodb/foxx"),
    Users;

  Users = Foxx.Repository.extend({
  });

  exports.Repository = Users;
}());
