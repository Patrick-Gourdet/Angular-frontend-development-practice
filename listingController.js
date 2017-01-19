angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
	$scope.listings.push($scope.newListing);
	$scope.newListing = '';
	
	};
    $scope.deleteListing = function(index) {
	$scope.listings.splice(index, 1);
	$scope.selectedIndex = -1;
	$scope.detailedInfo = ' ';
	};
    $scope.showDetails = function(index) {
	$scope.detailedInfo = $scope.listings[index];
	$scope.selectedIndex = index;
	};
  }
]);
