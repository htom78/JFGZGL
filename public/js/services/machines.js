//machines service used for machines REST endpoint
angular.module('mean.machines').factory("Machines", ['$resource', function($resource) {
    return $resource('machines/:param', {
    }, {
        update: {
            method: 'PUT'
        },
        goPost: {
            method: 'POST',
            params:{param:'fix'}
        },
        goPut: {
            method: 'PUT',
            params:{param:'fix'}
        }
    });
}]);
