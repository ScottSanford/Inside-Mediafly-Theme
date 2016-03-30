angular.module('customThemeApp').factory("mfly", function($q) {
    
    return  {
            searchFeatured: function() {
                var deferred = $q.defer();

                mflyCommands.search('@Featured')
                    .done(function(data){
                        deferred.resolve(data);
                    });
                    
                return deferred.promise;
            }, 

            searchTopLevelSales: function() {
                var deferred = $q.defer();

                mflyCommands.search('@TopLevelSales')
                    .done(function(data){
                        deferred.resolve(data);
                    });
                    
                return deferred.promise;
            }
    }


});