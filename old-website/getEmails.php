<?php 
    $myfile = fopen("prodicity.txt", "a");
    $txt = $_POST['inputplaceholdertext'] + "\n";
    fwrite($myfile, $txt);
    fclose($myfile);
?>
