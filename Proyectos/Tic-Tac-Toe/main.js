var turno = true; //True es X y False es O
var cont = 0;
const botonestxt = ["1","2","3","4","5","6","7","8","9"];

function b_click(b){
    if(botonestxt.includes(b.innerHTML) && turno == true){
        b.innerHTML = "X";
        turno = false;
        cont += 1;
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>Turno de O</h1>";
        winner();
    }
    else if(botonestxt.includes(b.innerHTML) && turno == false){
        b.innerHTML = "O";
        turno = true;
        cont += 1;
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>Turno de X</h1>";
        winner();
    }
    else{
        alert("¡ESTA CASILLA YA HA SIDO SELECCIONADA!");
    }
}

function winner(){
    var botones = [];
    for(i=1;i<=10;i++){
        var id = "b" + i;
        botones.push(document.getElementById(id))
    }
    if(botones[0].innerHTML == "X" && botones[1].innerHTML == "X" && botones[2].innerHTML == "X"){
        botones[0].style.backgroundColor = "red";
        botones[1].style.backgroundColor = "red";
        botones[2].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR X!</h1>";
        disabledButtons();
    }
    else if(botones[3].innerHTML == "X" && botones[4].innerHTML == "X" && botones[5].innerHTML == "X"){
        botones[3].style.backgroundColor = "red";
        botones[4].style.backgroundColor = "red";
        botones[5].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR X!</h1>";
        disabledButtons();
    }
    else if(botones[6].innerHTML == "X" && botones[7].innerHTML == "X" && botones[8].innerHTML == "X"){
        botones[6].style.backgroundColor = "red";
        botones[7].style.backgroundColor = "red";
        botones[8].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR X!</h1>";
        disabledButtons();
    }
    else if(botones[0].innerHTML == "X" && botones[3].innerHTML == "X" && botones[6].innerHTML == "X"){
        botones[0].style.backgroundColor = "red";
        botones[3].style.backgroundColor = "red";
        botones[6].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR X!</h1>";
        disabledButtons();
    }
    else if(botones[1].innerHTML == "X" && botones[4].innerHTML == "X" && botones[7].innerHTML == "X"){
        botones[1].style.backgroundColor = "red";
        botones[4].style.backgroundColor = "red";
        botones[7].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR X!</h1>";
        disabledButtons();
    }
    else if(botones[2].innerHTML == "X" && botones[5].innerHTML == "X" && botones[8].innerHTML == "X"){
        botones[2].style.backgroundColor = "red";
        botones[5].style.backgroundColor = "red";
        botones[8].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR X!</h1>";
        disabledButtons();
    }
    else if(botones[0].innerHTML == "X" && botones[4].innerHTML == "X" && botones[8].innerHTML == "X"){
        botones[0].style.backgroundColor = "red";
        botones[4].style.backgroundColor = "red";
        botones[8].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR X!</h1>";
        disabledButtons();
    }
    else if(botones[2].innerHTML == "X" && botones[4].innerHTML == "X" && botones[6].innerHTML == "X"){
        botones[2].style.backgroundColor = "red";
        botones[4].style.backgroundColor = "red";
        botones[6].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR X!</h1>";
        disabledButtons();
    }  
    else if(botones[0].innerHTML == "O" && botones[1].innerHTML == "O" && botones[2].innerHTML == "O"){
        botones[0].style.backgroundColor = "red";
        botones[1].style.backgroundColor = "red";
        botones[2].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR O!</h1>";
        disabledButtons();
    }
    else if(botones[3].innerHTML == "O" && botones[4].innerHTML == "O" && botones[5].innerHTML == "O"){
        botones[3].style.backgroundColor = "red";
        botones[4].style.backgroundColor = "red";
        botones[5].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR O!</h1>";
        disabledButtons();
    }
    else if(botones[6].innerHTML == "O" && botones[7].innerHTML == "O" && botones[8].innerHTML == "O"){
        botones[6].style.backgroundColor = "red";
        botones[7].style.backgroundColor = "red";
        botones[8].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR O!</h1>";
        disabledButtons();
    }
    else if(botones[0].innerHTML == "O" && botones[3].innerHTML == "O" && botones[6].innerHTML == "O"){
        botones[0].style.backgroundColor = "red";
        botones[3].style.backgroundColor = "red";
        botones[6].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR O!</h1>";
        disabledButtons();
    }
    else if(botones[1].innerHTML == "O" && botones[4].innerHTML == "O" && botones[7].innerHTML == "O"){
        botones[1].style.backgroundColor = "red";
        botones[4].style.backgroundColor = "red";
        botones[7].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR O!</h1>";
        disabledButtons();
    }
    else if(botones[2].innerHTML == "O" && botones[5].innerHTML == "O" && botones[8].innerHTML == "O"){
        botones[2].style.backgroundColor = "red";
        botones[5].style.backgroundColor = "red";
        botones[8].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR O!</h1>";
        disabledButtons();
    }
    else if(botones[0].innerHTML == "O" && botones[4].innerHTML == "O" && botones[8].innerHTML == "O"){
        botones[0].style.backgroundColor = "red";
        botones[4].style.backgroundColor = "red";
        botones[8].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR O!</h1>";
        disabledButtons();
    }
    else if(botones[2].innerHTML == "O" && botones[4].innerHTML == "O" && botones[6].innerHTML == "O"){
        botones[2].style.backgroundColor = "red";
        botones[4].style.backgroundColor = "red";
        botones[6].style.backgroundColor = "red";
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡GANADOR O!</h1>";
        disabledButtons();
    }
    else if(cont == 9){
        document.getElementById("turnos").innerHTML = "<h1 style='text-align: center;'>¡EMPATE!</h1>";
        disabledButtons();
    } 
}

function disabledButtons(){
    var botones = [];
    for(i=1;i<=10;i++){
        var id = "b" + i;
        botones.push(document.getElementById(id))
    }
    botones.forEach(element => {
        element.disabled = true;
    });
}