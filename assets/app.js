function UserController($scope, $http) {
  $scope.selected = null;
  $scope.users = [];
  var success = function() {
    $scope.adding = false;
    $scope.modify = false;
    $http.get("user").success(function(res) {
      $scope.users = res;
    });
  };

  success();

  $scope.newUser = function() {
    $scope.adding = true;
    $scope.modify = true;
    $scope.selected = {};
  };

  $scope.modifyUser = function() {
    if ($scope.adding) {
      $http.post("user", $scope.selected)
        .success(success);
    } else {
      $http.put("user/" + $scope.selected._key, $scope.selected)
        .success(success);
    }
  };

  $scope.deleteUser = function() {
      $http.delete("user/" + $scope.selected._key, $scope.selected)
        .success(success);
  };

  $scope.$watch("selected", function() {
    if ($scope.selected) {
      $scope.modify = true;
    }
  });

}
