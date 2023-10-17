<?php
$conexion = new mysqli("localhost", "root", "", "panoldb"); // Establecer conexión con la base de datos

if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') { // Si es una solicitud POST
    $inputData = json_decode(file_get_contents("php://input"), true); // Obtener datos enviados en formato JSON

    if (isset($inputData['agregar'])) { // Si se envía la solicitud de agregar
        $curso = $inputData['curso'];

        $query = "INSERT INTO curso (nombre) VALUES ('$curso')";
        $conexion->query($query);

        echo json_encode(['message' => 'Herramienta agregada exitosamente']); // Devolver respuesta en formato JSON
    } elseif (isset($inputData['modificar'])) { // Si se envía la solicitud de modificar
        $id = $inputData['id'];
        $curso = $inputData['curso'];

        $query = "UPDATE curso SET nombre='$curso' WHERE idcurso='$id'";
        $conexion->query($query);

        echo json_encode(['message' => 'Herramienta modificada exitosamente']); // Devolver respuesta en formato JSON
    } elseif (isset($inputData['eliminar'])) { // Si se envía la solicitud de eliminar
        $id = $inputData['id'];

        $query = "DELETE FROM curso WHERE idcurso='$id'";
        $conexion->query($query);

        echo json_encode(['message' => 'Herramienta eliminada exitosamente']); // Devolver respuesta en formato JSON
    }
} 

$conexion->close(); // Cerrar la conexión con la base de datos
?>
