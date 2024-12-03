/*
16. Imagina que tienes un array de frases y quieres analizarlo
para obtener:

● La cantidad total de palabras en todas las frases.
● Un objeto de conteo de palabras, donde las claves son las
palabras (en minúsculas) y los valores son el número de
veces que aparecen.
● Una lista de las frases más largas, es decir, aquellas que
tienen más de un cierto número de palabras (por ejemplo,
más de 5 palabras).

*/

//Definimos el array de Frases:

var frases = [
    "Javascript es un lenguaje de programación poco tipado",
    "Php parece más facil",
    "Tenemos que practicar más los objetos y la funcionalidad del lenguaje",
    "Mal de muchos consuelo de tontos"
    ];
    
    //Metodo para contar la cantidad total de palabras:
    function contarPalabrasEnFrase(frases){ //recibe un array
        /*
    frase.split(/\s+/).length: split separa cada frase en palabras
    usando el patrón de expresión regular /\s+/,
    que indica uno o más espacios en blanco.
    .length cuenta cuántas palabras resultan de esta división.
        */
    var totalPalabrasEnArray = frases.reduce((total, frase) => total + frase.split(/\s+/).length, 0);
    return totalPalabrasEnArray;
    }
    
    //Objeto de conteo de palabras:
    function conteoPalabras() {
        /* usamos reduce para transformar en un array que toma cada frase del array frases.
        y contruimos un objeto con las apariciones
        conteo: acumulador, objeto que guarda palabras clave y apariciones
        frase: cada palabra del array frases
        */
        var conteoPalabras = frases.reduce((conteo, frase) => { //conteo: acumulador que contiene palabra como clave y numero de apariciones como valor
            // Convertir a minúsculas, dividir en palabras y recorrer cada palabra
            frase.toLowerCase().split(/\s+/).forEach(palabra => { //pasamos a minsculas, dividimos la frase en palabras, y recorremos cada palabra (foreach)
                //conteo palabra valor(el que sea), Ó vale 0, le sumamos 1
                conteo[palabra] = (conteo[palabra] || 0) + 1; //verficamos que conteo[palabra] existe, sino, usa 0 y se le suma 1 para la aparicion
                /*
    Por ejemplo, si palabra = "javascript" y es la primera vez que se encuentra,
    conteo["javascript"] será 0 + 1 = 1. En la siguiente aparición de "javascript",
    conteo["javascript"] será 1 + 1 = 2, y así sucesivamente.
                */
            });
            return conteo; // este conteo se devuelve de la funcion reduce
        }, {});
        //se devuelve el objeto final del conteo total de las palabras
        return conteoPalabras; //se retorna el conteo de palabras en minusc
    }
    
    //array de frases mas largas (mas de 5 palabras)
    var minPalabras=5; //creamos el minimo de numero de palabras en 5
    function frasesLargasArray(frases, minPalabras) { //recibe el array y el minimo de palabras
        //Creamos con filtrer un nuevo array. Cada frase se separa y se mira que la longitud sea mayor que la minima que entra como param
        var frasesLargas = frases.filter(frase => frase.split(/\s+/).length > minPalabras); //se añaden al nuevo array aquellas que sean mas largas de 5
        return frasesLargas; //devolvemo las frases que superan el minPalabras
    }
    
    //PRUEBAS:
    console.log("Total de palabras : "+ contarPalabrasEnFrase(frases));
    console.log("Conteo de palabras en el array de frases: ",  conteoPalabras()); //no se puede concatenar al imprimir, para que se vea el conteo
    console.log("Frases con más de "+minPalabras +" palabras: "+ frasesLargasArray(frases, minPalabras));
    