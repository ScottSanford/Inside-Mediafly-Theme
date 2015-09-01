angular.module('imApp').factory("mflySearch", function($q) {
    return  {
            search: function(term) {
                var deferred = $q.defer();
                mflyCommands.search(term)
                    .done(function(data, status){
                        deferred.resolve(data);
                        console.log(status);
                    })
                    return deferred.promise;
            }
    }


});