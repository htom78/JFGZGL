'use strict';

describe('angularFullstackApp',function() {

    describe("IndexCtrl", function() {
        var scope, ctrl, $httpBackend;

        beforeEach(module('angularFullstackApp'));
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('/api/enter').
                respond();

            scope = $rootScope.$new();
            ctrl = $controller('IndexCtrl', {$scope: scope});
        }));

//        it("example",function() {
//
//            expect(scope.phones).toBeUndefined();
//            $httpBackend.flush();
//
//            expect(scope.phones).toEqual([{name: 'Nexus S'},
//                {name: 'Motorola DROID'}]);
//        });

        it("test data from api",function() {

            expect(scope.phones).toBeUndefined();
            $httpBackend.flush();

            expect(scope.phones).not.toBeTruthy();
        });


    });
})



