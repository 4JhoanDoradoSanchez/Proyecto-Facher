<?php

$host = "bnp6u5ufi6oyzuuji1sk-mysql.services.clever-cloud.com";
$user = "uhaypfludwolnzsd";
$pass = "DAS8SbcrN3p38xg25ZMG";
$database = "bnp6u5ufi6oyzuuji1sk";
$port=3306;
//conexion con la base de datos
//se crea una variable conexion y usara el metodo de php mysqli_conectesto conecetara la base de dato
//con los sigueintes paramaetros: host, usuario, contraseña, y nombre de la base de datos
$conexion = mysqli_connect($host, $user, $pass, $database,$port) or die(mysqli_error($mysqli));

