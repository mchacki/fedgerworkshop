(function() {
  "use strict";
  var db = require("org/arangodb").db,
    users = applicationContext.collectionName("users"),
    friendships = applicationContext.collectionName("friendships");

  if (db._collection(users) === null) {
    db._create(users);
  }

  if (db._collection(friendships) === null) {
    db._createEdgeCollection(friendships);
  }
}());
