angular.module('imApp')

	.controller('mainViewCtrl', function($scope, mflySearch){
		
		mflySearch.search('@Featured').then(function(data){
			console.log("@Featured = ", JSON.stringify(data, null, 2));
			$scope.featured = data;
		})		

		mflySearch.search('@TopLevelSales').then(function(data){
			console.log("@TopLevelSales = ", JSON.stringify(data, null, 2));
			$scope.topLevelSales = data;
		})

		$scope.openFolder = function(id) {
			mflyCommands.openFolder(id);
		}

		$scope.taglineImage = 'images/inside_mediafly_logo.png';

		$scope.openMyItems = function() {
			mflyCommands.getFolder("__root__")
				.done(function(data){
					console.log("clicked!", data);
					var myItemsId = data[data.length - 1]["id"];
					mflyCommands.openFolder(myItemsId);
				});
		}
	});