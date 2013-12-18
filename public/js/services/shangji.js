//shangji service used for shangji REST endpoint
angular.module('mean.shangji').factory("Shangji", ['$resource', function($resource) {
    return $resource('/shangji');
}]);
