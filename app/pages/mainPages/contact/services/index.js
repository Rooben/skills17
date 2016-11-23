'use strict';

var contacts_app = require('angular').module('mainPages.contact');
contacts_app.factory('generalValidator', require('./formValidation-service'));