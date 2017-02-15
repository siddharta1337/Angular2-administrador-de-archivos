<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json");

if($_SERVER['REQUEST_METHOD'] === 'GET'){

   if( $_GET['ruta-archivo'] && $_GET['nuevo-archivo']  ){

        $renombrar = rename ( $_GET['ruta-archivo'] , $_GET['nuevo-archivo']  );

        if($renombrar ){
            echo json_encode(array(
                        'status' => 'ok'
                        ));
        }else{

            echo json_encode(array(
                        'status' => 'error',
                        'error' => 'No se pudo renombrar el archivo'
                        ));
        }

   }

}else{

    header('HTTP/1.1 405 Method Not Allowed');
    exit;
}



?>