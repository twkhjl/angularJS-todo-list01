app.controller('mainController', function ($scope) {
  $scope.newItem = null;
  $scope.text = 'hihihi';
  $scope.list = [
    'this is todo1',
    'this is todo2',
    'this is todo3',
  ];

  $scope.addTodo = function () {
    $scope.list.push($scope.newItem);
    $scope.newItem = null;
  }

  $scope.onKeyDownInputEvent = function (keyEvent) {
    if (keyEvent.which === 13)
      $scope.addTodo();
  }
})