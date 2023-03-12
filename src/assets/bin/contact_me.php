<?php
// check if fields passed are empty


if(empty($_POST['name'])  		||
   empty($_POST['phone']) 		||
   empty($_POST['email']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }

$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$email_address_origin = 'infos@interkultur.es';

// create email body and send it
$to = 'infos@interkultur.es'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "Nachricht gesendet:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$email_body = "Eine neue Nachricht von der Web wurde empfangen.\n\n"."Here are the details:\n\nName: $name\n\nPhone: $phone\n\nEmail: $email_address\n\nMessage:\n$message";
$email_body_answer = "Vielen Dank für Ihre Nachricht. Wir werden Ihre Anfrage so schnell wie möglich beantworten.\n\n\n"."Mit freundlichen Grüßen\n\n\n"."Interkultur";
$headers = "From: $email_address_origin";
$headers .= "Reply-To: $email_address";

$headers01 = "From: $email_address_origin";


mail($to,$email_subject,$email_body,$headers);
mail($email_address,$email_subject,$email_body_answer,$headers01);

return true;
?>
