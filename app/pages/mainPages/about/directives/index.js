'use strict';

var about_app = require('angular').module('mainPages.about');
about_app.directive("carouselAbout", ["carouselData", "myGsapFromTo", require('./carouselAbout-directive')]);