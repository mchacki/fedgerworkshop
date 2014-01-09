function UserController($scope, $http) {
  $scope.adding = false;
  $scope.modify = false;
  $scope.selected = null;
  $scope.users = [
    {
      _key: "123",
      name: "Harry"
    },
    {
      _key: "321",
      name: "Peter"
    }
  ];

  $scope.newUser = function() {
    $scope.adding = true;
    $scope.modify = true;
    $scope.selected = {};
  };

  $scope.modifyUser = function() {
    if ($scope.adding) {
      console.log("New");
    } else {
      console.log("Update");
    }
    $scope.adding = false;
    $scope.modify = false;
  };

  $scope.$watch("selected", function() {
    if ($scope.selected) {
      $scope.modify = true;
    }
  });

}
