angular.module('imApp',[
		'ngRoute'
	])

	.config(function ($routeProvider, $compileProvider) {
			$compileProvider.imgSrcSanitizationWhitelist(/^(mfly:\/\/data\/image|http:\/\/)/);	
			$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|mfly):/);        
	        $routeProvider
	        	.when('/', {
	        		templateUrl: "views/mainview.html",
	        		controller: 'mainViewCtrl'   		
	        	})
	            .otherwise({
	                redirectTo: '/'
	            });
	})