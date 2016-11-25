'use strict';

var skills_app = require('angular').module('mainPages.skills');
skills_app.controller("SkillsdemoCtrl", ["$scope", "$stateParams", "limitToFilter", require('./skills-demo-controller')]);