'use strict';
/**
 * @ngdoc function
 * @name rolandApp.mainPages:greensockTo-service
 * @description
 * # mainPages:greensockTo-service
 * A service of the rolandApp
 */
module.exports = function (){
    require('gsap');
    return {
        runAnimation: function (animationTarget, duration, properties) {
            TweenLite.to(animationTarget, duration, properties);
        }
    };
};