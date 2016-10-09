var app = angular.module("myapp", ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/moviedetails/:id', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })

      .when('/searchresults', {
        templateUrl: 'partials/results.html',
        controller: 'MainController'
      })
});


//  MAIN CONTROLLER

app.controller('MainController', function ($scope, $http, $location, $timeout) {

$scope.pageClass = 'results';

  $scope.searchByTitle = function() {
    $http.get("https://www.omdbapi.com/?s=" + $scope.searchterm  + "&tomatoes=true&plot=full").then(function(results){
      $scope.searchresults = results.data;
    });
  };

$scope.passonvariable = function(URL) {
$scope.newURL = "moviedetails/" + URL;
}

$scope.gothere = function() {
   $timeout($scope.gothere1, 500);
}

$scope.gothere1 = function() {
   $location.url($scope.newURL);
}

});



//  SHOW CONTROLLER

app.controller('ShowController', function ($scope, $http, $routeParams) {
$scope.pageClass = 'moviedetails';
  $http.get("https://www.omdbapi.com/?i=" + $routeParams.id  + "&tomatoes=true&plot=full").then(function(results){
    $scope.movieinfo = results.data;
  });
});

goto = function(){
   window.location.replace("/#/searchresults");
}

gotohomepage = function(){
   window.location.replace("http://www.workyardapp.jeanbaptistebailleux.com");
}


//  ANIMATION

animation1 = function() {
  if(window.innerHeight >= window.innerWidth){
    var searchbar = document.getElementById("search-bar");
    var m = document.getElementById("m");
    var searchform = document.getElementById("searchform");
    var logo = document.getElementsByClassName("logo");

    TweenLite.to(searchbar, 1.5, {height:0});
    TweenLite.to(m, 0, {opacity: 0});
    TweenLite.to(searchform, 0, {opacity: 0});
    TweenLite.to(logo, 0, {opacity: 0});
  }

  if(window.innerHeight < window.innerWidth){
    var searchbar = document.getElementById("search-bar");
    var m = document.getElementById("m");
    var searchform = document.getElementById("searchform");
    var logo = document.getElementsByClassName("logo");
    var searchicon = document.getElementsByClassName("searchicon");
    var search = document.getElementById("search");

    TweenLite.to(searchbar, 1, {height:100});
    TweenLite.to(m, 1, {top:20, left: 100, height: 60});
    TweenLite.to(searchform, 1, {top:25, left: 250, height: 50, width: 300, fontSize: 10});
    TweenLite.to(search, 1, {height: 50, width: 300, fontSize: 15});
    TweenLite.to(searchicon, 0.3, {height: 50, width: 50, fontSize: 20, marginLeft: 280});
    TweenLite.to(logo, 0.1, {delay: 0.8, opacity: 0});
  }
}