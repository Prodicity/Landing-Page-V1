<?php

   $to_email = $_POST['emailinputplaceholdertext'];
    $subject = $_POST['subjectinputplaceholder'];
    $body = $_POST['messageinputplaceholder'];
    $headers = "From: prodicityteam@gmail.com";

    if (mail($to_email, $subject, $body, $headers)){
        echo "Email successfully sent!";
        header("location: index.php");
    }else{
        echo "Email sending failed...";
        header("location: index.php");
    }

?>