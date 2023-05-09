interface IVehiculo {
  readonly modelo : string;
  readonly fabricante: string;
  encender(): void;
  detener(): void;
  acelerar(): void;
}

interface IVehiculoTerrestre extends IVehiculo {
  numeroLlantas: number;
  conducir(): void;
}

interface IvehiculoMaritimo extends IVehiculo {
  numeroAnclas: number;
  navegar(): void;
  anclar(): void;
}

class Barco implements IvehiculoMaritimo {
  numeroAnclas: number = 4;
  modelo: string = "Yamaha";
  fabricante: string = "Yamaha Corporation";
  Helices: number = 2;
  nombre: string= "JP YAMATO"
  
  navegar(): void {
    console.log("El barco esta siendo navegado");
  }
  encender(): void {
      console.log("El barco esta siendo encendido")
  }
  detener(): void {
      console.log("El barco esta siendo detenido")
  }
  acelerar(): void {
      console.log("El barco esta siendo acelerado")
  }
  anclar(): void {
      console.log("El barco esta siendo anclado")
  }
  
}

let barco = new Barco();
document.write("Hola, gracias por confiar la construccion de su barco a nuestro astillero, el barco modelo " + barco.modelo + 
" de la compañia " + barco.fabricante + " que consta de " + barco.Helices + " helices y " + barco.numeroAnclas + " anclas culminara su construccion en 2 meses y se le asignara el nombre de " + 
barco.nombre + " segun especifico el cliente")

class Camioneta implements IVehiculo {
  modelo: string = "4x2";
  fabricante: string = "Casabaca";
  numeroLlantas: number = 4;
  placa!: string;

  conducir(): void {
    console.log("El vehiculo esta siendo conducido");
  }
  encender(): void {
      console.log("El vehiculo esta siendo encendido")
  }
  detener(): void {
      console.log("El vehiculo esta siendo detenido")
  }
  acelerar(): void {
      console.log("El vehiculo esta siendo acelerado")
  }

}

function procesar (vehiculo: IVehiculoTerrestre){
  vehiculo.encender();
  vehiculo.detener();
}

/*let camioneta = new Camioneta();
document.write("Hola, gracias por comprar tu auto modelo: " + camioneta.modelo + " de la fabrica " + camioneta.fabricante + 
" recuerda que tienes un total de " + camioneta.numeroLlantas + " llantas de repuestos por tu compra")*/


