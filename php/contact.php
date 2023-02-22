<?php


     ini_set( 'display_errors', 1 );
     error_reporting( E_ALL );

    $to="migueldominguez@giomadero.com";
    $name=$_POST['name'];
    $lastname=$_POST['lastname'];
    $from=$_POST['email'];
    $message=$_POST['textarea'];

    $subject = "Pagina web Miguel Dominguez (CV)";
    $header= 'Desde: ' .$from .' '.'Mensaje: '.$message;
    $fullname="Nombre Completo: ".$name.' '.$lastname;

    
    

    mail($to, $subject, $header, $fullname);
    echo "<script>alert('Envió exitoso')</script>";
    echo "<script>setTimeout(\"location.href='https://www.giomadero.com/migueldominguez/'\",1000)</script>";

    
    ?>
