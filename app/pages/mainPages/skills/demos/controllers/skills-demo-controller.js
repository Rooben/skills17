'use strict';

/**
 * @ngdoc function
 * @name rolandApp.controller:skillsdemoCtrl
 * @description
 * # skillsdemoCtrl
 * Controller of the rolandApp
 */
module.exports = function ($scope, $stateParams, limitToFilter) {
    $scope.id = $stateParams.id;
    $scope.graph = {
        type: $stateParams.id
    };

    $scope.ideas = [
        ['ideas1', 1],
        ['ideas2', 8],
        ['ideas3', 5]
    ];
    $scope.limitedIdeas = limitToFilter($scope.ideas, 2);
};