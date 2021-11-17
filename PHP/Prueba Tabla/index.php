<?php
    $conexion = mysqli_connect('localhost', 'root', 'P0L1m4s7er!', 'jdbc');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>.: Canciones Shidas:.</title>
</head>
<style>
    table, th, td{
        border: 1px solid black;
        border-collapse: collapse;
    }

    th, td{
        padding: 10px;
    }
</style>
<body>
    <table>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Album</th>
            <th>Artista</th>
            <th>Año</th>
            <th>Duracion</th>
        </tr>

        <?php
            $sql = "SELECT * FROM canciones";
            $resultado = mysqli_query($conexion,$sql);
            while($fila=mysqli_fetch_array($resultado)){
        ?>
        <tr>
            <td><?php echo $fila['idCancion']?></td>
            <td><?php echo $fila['nombre']?></td>
            <td><?php echo $fila['album']?></td>
            <td><?php echo $fila['artista']?></td>
            <td><?php echo $fila['año']?></td>
            <td><?php echo $fila['duracion']?></td>
        </tr>
        <?php
            }
        ?>

    </table>
</body>
</html>