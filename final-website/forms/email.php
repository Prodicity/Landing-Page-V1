<?php
    $email = test_input($_POST["inputplaceholdertext"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      header('location: ../landing-page-m-v2-2.html');
      
    }else{
        $myfile = fopen("EmailList.txt", "a");
        $txt = $_POST['inputplaceholdertext'] + "\n";
        fwrite($myfile, $txt);
        fclose($myfile);
    }
?>