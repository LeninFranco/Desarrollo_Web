<?php
    include("db.php");

    if(isset($_POST['save'])){
        $isbn = $_POST['isbn'];
        $title = $_POST['titulo'];
        $author = $_POST['autor'];
        $sql = "INSERT INTO libros(ISBN,titulo,autor) VALUES('$isbn','$title','$author')";
        $result = mysqli_query($conn,$sql);
        if(!$result){
            die("Query Failed");
        }
        $_SESSION['message'] = "LIBRO GUARDADO CORRECTAMENTE";
        $_SESSION['color'] = "success";
        header("Location: index.php");
    }
?>