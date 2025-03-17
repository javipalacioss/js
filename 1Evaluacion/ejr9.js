var eleccion;
var num1;
var num2;

/*Iniciar codigo*/
function empezar(){
    introducirNum(); //Solicitar al usuario los numeros
    ejecutar();
    }
   
/*Funcion para saber que opcion elige el usuario*/
function solicitarDatos(){
eleccion =  parseInt(prompt("Seleccione una opcion \n 1. Sumar \n 2.Restar \n 3.Dividir \n 4. Multiplicar"))
}

/*Funcion para introducir los valores*/
function introducirNum(){

        do{
            num1 = parseFloat(prompt("Valor 1: "));

        }
        while(isNaN(num1));

        do{
            num2 = parseFloat(prompt("Valor 2: "));

        }
        while(isNaN(num2));

   
}

/*Funcion para realizar operaciones*/
function realizarOperacion(){

    switch(eleccion){
        case 1:
        alert(`La suma de ${num1} y ${num2} es igual a ${num1+num2}`);
         break;
        case 2:
        alert(`La resta de ${num1} y ${num2} es igual a ${num1-num2}`);
        break;
        case 3:
            if(num2 == 0){
                alert("No se puede dividir un numero entre 0");
            }else{
                alert(`La división entre ${num1} y ${num2} es igual a ${num1/num2}`);
            }
        break;        
        case 4:
        alert(`Multiplicar ${num1} por ${num2} es igual a ${num1*num2}`);

    }
}

/*Funcion para controlar cuando dejar de realizar la operacion*/
function repetirUltimaOperacion(){
    do{
        repetir = parseInt(prompt("Repetir operacion: \n 1. Con valores \n 2. Cambiar valores \n 3.Terminar"));

    }while(isNaN(repetir) || repetir<1 || repetir>3);

    if(repetir == 1){
        ejecutar();
    }else if(repetir == 2){
        empezar();
    }else{
        alert("Hasta pronto");
    }
}

/*Control de parametros y ejecuta los demas metodos, impide que el usuario introduzca una letra o un numero menor a 0 o mayor a 4*/
function ejecutar (){
do{
    solicitarDatos();// Solicita la opcion que quiere realizar el usuario
    realizarOperacion(); //Realiza la operacion
    repetirUltimaOperacion();//Seleccionar opcion tras ejecutar



}while(isNaN(eleccion) || eleccion<1 || eleccion>4 );
}


empezar();
