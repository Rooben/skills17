'use strict';

/**
 * @ngdoc function
 * @name rolandApp.service:Form validation service
 * @description
 * # This is used to validate all the forms on this app (Front-end validation only)
 * Service of the rolandApp
 */
 module.exports = function() {
   //require('ui-bootstrap');
   require('jquery');
    var proceed = false; //Private variable
    return {
      // Initial validation which checks if the user is entering the right characters

      /*
       * Next function is used to remove bad characters from form fields, applying regular expression to them
       * @params: param1(class selectors to filter), param2(regular expression to be applied to the selected field)
       */
      removeBadChars: function (target, regx) { // Remove any bad character that doesn't match the regex from the form input fields selected
        $(target).on("keyup", function () {
          $(this).val($(this).val().replace(regx, ''));
        });
      },


      /*
       * Next function is used to validate that the user does not exceed the maximum input limit set.
       * @params: param1(class name of the filds you want to check)
       */
      limitUserInput: function (fieldsClassName) {
        var targetedInputs = $(fieldsClassName);
        var nbrBox = $(".remaining");
        for (var i = 0, conspan = targetedInputs.length; i < conspan; i += 1) {
          (function (index) {
            var maxNbr = parseInt(targetedInputs.eq(index).attr("maxlength"));
            var nbr = maxNbr;
            targetedInputs.eq(index).blur(function () {
              nbrBox.eq(index).slideUp("slow");
            }).focus(function () {
              //nbrBox.hide();
              nbrBox.eq(index).slideDown("slow");
              var curr_text = $.trim(targetedInputs.eq(index).val()).length;
              nbr = maxNbr - curr_text;
              nbrBox.eq(index).text(nbr);
              targetedInputs.eq(index).on("keyup", function () {
                curr_text = $.trim(targetedInputs.eq(index).val()).length - 1;
                nbr = maxNbr - curr_text;
                nbr--;
                if (nbr < 0) {
                  nbr = 0;
                }
                nbrBox.eq(index).text(nbr);
              });
            });
          })(i);
        }
      },


      // Now check if the user filled out all the fields successfully
      validateForm: function (formField_selector) {
        var formVerified = {};
        $(formField_selector).each(function(){
          var elemId = $(this).attr('id');
          if ($.trim($(this).val()) == '') { //if this field is not empty
            $(this).css('border-color', 'red');
            $(this).parent().find('.error_msg').text('This field can not be left blank!');
            $(this).parent().find('.error_msg').css({color: 'red', display: 'inline-block'});
            $(this).on('keyup', function(){
              $(this).css('border-color', '');
              $(this).parent().find('.error_msg').hide();
            });
            formVerified[elemId] = false;
          }
           else{
            formVerified[elemId] = true;
          }
        });

        return formVerified;
      }

    };
  };



