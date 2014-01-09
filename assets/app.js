function UserController($scope, $http) {
  $scope.adding = false;
  $scope.modify = false;
  $scope.selected = null;
  $scope.users = [];
  var reloadUsers = function() {
    $http.get("user").success(function(res) {
      $scope.users = res;
    });
  };

  reloadUsers();

  $scope.newUser = function() {
    $scope.adding = true;
    $scope.modify = true;
    $scope.selected = {};
  };

  $scope.modifyUser = function() {
    var success = function() {
      $scope.adding = false;
      $scope.modify = false;
      reloadUsers();
    };
    if ($scope.adding) {
      $http.post("user", $scope.selected)
        .success(success);
    } else {
      $http.put("user/" + $scope.selected._key, $scope.selected)
        .success(success);
    }
  };

  $scope.$watch("selected", function() {
    if ($scope.selected) {
      $scope.modify = true;
    }
  });

}
