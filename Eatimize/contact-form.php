<?php
if(isset($_POST['submit']))
{

$message=
'Full Name:	'.$_POST['fullname'].'<br />
Subject:	'.$_POST['subject'].'<br />
Phone:	'.$_POST['phone'].'<br />
Email:	'.$_POST['emailid'].'<br />
Comments:	'.$_POST['comments'].'
';
    require "phpmailer/class.phpmailer.php"; //include phpmailer class

    // Instantiate Class
    $mail = new PHPMailer();

    // Set up SMTP
    $mail->IsSMTP();                // Sets up a SMTP connection
    $mail->SMTPAuth = true;         // Connection with the SMTP does require authorization
    $mail->SMTPSecure = "ssl";      // Connect using a TLS connection
    $mail->Host = "smtp.gmail.com";  //Gmail SMTP server address
    $mail->Port = 465;  //Gmail SMTP port
    $mail->Encoding = '7bit';

    // Authentication
    $mail->Username   = "mahtestmail@gmail.com"; // Your full Gmail address
    $mail->Password   = "gaddanarbast"; // Your Gmail password

    // Compose
    $mail->SetFrom($_POST['emailid'], $_POST['fullname']);
    $mail->AddReplyTo($_POST['emailid'], $_POST['fullname']);
    $mail->Subject = "New Contact Form Enquiry";      // Subject (which isn't required)
    $mail->MsgHTML($message);

    // Send To
    $mail->AddAddress("mahtestmail@gmail.com", "Recipient Name"); // Where to send it - Recipient
    $result = $mail->Send();		// Send!
	$message = $result ? 'Successfully Sent!' : 'Sending Failed!';
	unset($mail);

}
?>

<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
  <title>Feedback</title>


</head>


         <div class="row">
           <div class="col s12 m5">
             <div class="card-panel teal">
            
             </div>
           </div>
         </div>
<div style="margin: 100px auto 0; width: 300px;">
  <h3>Contact Form</h3>
  <form name="form1" id="form1" action="" method="post">
      <fieldset>
        <input type="text" name="fullname" placeholder="Full Name" />
        <br />
        <input type="text" name="subject" placeholder="Subject" />
        <br />
        <input type="text" name="phone" placeholder="Phone" />
        <br />
        <input type="text" name="emailid" placeholder="Email" />
        <br />
        <textarea rows="4" cols="20" name="comments" placeholder="Comments"></textarea>
        <br />
        <input type="submit" name="submit" value="Send" />
      </fieldset>
  </form>
    <p><?php if(!empty($message)) echo $message; ?></p>
</div>



<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="js/materialize.js"></script>
</html>
