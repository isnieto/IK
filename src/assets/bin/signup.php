<?php
      // check if fields passed are empty
      if(empty($_POST['name'])  		||
         empty($_POST['email']) 		||

         !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
         {
      	echo "No arguments Provided!";
      	return false;
         }


      $programm = $_POST['programm'];
      $name = $_POST['name'];
      $phone = $_POST['phone'];
      $email_address = $_POST['email'];
      $dob = $_POST['dob'];
      $stufe = $_POST['stufe'];
      $spanish = $_POST['spanish'];
      $region = $_POST['region'];
      $message = $_POST['message'];




      // create email body and send it
      $to = 'infos@interkultur.es'; // PUT YOUR EMAIL ADDRESS HERE
      $email_subject = "Online Bewerbung von  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
      $email_body = "Nachricht erhalten von Online-Bewerbung-Form.\n\n"."Programm: $programm\n\nName: $name\n\nTelefon: $phone\n\nEmail: $email_address\n\nDob: $dob\n\n Stufe: $stufe\n\n Spanisch: $spanish\n\n Region: $region\n\nNachricht:\n$message\n\n";
      $headers = "From Homepage: interkultur-schueleraustausch.org\n";
      $email_body_answer = "Vielen Dank für Ihre Online-Bewerbung und Ihr Interesse an Spanien. Wir werden uns bald bei Ihnen melden.\n\n\n"."Saludos\n\n\n"."Interkultur";
      $headers = "From: noreply@your-domain.com\n";
      $headers .= "Reply-To: $email_address";

      mail($to,$email_subject,$email_body,$headers);
      mail($email_address,$email_subject,$email_body_answer,$headers);

      return true;
?>
