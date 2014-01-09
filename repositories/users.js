(function () {
  "use strict";

  var Foxx = require("org/arangodb/foxx"),
    _ = require("underscore"),
    ArangoError = require("org/arangodb").ArangoError,
    Users;

  Users = Foxx.Repository.extend({
    summaries: function() {
      return _.map(this.collection.toArray(), function(user) {
        return {
          _key: user._key,
          name: user.name
        };
      });
    },

    byName: function(name) {
      var result = this.collection.firstExample({ name: name });
      if (result === null) {
        throw new ArangoError();
      }
      return new this.modelPrototype(result);
    }
  });

  exports.Repository = Users;
  exports.ArangoError = ArangoError;
}());
