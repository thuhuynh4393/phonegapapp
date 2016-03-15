var app = angular.module('myApp', ['ngMaterial','ngRoute']);
app.controller('MyController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
	$mdSidenav('left').toggle();
  };
});
// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html'
            
        })
        .when('/home', {
            templateUrl : 'pages/home.html'
            
        })
        // route for the about page
        .when('/sub1', {
            templateUrl : 'pages/sub1.html'
        })

        // route for the contact page
        .when('/sub2', {
            templateUrl : 'pages/sub2.html'
        });
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
      		values: [{name: "Hoa Lan",comamn:"img/icons/hot.svg"},
                    {name: "Hoa Huệ",comamn:"img/icons/hot.svg"},
                    {name: "Hoa Cúc",comamn:"img/icons/hot.svg"},
                    {name: "Hoa Hồng",comamn:"img/icons/hot.svg"},
                    {name: "Hoa Tulip",comamn:"img/icons/hot.svg"},
                    {name: "Anh Đào",comamn:"img/icons/hot.svg"},
                    {name: "Hoa Sen",comamn:"img/icons/hot.svg"},
                    {name: "Hoa Sung",comamn:"img/icons/hot.svg"},
                    {name: "Hướng dương",comamn:"img/icons/hot.svg"},
                    {name: "Cải dầu",comamn:"img/icons/hot.svg"},
                    {name: "Lan Rừng",comamn:"img/icons/hot.svg"},
                    {name: "Trúc",comamn:"img/icons/hot.svg"},
                    {name: "Đào",comamn:"img/icons/hot.svg"},
                    {name: "Mai",comamn:"img/icons/hot.svg"},
                    {name: "Mai trắng",comamn:"img/icons/hot.svg"},
                    {name: "Mai đỏ",comamn:"img/icons/hot.svg"},
                    {name: "Bỉ ngạn hoa",comamn:"img/icons/hot.svg"},
                    {name: "Hoa Lan",comamn:"img/icons/hot.svg"},
                    {name: "Hoa Lan",comamn:"img/icons/hot.svg"},
                    {name: "Hoa Lan",comamn:"img/icons/food.svg"},
                    {name: "Hoa Lan",comamn:"img/icons/hot.svg"},
           				{name: "Hoa Lan",comamn:"img/icons/hot.svg"}] 
   			},
        { id: 2, name: 'Box 2',comman: "hah3 aha",
      		values: [{name: "Hoa hong",comamn:"img/icons/food.svg"},
                  {name: "Hoa hong",comamn:"img/icons/food.svg"},
                  {name: "Hoa hong",comamn:"img/icons/food.svg"},
                  {name: "Hoa hong",comamn:"img/icons/food.svg"},
                  {name: "Hoa hong",comamn:"img/icons/food.svg"},
           				{name: "Hoa hong",comamn:"img/icons/food.svg"}]  },
        { id: 3, name: 'Box 3',comman: "hah3 aha",
      		values: [{name: "Hoa Cuc",comamn:"img/icons/food.svg"},
           				{name: "Hoa Cuc",comamn:"img/icons/food.svg"}]  },
        { id: 4, name: 'Box 4',comman: "hah3333  aha",
      		values: [{name: "Hoa Cuc",comamn:"img/icons/food.svg"},
           				{name: "Hoa Cuc",comamn:"img/icons/food.svg"}]  },
        { id: 5, name: 'Box 5',comman: "hahaha hahah haha",
      		values: [{name: "Hoa Cuc",comamn:"img/icons/food.svg"},
           				{name: "Hoa Cuc",comamn:"img/icons/food.svg"},
           				{name: "Hoa Cuc",comamn:"img/icons/food.svg"}]  }
      ];
    }, 20);
  };
});
/* control light pupm*/