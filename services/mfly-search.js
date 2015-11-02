angular.module('imApp').factory("mflySearch", function($q) {
    return  {
            search: function(term) {
                var deferred = $q.defer();
                mflyCommands.search(term)
                    .done(function(data, status){
                        deferred.resolve(data);
                    })
                    .fail(function(error, status){
                        console.log('There was an error that happened!', error, status);
                    })
                    return deferred.promise;
            }
    }


});