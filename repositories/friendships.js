(function () {
  "use strict";

  var Foxx = require("org/arangodb/foxx"),
    _ = require("underscore"),
    Friendships;

  Friendships = Foxx.Repository.extend({
    save: function(friendship) {
      var from = this.usersCollection + "/" + friendship.get('from'),
        to = this.usersCollection + "/" + friendship.get('to');

      this.collection.save(from, to, { label: "friends"});
    }
  });

  exports.Repository = Friendships;
}());
