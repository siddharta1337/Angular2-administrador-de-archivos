<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

 if($_POST['ruta']){
    $rutaBase = $_POST['ruta'];
 }else{
    $rutaBase ='../archivos';
 }


if (isset($_FILES['file'])) {

  $archivoRuta = $rutaBase.'/'.$_FILES['file']['name'];


  if ( move_uploaded_file($_FILES['file']['tmp_name'] , $archivoRuta) ) {
      
    echo json_encode(array(
      'status'  => 'ok',
    ));
  }

} 

?>