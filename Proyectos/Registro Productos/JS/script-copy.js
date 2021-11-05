class Producto {
    constructor(name, price, stock){
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

class UI {
    addProducto(producto){
        const productList = document.getElementById("product-list");
        const elemento = document.createElement('tr');
        elemento.className = "table-secondary";
        elemento.innerHTML = `
            <td>${producto.name}</td>
            <td>$${producto.price}</td>
            <td>${producto.stock}</td>
            <td><a href="#" class="btn btn-danger" name="delete">Eliminar</a></td>
        `;
        productList.appendChild(elemento);
    }
    deleteProduct(elemento){
        if (elemento.name == 'delete') {
            elemento.parentElement.parentElement.remove();
            this.showMessage("El producto ha sido eliminado satisfactoriamente", "danger");
        }
    }
    showMessage(mensaje, clase){
        const div = document.createElement('div');
        div.className = `alert alert-${clase} mt-4`;
        div.appendChild(document.createTextNode(mensaje));
        const container = document.querySelector('.container');
        const App = container.querySelector('#App');
        container.insertBefore(div, App);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById("productForm").addEventListener('submit', function(e) {
    const producto = new Producto(document.getElementById('name').value, 
                                document.getElementById('price').value, 
                                document.getElementById('stock').value);
    const ui = new UI();
    ui.addProducto(producto);
    ui.showMessage("El producto agregado satisfactoriamente", "success")
    e.preventDefault();
});

document.getElementById("product-list").addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
});