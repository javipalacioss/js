// Nombramos las variables.

let C;
let F;
let K;


// Pedir informacion mientras que la temperatura sea un numero, no este vacio y sea menor a -273.15
do{

    pedirCelsius();
    if (C < -273.15){

        alert("Error,debes introducir un numero valido")
    }
   
}while (isNaN(C) || C == null || (C<-273.15))


    F =parseFloat(F);
    K = parseFloat (K);
// Creamos una función para pedir la temperatura al usuario
function pedirCelsius(){

    C=prompt("Introduce la temperatura en Cª");
    //Parseamos la información que pedimos al usuario y la pasamos a numeros con decimales.
    C = parseFloat(C);
}

// Creamos una funcion para pasar los Celsius a Farehein
function calcularF (){

    F = (C*1,8)/32;
    alert (`La temperatura ${C} en Fahrenheit es ` +F);
}

// Creamos otra función para pasar los Celsius a Kelvin
function calcularK(){

    K = (C+25);
    alert (`La temperatura ${C} en Kelvin es ` + K);// `` Esto significa plantilla, las comillas... son la plantilla
}

// Llamamos a las funciones anteriores para que nos muestre los resultados
calcularF();
calcularK();
