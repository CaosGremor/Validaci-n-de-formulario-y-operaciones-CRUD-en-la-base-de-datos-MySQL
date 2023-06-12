<!DOCTYPE html>
<html>
<head>
    <title>Lista de usuarios</title>
    <link rel="stylesheet" href="datosestilo.css">
</head>
<body>
    <?php
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "Laboratorio";

    // Conexión a la base de datos
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Error de conexión: " . $conn->connect_error);
    }

    // Consulta SQL
    $sql = "SELECT * FROM formulario";
    $result = $conn->query($sql);

    // Mostrar resultados
    if ($result->num_rows > 0) {
        
        echo "<table>";
        echo "<tr><th>Nombre</th><th>Apellido1</th><th>Apellido2</th><th>Email</th></tr>";

        while ($row = $result->fetch_assoc()) {
            echo "<tr>";
            echo "<td>" . $row["Nombre"] . "</td>";
            echo "<td>" . $row["Apellido1"] . "</td>";
            echo "<td>" . $row["Apellido2"] . "</td>";
            echo "<td>" . $row["Email"] . "</td>";
            echo "</tr>";
        }
        
        
        
        echo "</table>";

    } else {
        echo "No existen registros.";
    }

    // Cerrar conexión
    $conn->close();
    ?>
</body>
</html>
