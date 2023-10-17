<?php
$conexion = mysqli_connect("localhost", "root", "", "panoldb");

// Verificar la conexión
if ($conexion->connect_errno) {
    die("Error al conectar con la base de datos: " . $conexion->connect_error);
}

// Realizar la consulta SQL para obtener los datos
$query = "SELECT nombre, cantidad, idherramientas FROM herramientas";
$query2 = "SELECT nombre_apellido, telefono, domicilio, documento, idprofesores FROM profesores";
$query3 = "SELECT nombre, idcurso FROM curso";

$resultado = $conexion->query($query);
$resultado2 = $conexion->query($query2);
$resultado3 = $conexion->query($query3);

// Crear arrays para almacenar los datos
$herramientas = array();
$profesores = array();
$curso = array();

// Recorrer los resultados y almacenarlos en los arrays correspondientes
while ($fila = $resultado->fetch_assoc()) {
    $herramientas[] = $fila;
}

while ($fila2 = $resultado2->fetch_assoc()) {
    $profesores[] = $fila2;
}

while ($fila3 = $resultado3->fetch_assoc()) {
    $curso[] = $fila3;
}

// Crear un array combinado
$datos_combinados = array(
    "herramientas" => $herramientas,
    "profesores" => $profesores,
    "curso" => $curso
);

// Devolver el array combinado como JSON
header('Content-Type: application/json');
echo json_encode($datos_combinados);
  
$conexion->close();
?>
