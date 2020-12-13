<?php
include('php/conexion.php');

$nombre = $_POST['nombre'];
$correo = $_POST['gmail'];
$tipo = $_POST['tipo'];
$codigo = $_POST['codigo'];

if($nombre ===''){
    echo json_encode('llenar todos los campos1');
}
if($correo ===''){
    echo json_encode('llenar todos los campos2');
    
}
if($tipo  ===''){
    echo json_encode('llenar todos los campos3');
    
}
if($codigo ===''){
    echo json_encode('llenar todos los campos4');
    
}

$sql = mysqli_query($conexion,"insert into cliente values('$nombre','$correo','$tipo',$codigo)");

echo json_encode($sql);
