//machines service used for machines REST endpoint
angular.module('mean.machines').factory("Machines", ['$resource', function($resource) {
    return $resource('machines/:fix', {
    }, {
        update: {
            method: 'PUT'
        },
        goPost: {
            method: 'POST',
            params:{fix:'fix'}
        },
        goPut: {
            method: 'PUT',
            params:{fix:'fix'}
        }
    });
}]);
