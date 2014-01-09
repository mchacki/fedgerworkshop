(function() {
  "use strict";
  var Foxx = require("org/arangodb/foxx"),
    ArangoError = require("org/arangodb").ArangoError,
    Users = require("./repositories/users").Repository,
    User = require("./models/user").Model,
    users,
    controller;
    
  controller = new Foxx.Controller(applicationContext);

  users = new Users(controller.collection("users"), {
    model: User
  });

  controller.post("/user", function(req, res) {
    var toAdd = req.params("user");
    users.save(toAdd);
  }).bodyParam("user", "The user information to add", User);
}());
