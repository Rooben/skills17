'use strict';
/**
 * @ngdoc function
 * @name rolandApp.mainPages:carouselAbout directive
 * @description
 * # carouselAbout directive
 * A directive of the rolandApp
 */
module.exports = function(carouselData, myGsapFromTo) {
  return {
    restrict: 'EA',
    scope: {
      qualities: '=carouselAbout'
    },
    replace: true,
    templateUrl: 'pages/mainPages/about/aboutCarousel.html',
    link: function (scope, elm) {
      var count = 0;
      scope.count = 0;
      scope.persImagesSource = carouselData.baseImages[0];
      scope.titleNumber = 0;
      //scope.persImagesSource = carouselData.baseImages[count];
      scope.showQualities = function (num) {
        //Since the above function is called from the view, we pass in a positive num to increment counter by 1, or negative number to decrement by 1
        if (num > 0) {
          count++;
        } else {
          count--;
        }
        //make carousel to re-cycle when index number ends
        if (count > carouselData.details.length - 1) {
          count = 0;
        }
        else if (count < 0) {
          count = carouselData.details.length - 1;
        }

        //loop through the factory service data and make them available to the view through the scope.
        for (var i = 0, len = carouselData.details.length; i < len; i += 1) {
          scope.qualities = carouselData.details[count];
          scope.count = count;
          slideTextBoxIn(num);
          scope.titleNumber = count;
          animatePersonalityImages(count);
        }
      };

      scope.qualityCategories = carouselData.titles; //provides the titles

      // The following function is required by direct click on the carousel disks in order to navigate the slides.
      scope.loadText = function (val) {  //val is the index number passed from the directive scope, and plays same role as count.
        count = val;
        scope.qualities = carouselData.details[val];
        scope.count = val;
        scope.titleNumber = val;
        slideTextBoxIn();
        animatePersonalityImages(val);
      };

      //This function doesn't only change the images(src), but also animates the opacity of the image element
      function animatePersonalityImages(index) {
        myGsapFromTo.runAnimation('#persImages', 1, {opacity: 0}, {opacity: 1});
        scope.persImagesSource = carouselData.baseImages[index];
      }

      //package together the series of animations to be run in one function
      function slideTextBoxIn(direction) {
        direction = direction || null;
        if (direction === 1) {
          myGsapFromTo.runAnimation('.aboutMeText', 0.5, {left: '-500px'}, {left: '10%', ease: Sine.easeOut});
        }
        else {
          myGsapFromTo.runAnimation('.aboutMeText', 0.5, {left: '100%'}, {left: '10%', ease: Sine.easeOut});
        }
        myGsapFromTo.runAnimation('.aboutMeText', 0.5, {color: '#a5a5a5'}, {delay: 0.3, color: '#ffffff'});
      }
    }
  };
};