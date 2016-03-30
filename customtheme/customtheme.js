angular.module('customThemeApp')

	.controller('CustomThemeCtrl', function($scope, $location, mfly){

		$scope.myItems = 'common/img/myItems.png';
		
		mfly.searchFeatured().then(function(data){

			$scope.featured = data;
			
			mfly.searchTopLevelSales().then(function(result){
				
				$scope.topLevelSales = result;

			});
		});


		$scope.openFolder = function(id) {
			mflyCommands.openFolder(id);
		};

		$scope.openMyItems = function() {
			mflyCommands.openFolder('f7e484d0e3ee4e87901ee34fe2fcbe1aproductmyitems');
		};

 
	});