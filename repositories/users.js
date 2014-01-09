(function () {
  "use strict";

  var Foxx = require("org/arangodb/foxx"),
    _ = require("underscore"),
    Users;

  Users = Foxx.Repository.extend({
    summaries: function() {
      return _.map(this.collection.toArray(), function(user) {
        return {
          _key: user._key,
          name: user.name
        };
      });
    }
  });

  exports.Repository = Users;
}());
