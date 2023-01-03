app.directive('singleList', function () {
  return {
    /* 
    E:element
    A:attribute
    C:class
    M:comment
    */

    restrict: 'E',

    /* 
    scope:
    = is two-way binding
    @ simply reads the value (one-way binding)
    & is used to bind functions
    */
    scope: {
      title: '=',
      list: '=',
    },
    templateUrl: "js/directives/singleList/singleList.html",
  }
})