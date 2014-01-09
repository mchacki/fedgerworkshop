(function() {
  "use strict";
  var Foxx = require("org/arangodb/foxx"),
    ArangoError = require("org/arangodb").ArangoError,
    Users = require("./repositories/users").Repository,
    Friendships = require("./repositories/friendships").Repository,
    User = require("./models/user").Model,
    Friendship = require("./models/friendship").Model,
    users,
    friendships,
    controller;

  controller = new Foxx.Controller(applicationContext);

  users = new Users(controller.collection("users"), {
    model: User
  });

  friendships = new Friendships(controller.collection("friendships"), {
    model: Friendship
  });

  friendships.usersCollection = controller.collection("users").name();

  controller.post("/user", function(req, res) {
    var toAdd = req.params("user");
    users.save(toAdd);
  }).bodyParam("user", "The user information to add", User);

  controller.get("/user/:key", function(req, res) {
    var key = req.params("key");
    res.json(users.byId(key));
  }).pathParam("key", {
    description: "The key of the user",
    type: "string"
  });

  controller.get("/user-by-name/:name", function(req, res) {
    var name = req.params("name");
    res.json(users.byName(name));
  }).pathParam("name", {
    description: "The name of the user you want to find",
    type: "string"
  }).errorResponse(ArangoError, 404, "User not found");

  controller.get("/user", function(req, res) {
    res.json(users.summaries());
  });

  controller.put("/user/:key", function(req, res) {
    var key = req.params("key"),
      newInformation = req.params("user");
    users.replaceById(key, newInformation);
  }).pathParam("key", {
    description: "The key of the user",
    type: "string"
  }).bodyParam("user", "The user information to add", User);

  controller.del("/user/:key", function(req, res) {
    var key = req.params("key");
    users.removeById(key);
  }).pathParam("key", {
    description: "The key of the user",
    type: "string"
  });

  controller.post("/friendship", function(req, res) {
    var friendship = req.params("friendship");
    friendships.save(friendship);
  }).bodyParam("friendship", "The friendship you want to create", Friendship);
}());
