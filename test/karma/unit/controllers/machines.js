(function() {
    'use strict';

    // Machines Controller Spec
    describe('MEAN controllers', function() {

        describe('MachinesController', function() {

            // The $resource service augments the response object with methods for updating and deleting the resource.
            // If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
            // the responses exactly. To solve the problem, we use a newly-defined toEqualData Jasmine matcher.
            // When the toEqualData matcher compares two objects, it takes only object properties into
            // account and ignores methods.
            beforeEach(function() {
                this.addMatchers({
                    toEqualData: function(expected) {
                        return angular.equals(this.actual, expected);
                    }
                });
            });

            // Load the controllers module
            beforeEach(module('mean'));

            // Initialize the controller and a mock scope
            var MachinesController,
                scope,
                $httpBackend,
                $routeParams,
                $location;

            // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
            // This allows us to inject a service but then attach it to a variable
            // with the same name as the service.
            beforeEach(inject(function($controller, $rootScope, _$location_, _$routeParams_, _$httpBackend_) {

                scope = $rootScope.$new();

                MachinesController = $controller('MachinesController', {
                    $scope: scope
                });

                $routeParams = _$routeParams_;

                $httpBackend = _$httpBackend_;

                $location = _$location_;

            }));

            it('$scope.find() should create pc status list ' +
                'fetched from XHR', function() {

                // test expected GET request
                $httpBackend.expectGET('/machines').respond([{
                    id : 1,
                    status: 'free'
                }, {
                    id : 2,
                    status: 'free'
                }, {
                    id : 3,
                    status: 'free'
                }, {
                    id : 4,
                    status: 'free'
                }, {
                    id : 5,
                    status: 'free'
                }]);

                // run controller
                scope.find();
                $httpBackend.flush();

                // test scope value
                expect(scope.pcStatuses).toEqual([{
                    id : 1,
                    status: 'free'
                }, {
                    id : 2,
                    status: 'free'
                }, {
                    id : 3,
                    status: 'free'
                }, {
                    id : 4,
                    status: 'free'
                }, {
                    id : 5,
                    status: 'free'
                }]);
            });

        })
    })

} ());