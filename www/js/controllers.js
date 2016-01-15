var app = angular.module('caffeinehit.controllers', []);

app.controller("YelpController", function ($scope, YelpService) {
	$scope.yelp = YelpService;
	$scope.doRefresh = function(){
		//REFRESH AND HIDE THE  LOADING ICON
		$scope.yelp.refresh().then(function(){
			$scope.$broadcast('scroll.refreshComplete');
		});
	};

	$scope.loadMore = function(){
		//LOAD MORE DATA
		$scope.yelp.next().then(function(){
			$scope.$broadcast('scroll.infiniteScrollComplete')
		});
	}

	$scope.getDirections= function(cafe){
		console.log("Getting Directions");
		var destination = [
			cafe.location.coordinate.latitude,
			cafe.location.coordinate.longitude
		];
		var source = [
			$scope.yelp.lat,
			$scope.yelp.lon
		];
		launchnavigator.navigate(destination,source);
	}
});
