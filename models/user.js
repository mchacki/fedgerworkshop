(function () {
  "use strict";
  var Foxx = require("org/arangodb/foxx"),
    User;

  User = Foxx.Model.extend({

  }, {
    // "Class" Properties
    attributes: {
      _key: "string",
      name: "string"
    }
  });

  exports.Model = User;
}());
