'use strict';
/**
 * @ngdoc function
 * @name rolandApp.mainPages:greenSock animation service
 * @description
 * # greenSock animation service
 * A directive of the rolandApp
 */
module.exports = function () {
    return {
        runAnimation: function (animationTarget, duration, properties_from, properties_to) {
            TweenLite.fromTo(animationTarget, duration, properties_from, properties_to);
        }
    };
};