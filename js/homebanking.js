//Declaración de variables
var nombreUsuario = "Matias Fernandez";
var codigoUsuario = "0001";
var saldoCuenta = 5000;
var limiteExtraccion = 1000;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    validarIdentidad();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function validarIdentidad() {
    var codigoIngresado = prompt("Bienvenido/a ingrese su usuario porfavor");
    if (codigoUsuario === codigoIngresado) alert("Bienvenido/a Matias Fernandez ya puedes comenzar a realizar operaciones.")
    else {
        alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
        restarDinero(saldoCuenta)
        actualizarSaldoEnPantalla(validarIdentidad);
    }
}


//Funciones que tenes que completar

function restarDinero(extraer) {
    return saldoCuenta -= extraer;
}

function sumarDinero(saldo) {
    return saldoCuenta += saldo;
}

function cambiarLimite(limite) {
    limiteExtraccion = limite;

}


function cambiarLimiteDeExtraccion() {
    var cambiarLimite1 = parseInt(prompt("Ingrese el nuevo limite de extraccion:"));
    cambiarLimite(cambiarLimite1)
    alert("Su nuevo limite es:" + cambiarLimite1);
    actualizarLimiteEnPantalla(cambiarLimite1);
}


function extraerDinero() {
    var consultaExtraccion = prompt("¿Cuanto dinero desea extraer?");
    var extraccion = parseInt(consultaExtraccion);
    if (extraccion > limiteExtraccion) { alert("El monto que desea extraer supuera su limite de extraccion"); }
    else if (extraccion > saldoCuenta) { alert("No hay dinero suficiente en tu cuenta para realizar esta operacion"); }
    else if (extraccion % 100 !== 0) {
        alert("Solo puedes extraer billetes de $100");
    }
    var saldoAnterior = saldoCuenta;
    alert("Usted retiro:" + extraccion + "\nSu saldo anterior:" + saldoAnterior + "\nSaldo actual:"
        + restarDinero(extraccion));
    actualizarSaldoEnPantalla(extraerDinero);
}

function depositarDinero() {
    var consultarSaldo = prompt("¿Cuanto dinero desea depositar?");
    var preguntarSaldo = parseInt(consultarSaldo);
    var saldoOriginal = saldoCuenta;
    alert("Usted a depositado:" + preguntarSaldo + "\nSaldo anterior:" + saldoOriginal + " \nSaldo actual:"
        + sumarDinero(preguntarSaldo))
    actualizarSaldoEnPantalla(depositarDinero);
}

function pagarServicio() {
    var agua = 350;
    var telefono = 425;
    var luz = 210;
    var internet = 570;
    var pagoServicios = saldoCuenta;


    var option = prompt("Ingresa el numero del servicio que desea pagar:" + "\n 1-agua" + "\n 2-Luz" + "\n 3-Internet"
        + "\n 4-Telefono");

    option = parseInt(option)

    // TO DO: Terminar esta wea

    switch (option) {
        case 1:
            alert(`El valor es de $350`); 
            if (agua < saldoCuenta + restarDinero(agua) + actualizarSaldoEnPantalla(agua));
            break;
        case 2:
            alert("El valor es $210");
            if (luz < saldoCuenta + restarDinero(luz) + actualizarSaldoEnPantalla(agua));
            break;
        case 3:
            alert("El valor es $570");
            if (internet < saldoCuenta + restarDinero(internet) + actualizarSaldoEnPantalla(agua));
            break;
        case 4:
            alert("El valor es $425");
            if (telefono < saldoCuenta + restarDinero(telefono) + actualizarSaldoEnPantalla(agua));
            break;
        default:
            alert("Lo sentios, no podemos realizar esta operacion");
    }

  if (option != saldoCuenta) {
       // alert("No posee dinero suficuiente para pagar este servicio");//
    
    }

}

function transferirDinero() {
    var cuentaAmiga1 = 1234567;
    var cuentaAmiga2 = 7654321;
    var consultaTransferencia = prompt("Ingrese el monto que desea transferir");
    var montoTransferencia = parseInt(consultaTransferencia);
    if (montoTransferencia < saldoCuenta) {
        var ingresoCbu = prompt("Ingrese el CBU correspondiente");
    }

    else if (montoTransferencia > saldoCuenta) {
        alert("no posee dinero sufucuente en su cuenta");
    }

    if (cuentaAmiga1 == ingresoCbu) {
        restarDinero(montoTransferencia);
        actualizarSaldoEnPantalla(transferirDinero);
        alert("Se han transferido:" + montoTransferencia + "\nCuenta destinataria:" + cuentaAmiga1);
    }

    if (cuentaAmiga2 == ingresoCbu) {
        restarDinero(montoTransferencia);
        actualizarSaldoEnPantalla(transferirDinero);
        alert("Se han transferido:" + montoTransferencia + "\nCuenta destinataria:" + cuentaAmiga2);
    }

    else if (cuentaAmiga1 != ingresoCbu) {
        alert("No se puede realizar la transferencia solicitada");
    }



}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}