function calcularTotal() {
    try {
        let precio = parseFloat(document.getElementById('precio').value);
        let cantidad = parseFloat(document.getElementById('cantidad').value);
        document.getElementById('total').value = precio * cantidad;
    } catch {
        document.getElementById('total').value = 0;
    }
}

function addVenta() {
    const listaVentas = document.getElementById('lista-ventas');
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${document.getElementById('producto').value}</td>
        <td>${document.getElementById('precio').value}</td>
        <td>${document.getElementById('cantidad').value}</td>
        <td>${document.getElementById('total').value}</td>
        <td><button class="btn btn-danger" onclick="deleteVenta(this)"><i class="fas fa-trash"></i></button></td>
    `;
    listaVentas.appendChild(fila);
}

function deleteVenta(elemento) {
    elemento.parentElement.parentElement.remove();
    showMessage("Venta eliminada correctamente", "danger");
}

function showMessage(mensaje, tipo){
    const div = document.createElement('div');
    div.className = `alert alert-${tipo}`;
    div.appendChild(document.createTextNode(mensaje));
    document.getElementById('message').appendChild(div);
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

document.getElementById('formVenta').addEventListener('submit', function (e) {
    addVenta();
    showMessage("Venta guardada correctamente", "success");
    e.preventDefault();
});