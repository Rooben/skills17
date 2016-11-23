'use strict';

var about_app = require('angular').module('mainPages.about');
about_app.factory('carouselData', require('./carouselData-service'));
about_app.factory('myGsapFromTo', require('./greensockFromTo-service'));
