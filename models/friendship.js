(function () {
  "use strict";
  var Foxx = require("org/arangodb/foxx"),
    Friendship;

  Friendship = Foxx.Model.extend({

  }, {
    // "Class" Properties
    attributes: {
      from: "string",
      to: "string"
    }
  });

  exports.Model = Friendship;
}());
