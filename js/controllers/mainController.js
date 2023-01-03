app.controller('mainController', function ($scope) {
  
  $scope.newTodo = null;

  $scope.text = 'hihihi';
  $scope.todos ={
    title:'Things I wanna do',
    list:[
      'this is todo1',
      'this is todo2',
      'this is todo3',
    ]
  
  } ;
  $scope.books ={
    title:'Book I wanna buy',
    list:[
      'this is book1',
      'this is book2',
      'this is book3',
    ]
  
  } ;


  $scope.addNewListItem = function (list,newItemValue,newItemPropName) {
    list.push(newItemValue);
    $scope[newItemPropName] = null;
  }

  // $scope.onKeyDownInputEvent = function (keyEvent) {
  //   if (keyEvent.which === 13)
  //     $scope.addTodo();
  // }
})