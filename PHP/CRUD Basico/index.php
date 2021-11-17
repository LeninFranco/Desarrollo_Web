<?php include("db.php") ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>.: CRUD Libros:.</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container">
            <a href="index.php" class="navbar-brand">PHP MYSQL CRUD</a>
        </div>
    </nav>

    <div class="container p-4">
        <div class="row">
            <div class="col-md-4">
                <?php
                    if (isset($_SESSION['message'])) {
                ?>
                        <div class="alert alert-<?= $_SESSION['color'] ?> alert-dismissible fade show" role="alert">
                            <?= $_SESSION['message'] ?>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                <?php
                    session_unset();
                    }
                ?>
                <div class="card card-body">
                    <form action="save_data.php" method="POST">
                        <div class="form-group">
                            <input type="text" name="isbn" placeholder="ISBN" class="form-control">
                        </div>
                        <br>
                        <div class="form-group">
                            <input type="text" name="titulo" placeholder="Titulo del Libro" class="form-control">
                        </div>
                        <br>
                        <div class="form-group">
                            <input type="text" name="autor" placeholder="Autor del Libro" class="form-control">
                        </div>
                        <br>
                        <div class="d-grid">
                            <input type="submit" class="btn btn-success" name="save" value="Guardar">
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-md-8">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ISBN</th>
                            <th>Titulo</th>
                            <th>Autor</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                            $query = "SELECT * FROM libros";
                            $resultado = mysqli_query($conn,$query);
                            while($row = mysqli_fetch_array($resultado)){
                        ?>
                            <tr>
                                <td><?php echo $row['ISBN'] ?></td>
                                <td><?php echo $row['titulo'] ?></td>
                                <td><?php echo $row['autor'] ?></td>
                                <td>
                                    <a href="delete_data.php?isbn=<?php echo $row['ISBN'] ?>" class="btn btn-danger"> Eliminar</a>
                                </td>
                            </tr>
                        <?php
                            }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
</html>