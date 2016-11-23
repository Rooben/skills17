'use strict';
var angular = require('angular');

angular.module('rolandApp.mainPages', [
    'mainPages.about',
    'mainPages.contact',
    'mainPages.home',
    'mainPages.projects',
    'mainPages.skills'
])

.controller('SkillsCtrl', function ($scope) {
    $(function () {
        $scope.demoMessage = $('.mobileMainMenu').css('display') === 'block' ? 'Click on the "Demos" button' : 'Use the left pane';
        /*$scope.demoMessage = 'Use the left pane';*/
        $scope.firstName = "Roland";
    });
});

require('./about');
require('./contact');
require('./home');
require('./projects');
require('./skills');
