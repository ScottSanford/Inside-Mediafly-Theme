angular.module('imApp')

	.controller('mainViewCtrl', function($scope, mflySearch, $location){
		
		mflySearch.search('@Featured').then(function(data){
			$scope.featured = data;
			console.log(data);
		});	

		mflySearch.search('@TopLevelSales').then(function(data){
			$scope.topLevelSales = data;
		});


		$scope.openFolder = function(id) {
			mflyCommands.openFolder(id);
		}

		$scope.taglineImage = 'images/inside_mediafly_logo.png';

		$scope.openMyItems = function() {
			mflyCommands.openFolder('f7e484d0e3ee4e87901ee34fe2fcbe1aproductmyitems');
		}


 
	});