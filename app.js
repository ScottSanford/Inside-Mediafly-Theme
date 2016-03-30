angular.module('customThemeApp',[
		'ngRoute'
	])

	.config(function ($routeProvider, $compileProvider) {
			$compileProvider.imgSrcSanitizationWhitelist(/^(mfly:\/\/data\/image|https:\/\/|http:\/\/)/);	
			$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|mfly):/);        
	        $routeProvider
	        	.when('/', {
	        		templateUrl: "customtheme/customtheme.html",
	        		controller: 'CustomThemeCtrl'   		
	        	})
	            .otherwise({
	                redirectTo: '/'
	            });
	});