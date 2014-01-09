(function() {
  "use strict";
  var db = require("org/arangodb").db,
    users = applicationContext.collectionName("users");

  if (db._collection(users) === null) {
    db._create(users);
  }
}());
