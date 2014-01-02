//situation service used for machines REST endpoint
angular.module('mean.situation').factory("Situation", ['$resource', function($resource) {
    return $resource('situation', {
    }, {
    });
}]);