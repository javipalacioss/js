const TARIFA_COCHE_COMBUSTION = 0.50;
const TARIFA_COCHE_ELECTRICO = 0.25;

//Crear array vacio donde se guardaran los vehiculos registrados
var parking = [];

/*Crear clase vehiculo*/
class Vehiculo {
    constructor(esEco, matricula) {
    this.esEco = esEco;
    this.matricula = matricula;
    this.horaEntrada = Date.now();
    }

}
/*Funcion que calcula el tiempo que estuvo aparcado y multiplica por la tarifa correspondiente*/
function calcularCoste (v1){

    var horaSalida = Date.now()

    var tiempoParking = ((horaSalida - v1.horaEntrada))/1000; //pasar milisegundos a segundos

    tiempoParking /=60; //pasar segundos a minutos


    //1: electrico 2: combustion
    if(v1.esEco == 1){
        tiempoParking *= TARIFA_COCHE_ELECTRICO;
    }else{
        tiempoParking *= TARIFA_COCHE_COMBUSTION;
    }

    let esEco = v1.esEco ? "Sí" : "No"; // Si es true sera si, si es false sera no

    alert(`*************** \n Matricula: ${v1.matricula} \n Eco: ${esEco} \n Pagar: ${tiempoParking.toFixed(2)} `); //mostrar informacion

    accederMenu(); //volver al menu principal
}

function accederMenu(){

    do{
        var eleccion = parseInt(prompt("¿Que desea hacer? \n 1. Estacionar vehiculo \n 2. Sacar Vehiculo \n 3.ver vehiculos aparcados \n 4.Salir"));

    }while(isNaN(eleccion) || eleccion<1 || eleccion>4);

    switch(eleccion){

        case 1:
        crearVehiculo();
        break;

        case 2:
        sacarVehiculo();
        break;

        case 3:
        verVehiculos();
        break;

        case 4:
        break;
    }


}

/*Crear vehiculo y meterlo en parking*/
function crearVehiculo(){

    do{
        var nuevaMatricula = prompt("Escriba la matricula: ");

        do{
            var eco = prompt("¿Es electrico? \n 1.si \n 2.no" );
   
        }while(isNaN(eco) || eco<1 || eco>2);
   
    }while(encontrarMatricula(nuevaMatricula));
 
    parking.push(new Vehiculo(esEcologico(eco),nuevaMatricula));// crear vehiculo y pushearlo dentro del array de parking

    accederMenu(); //volver al menu
}

/*Sacar un vehiculo para quitarlo del array parking y calcular*/
function sacarVehiculo(){

    var finalizarBusqueda = false;
    do{
        var matriVehiculo = prompt("Escriba la matricula del vehiculo que quiere sacar: ");

        var vehiculoEncontrado = cogerVehiculoParaSacar(matriVehiculo);

        //Si encuentra vehiculo entrara en el if
        if(vehiculoEncontrado !=  null){
            alert("Su vehiculo se ha encontrado");
            finalizarBusqueda = true;
        //se guarda en la variable vehiculoEncontrado el vehiculo de la persona y se calcula el coste.

            var indiceVehiculo = parking.findIndex(vehiculoEncontrado => vehiculoEncontrado.matricula === matriVehiculo); //recogemos su indice utilizando findIndex

            //si ningun elemento cumple con la condicion devolveria -1 el findIndex, en este caso no pasara.
            if (indiceVehiculo !== -1) {
                parking.splice(indiceVehiculo, 1); //utilizamos splice(indice, numero de elementos que se eliminan apartir de ese).
            }
           
            calcularCoste(vehiculoEncontrado); break; // llamada al metodo que realizara y mostrara el pago
        }else{
            alert("No se ha encontrado el vehiculo");
            finalizarBusqueda = false;
            accederMenu();
        }
    }while(finalizarBusqueda);

       

}
/* Metodo funcional para devolver el vehiculo que se solicita*/
function cogerVehiculoParaSacar(matriculaVehiculo){

    let vehiculoDevolver;

    for (let index = 0; index < parking.length; index++) {
        if(parking[index].matricula == matriculaVehiculo){
            vehiculoDevolver = parking[index];
            break;
        }
       
    }
    return vehiculoDevolver;
}
/*Este metodo debe mostrar al usuario los vehiculos que estan aparcados y en que posicion*/
// Función verVehiculos
function verVehiculos() {

    // Construir el mensaje a mostrar
    var mensaje = "Vehículos en el parking:\n\n";
    parking.forEach(vehiculo => {
        var esEco = vehiculo.esEco ? "Sí" : "No"; //pasar el true o false a Si o no para mostrarlo de manera mas limpia
        mensaje += `Matrícula: ${vehiculo.matricula}, Eco: ${esEco}, tiempo aparcado: ${calcularTiempoAparcado(vehiculo)} minutos \n`; //el mensaje se hace por cada iteracion que recorre el bucle segun cuantos coches hayan en el array parking, mostrando su matricula y si es eco o no
    });

    // Mostrar el mensaje en un alert
    alert(mensaje);

    accederMenu(); //volver al menu


}

/*Funcion para calcular cuanto tiempo lleva, se actualiza constantemente el tiempo de los vehiculos aparcados que todavia no han salido*/
function calcularTiempoAparcado(vehiculo){
    let horaSalida = Date.now()

    let tiempoParking = ((horaSalida - vehiculo.horaEntrada))/1000; //pasar milisegundos a segundos

    tiempoParking /=60;

    return tiempoParking.toFixed(2) ; //pasar segundos a minutos
}

/*FUncion que buscara en el array de parking, la matricula que solicita el usuario
  T: si la matricula se encuentra en el sistema F: SI no esta*/
function encontrarMatricula(matri){

    var encontrado = false;

    for (let index = 0; index < parking.length; index++) {
        if(parking[index].matricula == matri){
            encontrado = true;
            break;
        }
    }

    return encontrado;
}

/*Funcion que pasa el int de eco a boolean para usarlo en constructor*/
function esEcologico(eco){

    var esEcologico = false ;

    if(eco == 1){
        esEcologico = true;
    }

    return esEcologico;
}

//empezar codigo
accederMenu();