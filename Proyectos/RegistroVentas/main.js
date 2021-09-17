function calcularTotal() {
    var cant = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;
    document.getElementById("total").value = parseFloat(precio) * parseFloat(cant);
}

function addVenta() {
    var Nfila = document.getElementById("id").value;
    if (document.getElementById(Nfila)) {
        alert("Ya existe esa venta");
    } else {
        var fila = "<tr id='" + document.getElementById("id").value + "'>";
        fila += "<td>" + document.getElementById("id").value + "</td>";
        fila += "<td>" + document.getElementById("producto").value + "</td>";
        fila += "<td>" + document.getElementById("precio").value + "</td>";
        fila += "<td>" + document.getElementById("cantidad").value + "</td>";
        fila += "<td>" + document.getElementById("total").value + "</td>";
        fila += "</tr>";
        document.getElementById("tabla").insertAdjacentHTML("beforeend",fila);
    }
    clearInputs();
}

function deleteVenta() {
    var Nfila = document.getElementById("id").value;
    if (!document.getElementById(Nfila)) {
        alert("No existe esa venta");
    } else {
        document.getElementById(Nfila).remove();
    }
    clearInputs();
}

function clearInputs(){
    document.getElementById("id").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("total").value = "";
}