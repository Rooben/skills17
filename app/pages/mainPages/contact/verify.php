 <?php
                // Turn off all error reporting
                error_reporting(0);
                
                //for spam prevention - email spliting / hiding
                $myFristPart = "rooben";
                $mySecondPart = "rogers";
 

                $admin_mail =    $myFristPart."@".$mySecondPart.".com";
                $subject  =    "Your portfolio message";
                
                $return = array();
                $return['error'] = true;
                $return['e_msg'] = '';

                    //Sanitize fist name
                    if ($_POST['user_first'] !== "") {
                        $filtered_fn = filter_var($_POST['user_first'], FILTER_SANITIZE_STRING);
                        if ($filtered_fn === ""){
                            $return['e_msg'] .= 'Please enter a valid first name.<br/>';
                        }else {
                            $firstName = $filtered_fn;
                            if(strlen($firstName)> 25){
                                $return['e_msg'] .= 'First name should be max 25 characters.<br/>';
                            }
                        }
                    } else {
                        $return['e_msg'] .= 'Please enter your first name.<br/>';
                    }



                    //Sanitize last name
                    if ($_POST['user_last'] !== "") {
                        $filtered_ln = filter_var($_POST['user_last'], FILTER_SANITIZE_STRING);
                        if ($filtered_ln === ""){
                            $return['e_msg'] .= 'Please enter a valid last name.<br/>';
                        }else {
                            $lastName = $filtered_ln;
                            if(strlen($lastName)> 25){
                                $return['e_msg'] .= 'last name should be max 25 characters.<br/>';
                            }                            
                        }
                    } else {
                        $return['e_msg'] .= 'Please enter your last name.<br/>';
                    }



                
                    //Sanitize and validate email
                    if ($_POST['user_email'] !== "") {
                        $clean_email = filter_var($_POST['user_email'], FILTER_SANITIZE_EMAIL);
                        if (!filter_var($clean_email, FILTER_VALIDATE_EMAIL)) {
                            $return['e_msg'] .= "$clean_email is <strong>NOT</strong> a valid email address.<br/>";
                        } else{
                            $visitor_email = $clean_email;
                            if(strlen($visitor_email) > 40){
                                $return['e_msg'] .= 'Email should be max 40 characters.<br/>';
                            }                             
                        }
                    } else {
                        $return['e_msg'] .= 'Please enter your email address.<br/>';
                    }                

                    
                    //Sanitize the message
                    if ($_POST['user_comnt'] !== "") {
                        $filtered_comnt = filter_var($_POST['user_comnt'], FILTER_SANITIZE_STRING);
                        if ($filtered_comnt === ""){
                            $return['e_msg'] .= 'Please enter valid characters in the message.<br/>';
                        }else {
                            $comments = $filtered_comnt;
                            if(strlen($comments)> 200){
                                $return['e_msg'] .= 'Message should be max 200 characters.<br/>';
                            }                             
                        }
                    } else {
                        $return['e_msg'] .= 'Please enter your message.<br/>';
                    }                     

                    if(isset($_POST['spamBot_trick']) && $_POST['spamBot_trick'] == ''){
                            if($return['e_msg'] === ""){  // If there is no error from above, all is good.
                                $message = "Details from the user :\n\n";
                                $message .= "First Name :".$firstName."\n";
                                $message .= "Last Name :".$lastName."\n";
                                $message .= "Email :".$visitor_email."\n\n";
                                $message .= "User Message :\n".$comments."\n";
                                
                                
                                //headers for the return emails
                                $headers = 'Content-Type: text/plain; charset=utf-8';
                                //I did not put any from email because to avoid errors, the email should be same as my domain name.
                                // If I end up configuring my domain email, then the header should be created as such: $headers = "From: webmaster@example.com\r\n";
                                $toEmail = filter_input(INPUT_POST, $visitor_email, FILTER_VALIDATE_EMAIL);
                                if ($toEmail) {
                                   $headers .= "\r\nReply-To: $toEmail";
                                }
                                
                                
                                $success =  mail($admin_mail, $subject, $message, $headers);
                                if ($success){
                                    $return['error'] = false;
                                    $return['s_msg'] = 'Thanks very much for contacting me. <br/> I will be in touch with you shortly.';                        
                                }else {
                                    $return['error'] = true;
                                    $return['e_msg'] .= 'Sorry, your mail can not be sent, try later';
                                }
                            }
                    }
                
                echo json_encode($return); exit;



  
