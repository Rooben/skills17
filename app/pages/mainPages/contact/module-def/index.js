'use strict';

var $ = require('jquery');
var angular = require('angular');
/**
 * @ngdoc function
 * @name rolandApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the rolandApp
 */
angular.module('mainPages.contact', [])
    .config(function($stateProvider) {
        $stateProvider
        // Contact PAGE =================================
            .state('contact', {
                url: '/contact',
                views: {
                    '@': {
                        templateUrl: 'pages/mainPages/contact/contact.html',
                        controller: 'ContactCtrl'
                    },
                    'siteRoot@': {
                        templateUrl: 'pages/mainPages/sideNav.html'
                    }
                }
            })
    })

    .controller('ContactCtrl', ['$scope', 'generalValidator', function ($scope, generalValidator) {
        var proceedValue;

        angular.element(document).ready(function(){
            var inputFieldsSet;
            var textAreaField;
            var emailFormat = 'bad';
            $('#feedbkLoader').hide();
            $('.remaining').hide();
            $('#contact_submit').on("click", function(){
                var input_flds = $('#contactFrm').find('input[required="true"]');
                var textarea_fld = $('#contactFrm').find('textarea[required="true"]');
                var email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                inputFieldsSet = generalValidator.validateForm(input_flds);
                textAreaField = generalValidator.validateForm(textarea_fld);

                if(email_regex.test($('#con_email').val()) === false){
                    $('.error_msg_email').css({color: 'red', display: 'inline-block'}).text('Please enter a valid email address.');
                    emailFormat = 'bad';
                }else{
                    emailFormat = 'good';
                }


                if(
                    inputFieldsSet.con_fname === true &&
                    inputFieldsSet.con_lname === true &&
                    inputFieldsSet.con_email === true &&
                    textAreaField.con_message === true &&
                    emailFormat === 'good'
                ){
                    //Ajax call will come in here, passing in all the input values and on success, display the following message.
                    $('#feedbkText').text('Thanks. Your message has been processed.');
                    $('#reset_form').trigger('click');
                    $('.error_msg').text('').css('display', 'none');
                }
                else{return false;}
            });
        });






        /*++++++++++++++++++++++++++++++++++++  FORM VALIDATION  ++++++++++++++++++++++++++++++++++++++*/
        // UTILITY FUNCTION CALLS :
        // These Utility functions are in the generalValidator service in the shared/serives directory

        /*
         * Next function simply contains a selection of class selectors to apply the removeBadChars(which defined as private property above this object)
         * to, and specify the regular expression for them as parameters.
         */
        generalValidator.removeBadChars(".pureText", /[^a-z0-9]*/gi); // Allow only alpha numeric characters in all inputs with class pureText
        generalValidator.removeBadChars(".pureEmail", /[^a-z0-9@_\.\-]*/gi); // Allow only alpha numeric characters, @ _ . -  in all inputs with class pureEmail @.-_
        generalValidator.removeBadChars(".pureComment", /[^a-z0-9'\._ \?\-]*/gi); // Allow only alpha numeric characters, ' . _ space ? - in all inputs with class pureComment

        /*
         * The next line validates form input fields checking the max and min length
         * @params : param1(Pass in the class selector for all the fields that have to be filtered and validated)
         */
        generalValidator.limitUserInput('.contact_inpt');

        /*
         * The next line of code validates if the form is valid.
         * @params : param1(JQuery submit button id selector), param2(All required form fields must have "required" set to true and selected through the form id selector)
         * @params : param3(The third parameter is selector for the the text area if available)
         */
        proceedValue = generalValidator.validateForm('#contact_submit', 'input[required="true"]');   // #contactFrm textarea[required=true]


        //If the proceed value from the service is true, then proceed

/*

        if(proceedValue){
            $("#feedbkLoader").show("slow"); //show the loader.
            var res = $http({
                url: '/pages/mainPages/contact/verify.php',
                method: 'POST',
                data: {
                    user_first : $("#con_fname").val(),
                    user_last  : $("#con_lname").val(),
                    user_email : $("#con_email").val(),
                    user_comnt : $("#con_message").val(),
                    spamBot_trick : $("#spamControl").val()
                }
            });

            res.success(function(data){
                $("#feedbkLoader").hide();
                if (data.e_msg) {
                    $('#feedbkText').removeClass().addClass("error");
                    $('#feedbkText').html(data.e_msg);
                }
                if (data.s_msg) {
                    $('#feedbkText').removeClass().addClass("success");
                    $('#feedbkText').html(data.s_msg);
                }
            }).error(function(error){
                $("#feedbkLoader").hide();
                $('#feedbkText').removeClass().addClass("error");
                // $('#feedbkText').html("Sorry, your details can not be submitted now, due to maintenance. Please try later.");
                $('#feedbkText').removeClass().addClass("neutral");
                $('#feedbkText').html(data.e_msg); /* For Debuging only! */
          /*  });


        } //End of if proceed

        */
    }]);