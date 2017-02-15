<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

if($_SERVER['REQUEST_METHOD'] === 'GET'){

    if( $_GET['ruta-archivo']){

        $borrar = unlink( $_GET['ruta-archivo'] );

        if($borrar){
            echo json_encode(array(
                    'status' => 'ok'
                    ));
        }else{

            echo json_encode(array(
                    'status' => 'error',
                    'error' => 'No se pudo eliminar el archivo'
                    ));

        }

    }
   
}else{
    header('HTTP/1.1 405 Method Not Allowed');
    exit;
}

?>