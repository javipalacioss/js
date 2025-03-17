/*
12. Desarrolla un sistema para gestionar los vehículos que entran y salen de un estacionamiento.
El sistema debe:
● Registrar la entrada de un nuevo vehículo.
● Registrar la salida y calcular el coste.
● Verificar si el vehículo es un coche eléctrico o de combustión, ya que los coches eléctricos tienen tarifas de estacionamiento reducidas.
● Controlar entradas válidas.
● Utiliza clases para definir un Vehículo y manejar sus propiedades (matrícula, tipo, y hora de entrada).
● Usa estructuras de control (if, while, switch), así como operaciones lógicas para tomar decisiones en función de los tipos de vehículos.
*/
//Defino mi clase Coche
class Coche{
    constructor(matricula, tipo, horaEntrada){
    this.matricula=matricula;
    this.tipoElectrico=tipo;
    this.horaEntrada=horaEntrada;
    this.horaSalida=horaSalida
    }
    //Asi se declaran constantes estaticas
    static PRECIO_NORMAL= 0.04; //Precio por minuto
    static PRECIO_REDUCIDO= 0.035; //Precio por minuto
    //Asi se declara un metodo dentro de la clase.
    calcularPrecio(horaSalida){
        let total;
        //Si es electrico. Los milisegundos se pasan a minutos. Primero entre 1000 y luego entre 60.
        if(this.tipoElectrico){
            total= (((horaSalida-this.horaEntrada)* Coche.PRECIO_REDUCIDO)/1000)/60;
        }else{
            total=(((horaSalida-this.horaEntrada)* Coche.PRECIO_NORMAL)/1000)/60;
        }
       
        return total;
       
    }
}
//Defino mi clase aparcamiento, para meter los coches en un array
class Aparcamiento{
   
    constructor(){
        this.coches=[]; //Array para almacenar los coches
    }
    //Añadir un coche al aparcamiento.
    agregarCoche(coche){
        this.coches.push(coche);
    }
    //Metodo para sacar un coche del aparcamiento.
    salidaCoche(matricula, horaSalida){
        //Me creo un coche auxilizar y llamo al metodo de buscarCoche
        let coche=this.buscarCoche(matricula);
        //Si no ha encontrado ese objeto.
        if(coche==null){
            alert("Coche no encontrado.");
        }else{//Si lo ha encontrado
            //Extraemos el indice para poder borrarlo posteriormente.
            let indice= this.coches.indexOf(coche);
            //Calculo el precio del parking llamando al metodo de la clase coche.
            let precio= coche.calcularPrecio(horaSalida);
            alert("La cantidad a pagar es: " + precio + " €");
   
            //Quito el coche del array aparcamiento con SPLICE
            this.coches.splice(indice,1); //Quita 1 elemento desde el indice indicado.
            alert("El coche con matricula " + coche.matricula + " ha salido del aparcamiento. ¡Hasta pronto!");
        }
       
       



    }
    //Metodo para buscar un coche por la matricula
    buscarCoche(matricula){
        let encontrado=false; //Para que el bucle pare
        let coche=null; //Objeto nulo, vacío
        for(let i=0; i<this.coches.length && !encontrado; i++){
            if(matricula===this.coches[i].matricula){ //Si es igual
                //Asigno al objeto coche creado el objeto encontrado
                coche=this.coches[i];
                encontrado=true;
            }
        }
        return coche; //Me devuelve el objeto si lo ha encontrado o null si no es asi.
    }
}
//Variable
let matricula;
let tipoElectrico;
let horaEntrada;
let horaSalida;
let opcionMenu;
let coste;
var cocheAuxiliar;
//Me creo el objeto aparcamiento, que es un array
let aparcamiento=new Aparcamiento();



//Creo el menu
function menu(){
    debugger;
    var opcion=prompt(`**Elige una opción**
        1.Registrar entrada de nuevo vehículo.
        2.Registrar salida  y calcular coste.
        3.Salir
        `);
    return opcion;
}
do{ //Enseño el menu y recojo la opcion.
   
    opcionMenu=menu();
    switch (opcionMenu) {
        case "1"://Registrar entrada
            matricula=prompt("Introduce la matricula:");
            var tipo=prompt(`Dime el tipo:
                1.Electrico
                2.Combustion`);
            if(tipo=="1"){
                tipoElectrico=true;
            }else{
                tipoElectrico=false;
            }
            horaEntrada= Date.now();
            //Creo el objeto coche
            cocheAuxiliar=new Coche(matricula, tipoElectrico,horaEntrada);
            //Lo meto en el array
            aparcamiento.agregarCoche(cocheAuxiliar);
           
            break;
        case "2": //Registrar salida
        let matriculaIntroducida=prompt("Introduce la matricula:");
        horaSalida=Date.now();
        //Llamamos al metodo de salidaCoche
        aparcamiento.salidaCoche(matriculaIntroducida, horaSalida);
        break;
        case "3": //Para salir del sistema
        alert("Saliendo del sistema...HASTA PRONTO.");
        break;
   
        default: //Cuando el usuario introduce una opcion incorrecta.
            alert("Opción no válida. Introduzca una correcta.")
            break;
    }
   
}while(opcionMenu !="3"); //Sale del bucle cuando la opcion sea 3.