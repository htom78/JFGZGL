//machines service used for machines REST endpoint
angular.module('mean.machines').factory("Machines", ['$resource', function($resource) {
    return $resource('machines/:useId', {
        useId: '@_Id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
