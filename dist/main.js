"use strict";
class Barco {
    constructor() {
        this.numeroAnclas = 4;
        this.modelo = "Yamaha";
        this.fabricante = "Yamaha Corporation";
        this.Helices = 2;
        this.nombre = "JP YAMATO";
    }
    navegar() {
        console.log("El barco esta siendo navegado");
    }
    encender() {
        console.log("El barco esta siendo encendido");
    }
    detener() {
        console.log("El barco esta siendo detenido");
    }
    acelerar() {
        console.log("El barco esta siendo acelerado");
    }
    anclar() {
        console.log("El barco esta siendo anclado");
    }
}
let barco = new Barco();
document.write("Hola, gracias por confiar la construccion de su barco a nuestro astillero, el barco modelo " + barco.modelo +
    " de la compañia " + barco.fabricante + " que consta de " + barco.Helices + " helices y " + barco.numeroAnclas + " anclas culminara su construccion en 2 meses y se le asignara el nombre de " +
    barco.nombre + " segun especifico el cliente");
class Camioneta {
    constructor() {
        this.modelo = "4x2";
        this.fabricante = "Casabaca";
        this.numeroLlantas = 4;
    }
    conducir() {
        console.log("El vehiculo esta siendo conducido");
    }
    encender() {
        console.log("El vehiculo esta siendo encendido");
    }
    detener() {
        console.log("El vehiculo esta siendo detenido");
    }
    acelerar() {
        console.log("El vehiculo esta siendo acelerado");
    }
}
function procesar(vehiculo) {
    vehiculo.encender();
    vehiculo.detener();
}
/*let camioneta = new Camioneta();
document.write("Hola, gracias por comprar tu auto modelo: " + camioneta.modelo + " de la fabrica " + camioneta.fabricante +
" recuerda que tienes un total de " + camioneta.numeroLlantas + " llantas de repuestos por tu compra")*/
