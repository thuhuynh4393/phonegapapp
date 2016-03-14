var app = angular.module('myApp', ['ngMaterial']);
app.controller('MyController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
	$mdSidenav('left').toggle();
  };
});

app.controller('boxCard', function($scope) {  
	$scope.imagePath = 'img/icons/hot.svg';  
});
/* show box*/
app.controller('SelectAsyncController', function($timeout, $scope) {
  $scope.box = null;
  $scope.boxes = null;
  $scope.loadBoxes = function() {
    // Use timeout to simulate a 650ms request.
    return $timeout(function() {
      $scope.boxes =  $scope.boxes  || [
        { id: 1, name: 'Box 1',
        	comman: "hah 1aha",
      		values: [{comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/hot.svg"},
                    {comamn:"img/icons/food.svg"},
                    {comamn:"img/icons/hot.svg"},
           				{comamn:"img/icons/hot.svg"}] 
   			},
        { id: 2, name: 'Box 2',comman: "hah3 aha",
      		values: [{comamn:"img/icons/food.svg"},
                  {comamn:"img/icons/food.svg"},
                  {comamn:"img/icons/food.svg"},
                  {comamn:"img/icons/food.svg"},
                  {comamn:"img/icons/food.svg"},
           				{comamn:"img/icons/food.svg"}]  },
        { id: 3, name: 'Box 3',comman: "hah3 aha",
      		values: [{comamn:"img/icons/food.svg"},
           				{comamn:"img/icons/food.svg"}]  },
        { id: 4, name: 'Box 4',comman: "hah3333  aha",
      		values: [{comamn:"img/icons/food.svg"},
           				{comamn:"img/icons/food.svg"}]  },
        { id: 5, name: 'Box 5',comman: "hahaha hahah haha",
      		values: [{comamn:"img/icons/food.svg"},
           				{comamn:"img/icons/food.svg"},
           				{comamn:"img/icons/food.svg"}]  }
      ];
    }, 20);
  };
});
/* control light pupm*/