<?php
    include("db.php");

    if(isset($_GET['isbn'])){
        $isbn = $_GET['isbn'];
        $query = "DELETE FROM libros WHERE ISBN = $isbn";
        $result = mysqli_query($conn,$query);
        if(!$result){
            die("Query Failed");
        }
        $_SESSION['message'] = "LIBRO ELIMINADO CORRECTAMENTE";
        $_SESSION['color'] = "danger";
        header("Location: index.php");
    }
?>