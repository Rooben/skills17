'use strict';

var skills_app = require('angular').module('mainPages.skills');
skills_app.directive('barChart', require('./barChart-directive'));
skills_app.directive('histogram', require('./histogram-directive'));
skills_app.directive('linegraph', require('./lineGraph-directive'));
skills_app.directive('pieChart', require('./pieChart-directive'));

