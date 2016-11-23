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
      removeBadChars: function(target, regx){ // Remove any bad character that doesn't match the regex from the form input fields selected
        $(target).on("keyup", function(){
          $(this).val($(this).val().replace(regx, ''));
        });
      },


      /*
       * Next function is used to validate that the user does not exceed the maximum input limit set.
       * @params: param1(class name of the filds you want to check)
       */
      limitUserInput : function(fieldsClassName) {
        var targetedInputs = $(fieldsClassName);
        var nbrBox = $(".remaining");
        for (var i = 0, conspan = targetedInputs.length; i < conspan; i+=1 ){
          (function(index){
            var maxNbr = parseInt(targetedInputs.eq(index).attr("maxlength"));
            var nbr = maxNbr;
            targetedInputs.eq(index).blur(function(){nbrBox.eq(index).slideUp("slow");}).focus(function(){
              //nbrBox.hide();
              nbrBox.eq(index).slideDown("slow");
              var curr_text = $.trim(targetedInputs.eq(index).val()).length;
              nbr = maxNbr - curr_text;
              nbrBox.eq(index).text(nbr);
              targetedInputs.eq(index).on("keyup", function(){
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
      validateForm: function(submitButton, formField_selector){
        $(submitButton).on("click", function (evt) {
          //simple validation at client's end
          //loop through each fields and we simply change border color to red for invalid fields
          $(formField_selector).each(function () {
            $(this).css('border-color', '');
            if ($.trim($(this).val())) { //if this field is not empty
              proceed = true;
            }else{
              $(this).css('border-color', 'red'); //change border color to red
              $(this).on("keyup", function () {  // If user starts typing, remove red border color
                $(this).css('border-color', '');
              });
              proceed = false;                 //Set proceed to false, so that form should not be submitted.
              return false;
            }

            //+++++++++++++++  check invalid email  +++++++++++++++++++++++++++++++++++++
            var email_reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if ($(this).attr("type") === "email" && !email_reg.test($.trim($(this).val()))) {
              $(this).css('border-color', 'red'); //change border color to red
              $(this).on("keyup", function () {
                $(this).css('border-color', '');
              });
              proceed = false;                 //If email is not valid, set proceed to false
              return false;
            }else{proceed = true;}
          });
          evt.preventDefault(); //Prevent the default form submission so that Ajax should take over. Deactivate if not needed.
          // If the javascript engine runs the above steps without changing the value of proceed to false, then something resonable was typed in by user.
          if(proceed){console.log('It is now okay to submit');}
        });

        return proceed;  // The final value is the proceed flag, if it is true, proceed to next step.
      }

    };
  };



