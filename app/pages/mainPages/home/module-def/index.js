'use strict';

var $ = require('jquery');
var angular = require('angular');
require('gsap');
/**
 * @ngdoc function
 * @name rolandApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the rolandApp
 */
angular.module('mainPages.home', [])
    .config(function ($stateProvider) {
        $stateProvider
        // HOME STATES  ===============================
            .state('home', {
                url: '/',
                views: {
                    '@': {
                        templateUrl: 'pages/mainPages/home/home.html',
                        controller: 'HomeCtrl'
                    },
                    'siteRoot@': { //This means, display these in the ui-view in index.html(no name after the @), called siteRoot
                        templateUrl: 'pages/mainPages/sideNav.html'
                    }
                }
            });
    })
    .controller('HomeCtrl', function ($scope, $interval, myGsapTo) {
        var count = 0;
        var finalFontSize;
        var topOffset;
        var leftOffset;
        var screenWidth = document.documentElement.clientWidth;
        var webTextArray = ['sites', 'applications', 'browsers', 'development', 'designs', 'servers', 'solutions', 'technologies', 'clients', 'DEVELOPER'];

        function slideWebTextDown() {
            resetAnimationPos();
            $scope.animationText = webTextArray[count];
            count++;
            topOffset = screenWidth < 545 ? '115px' : '197px'; // Animate the text different for small screens than for large screens.
            leftOffset = screenWidth < 545 ? '47px' : '110px';  //Set the left animation origin for small and for large screens.
            myGsapTo.runAnimation('.webtext', 0.5, {top: topOffset, left: leftOffset, ease: Sine.easeOut}); //Animate the text position from top to bottom
            finalFontSize = screenWidth < 545 ? '1.9em' : '2.8em'; // A font size for small screens and another for large screens.
            myGsapTo.runAnimation('.webtext li', 0.5, {fontSize: finalFontSize}); //Animate the font-size from small to big
            if (count === webTextArray.length) {
                $scope.introText = 'I am a :';
            } else {
                $scope.introText = 'I work on :';
            }
        }

        function runTask() {
            $interval(slideWebTextDown, 3000, webTextArray.length);
        }

        function resetAnimationPos() {
            $('.webtext').css('top', '80px');
            $('.webtext').find('li').css('fontSize', '0.2em');
        }

        runTask();
    });