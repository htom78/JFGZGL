angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.machines = [{
        "title": "上机登记",
        "link": "machines"
    }, {
        "title": "上机情况",
        "link": "machines/machinesS"
    }];

    $scope.sign = [{
        "title": "签到",
        "link": "signIn"
    }, {
        "title": "签离",
        "link": "signOut"
    }];

    $scope.articles = [{
        "title": "日志",
        "link": "articles"
    }, {
        "title": "写日志",
        "link": "articles/create"
    }];
    
    $scope.isCollapsed = false;
}]);