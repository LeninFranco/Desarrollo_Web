function suma() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        const alerta = document.createElement('div');
        alerta.className = `alert alert-danger`;
        alerta.id = `alerta`;
        alerta.appendChild(document.createTextNode("Favor de llenar los campos"));
        const container = document.getElementById("suma");
        container.insertBefore(alerta, container.firstChild);
        setTimeout(function () {
            document.querySelector('#alerta').remove();
        }, 3000);
    }
    else{
        let resultado = num1 + num2;
        document.getElementById('res1').value = resultado;
    }
}

function resta() {
    let num1 = parseFloat(document.getElementById('num3').value);
    let num2 = parseFloat(document.getElementById('num4').value);
    if (isNaN(num1) || isNaN(num2)) {
        const alerta = document.createElement('div');
        alerta.className = `alert alert-danger`;
        alerta.id = `alerta`;
        alerta.appendChild(document.createTextNode("Favor de llenar los campos"));
        const container = document.getElementById("resta");
        container.insertBefore(alerta, container.firstChild);
        setTimeout(function () {
            document.querySelector('#alerta').remove();
        }, 3000);
    }
    else{
        let resultado = num1 - num2;
        document.getElementById('res2').value = resultado;
    }
}

function multi() {
    let num1 = parseFloat(document.getElementById('num5').value);
    let num2 = parseFloat(document.getElementById('num6').value);
    if (isNaN(num1) || isNaN(num2)) {
        const alerta = document.createElement('div');
        alerta.className = `alert alert-danger`;
        alerta.id = `alerta`;
        alerta.appendChild(document.createTextNode("Favor de llenar los campos"));
        const container = document.getElementById("multi");
        container.insertBefore(alerta, container.firstChild);
        setTimeout(function () {
            document.querySelector('#alerta').remove();
        }, 3000);
    }
    else{
        let resultado = num1 * num2;
        document.getElementById('res3').value = resultado;
    }
}

function divi() {
    let num1 = parseFloat(document.getElementById('num7').value);
    let num2 = parseFloat(document.getElementById('num8').value);
    if (isNaN(num1) || isNaN(num2)) {
        const alerta = document.createElement('div');
        alerta.className = `alert alert-danger`;
        alerta.id = `alerta`;
        alerta.appendChild(document.createTextNode("Favor de llenar los campos"));
        const container = document.getElementById("divi");
        container.insertBefore(alerta, container.firstChild);
        setTimeout(function () {
            document.querySelector('#alerta').remove();
        }, 3000);
    }
    else{
        if (num2 == 0) {
            const alerta = document.createElement('div');
            alerta.className = `alert alert-danger`;
            alerta.id = `alerta`;
            alerta.appendChild(document.createTextNode("No se puede dividir entre cero"));
            const container = document.getElementById("divi");
            container.insertBefore(alerta, container.firstChild);
            setTimeout(function () {
                document.querySelector('#alerta').remove();
            }, 3000);
        }
        else{
            let resultado = num1 / num2;
            document.getElementById('res4').value = resultado;
        }
    }
}