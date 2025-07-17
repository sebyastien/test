<?php

$email_admin = "budokarateclubpontoise@gmail.com";
$objet = "Contact via le site web";

if (isset($_POST["submit"]) && !empty($_POST["submit"])) {
    if (isset($_POST["name"]) && !empty($_POST["name"]) &&
        isset($_POST["email"]) && !empty($_POST["email"]) &&
        isset($_POST["subject"]) && !empty($_POST["subject"]) &&
        isset($_POST["message"]) && !empty($_POST["message"])) {

        $name = $_POST["name"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $message_content = $_POST["message"];

        $full_message = "Nom et Prénom: " . $name . "<br>";
        $full_message .= "Email: " . $email . "<br>";
        $full_message .= "Sujet: " . $subject . "<br>";
        $full_message .= "Message:<br>" . nl2br($message_content);

        $headers = 'From: ' . $email . "\r\n" .
                   'MIME-Version: 1.0' . "\r\n" .
                   'Content-type: text/html; charset=utf-8';

        
         if (mail($email_admin, $objet, $full_message, $headers)) {
             header("location:contact.html?status=success");
             exit();

    }
}
}

header("location:contact.html?status=error");
exit();

?>