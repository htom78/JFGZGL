angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.shangji = [{
        "title": "上机登记",
        "link": "shangji"
    }, {
        "title": "上机记录",
        "link": "shagnji/shagnjiqk"
    }];

    $scope.qian = [{
        "title": "签到",
        "link": "qiandao"
    }, {
        "title": "签离",
        "link": "qianli"
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