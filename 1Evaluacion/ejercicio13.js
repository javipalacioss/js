/*
Gestión de Inventario de Productos. Imagina que trabajas en una tienda en línea y tienes un inventario de productos.
Cada producto está representado como un objeto con las siguientes propiedades: nombre (nombre del producto), precio
(precio del producto), categoría (categoría del producto, como "ropa", "electrónica", etc.), disponible (indica si el producto
está en stock con true o false). Implementa la siguiente funcionalidad:
- Obtener los productos disponibles. Usando filter y una función flecha, obtén un nuevo array solo con los productos
disponibles.
- Incrementar precios de productos en una categoría. Usa map y una función flecha para incrementar el precio de todos los
productos de una determinada categoría en cantidad que deberá proporcionar el usuario (además de la categoría).
Genera un nuevo array de productos sin modificar el array original.
- Verificar si hay productos caros. Usa some y una función flecha para comprobar si hay algún producto que cueste más
de una cantidad introducida por el usuario. La función debe devolver true o false.
- Calcular el precio total de los productos en stock. Usa filter, map y reduce en conjunto con funciones flecha para calcular
el precio total de los productos disponibles.
- Obtener una lista de nombres de productos de una determinada categoría introducida por el usuario. Usa filter y
map para crear un array que solo contenga los nombres de los productos en la categoría introducida.
- Comprobar si todos los productos de una categoría están disponibles: Usa every y una función flecha para verificar si
todos los productos de la categoría introducida por el usuario están disponibles.
*/

//constructor
class Inventario {
    constructor(nombreProducto, precio, categoria, disponible) {
        this.nombreProducto = nombreProducto;
        this.precio = precio;
        this.categoria = categoria;
        this.disponible = disponible;
    }
}

//instancias de inventario
let producto1 = new Inventario("ordenador", 550, "Electrónica", true);
let producto2 = new Inventario("Mesa de oficina", 150, "Muebles", true);
let producto3 = new Inventario("Silla ergonómica", 80, "Muebles", true);
let producto4 = new Inventario("Sofá de 2 plazas", 300, "Muebles", false);
let producto5 = new Inventario("Camisa de algodón", 25, "Ropa", true);
let producto6 = new Inventario("Pantalón de mezclilla", 40, "Ropa", true);
let producto7 = new Inventario("Chaqueta de cuero", 120, "Ropa", false);
let producto8 = new Inventario("Teléfono móvil", 700, "Electrónica", true);
let producto9 = new Inventario("Auriculares inalámbricos", 100, "Electrónica", true);
let producto10 = new Inventario("Teclado mecánico", 60, "Electrónica", false);
console.log(producto1);

let productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10];

inicioPrograma();

function inicioPrograma() {
    let opcion;
    do {
        opcion = parseInt(prompt(`Menu:
            1. Ver productos disponibles
            2. Incrementar precio
            3. Verificar productos caros
            4. Calcular precio total de los productos disponibles
            5. Obtener lista de nombres de productos por categoría
            6. Ver productos disponibles por categoría
            7. Salir`));

        switch (opcion) {
            case 1: // obtener productos disponibles
                obtenerProductosDisponibles();
                break;
            case 2: //incrementar precios de productos de una categoría
                incrementarPrecio();
                break;
            case 3: //verifica si hay productos más caros que el precio indicado
                verificarProductosCaros();
                break;
            case 4: //calcula el precio total de todos los productos disponibles
                calcularPrecioTotalDisponibles();
                break;
            case 5: // lista de nombres de productos por categoría
                obtenerProductosPorCategoria();
                break;
            case 6: //comprueba si todos los elementos están disponibles
                comprobarDisponibilidadPorCategoria();
                break;

        }

    } while (opcion !== 7); //mientras no se seleccione 7 el menú seguirá mostrándose

}

//esta función se usará para comprobar las respuestas del usuario y validarla la opción elegida
function comprobarEntradaValor(valorInicio, valorFinal, respuestaUsuario) {

    //mientras sea igual a cadena vacía (aceptar),  sea igual a null (cancelar), sea igual a nan, sea mayor o menor a valor de inicio y valor final    //bucle while para mostrar error
    while (respuestaUsuario === "" || respuestaUsuario === null || isNaN(parseFloat(respuestaUsuario)) ||
        respuestaUsuario < valorInicio || respuestaUsuario > valorFinal) {

        respuestaUsuario = parseInt(prompt("Error, debes seleccionar una opción válida entre " + valorInicio + " y " + valorFinal));
    }

    return respuestaUsuario; //retorna la opción del usuario validada como number
}

function comprobarValorNumerico(respuestaUsuario) {
    while (respuestaUsuario === "" || respuestaUsuario === null || isNaN(parseFloat(respuestaUsuario)) ||
        respuestaUsuario < 0) {

        respuestaUsuario = parseInt(prompt("Error, debes seleccionar una precio válido"));
    }

    return respuestaUsuario; //retorna la opción del usuario validada como number


}


//obtener productos disponibles con funcion filter: devuelve un nuevo array
function obtenerProductosDisponibles() {
    let arrayProductosDisponibles = productos.filter(producto => producto.disponible); //producto hace referencia a cada objeto del array productos. Luego se accede a las propiedades de ese objeto

    let mensaje = "Productos disponibles: \n"; // crea un mensaje con los datos de los productos disponibles
    arrayProductosDisponibles.forEach(producto => {
        mensaje += `Nombre: ${producto.nombreProducto}, Precio: ${producto.precio}, Categoría: ${producto.categoria}\n`;
    });
    alert(mensaje);
    return arrayProductosDisponibles;

}

function simplificarCategorias() { //crea un array de categorías sin duplicados
    let arrayCategorias = productos.map(producto => producto.categoria); // se crea un array con todas las categorías
    //let categoriasSinDuplicados = [...new Set(arrayCategorias)]; //elimina todos los duplicados
    let categoriasSinDuplicados = Array.from(new Set(arrayCategorias)); //elimina los duplicados
    return categoriasSinDuplicados;  //devuelve un array de categorías
}

function mostrarCategorias(categoriasSinDuplicados) { //muestra un mensaje con las categorías disponibles
    let mensaje = "Categorías: \n"; // Crea un mensaje con las categorías
    categoriasSinDuplicados.forEach((categoria, index) => {
        mensaje += `${index + 1}. ${categoria}\n`;  // Agrega la categoría al mensaje
    });

    // Muestra el mensaje
    let categoria = parseInt(prompt(mensaje)); //muestra el mensaje y el usuario selecciona la opción
    categoria = comprobarEntradaValor(1, categoriasSinDuplicados.length, categoria); //llama al método que valida la opción del usuario. se usa .length como rango al no saber cuántas categorías hay

    return categoria; //devuelve la categoría seleccionada por el usuario
}

//incrementar precio de productos de una categoría
function incrementarPrecio() {
    let categoriasSinDuplicados = simplificarCategorias(); //array de categorias sin duplicados
    let categoria = mostrarCategorias(categoriasSinDuplicados); //categoria elegida por el usuario (number)

    let porcentajeAumento = parseInt(prompt("En cuánto quieres aumentar el precio %? (porcentaje)"));
    porcentajeAumento = comprobarEntradaValor(0, 100, porcentajeAumento); //valida la opción del usuario, el % debe ser mayor a 0 y menor de 100


    let categoriaSeleccionada = categoriasSinDuplicados[categoria - 1]; //se define una variable que guarde la categoría seleccionada. Se usa -1 ya que el array empieza en 0
   

    let productosAumentados = productos.map(producto => {
        if (producto.categoria === categoriaSeleccionada) {
            producto.precio += producto.precio * (porcentajeAumento / 100); // aumenta el precio de cada producto de la categoría seleccionada  
        }
    });

    obtenerProductosDisponibles(); //llama a la función que muestra los productos disponibles (se mostrarán los precios actualizados)
}

//Verificar si hay productos caros usando some para comprobar si hay algún producto que cueste más de una cantidad introducida por el usuario
function verificarProductosCaros() {
    let precioIntroducido = parseInt(prompt("Introduce un precio")); //solicita el precio
    precioIntroducido = comprobarValorNumerico(precioIntroducido);    //valida que el precio sea un número

    let preciosCaros = productos.some(producto => producto.precio >= precioIntroducido); //verifica si al menos un elemento del array cumple la condición

    if (preciosCaros) {
        alert("Existen productos iguales o más caros que " + precioIntroducido);
    } else {
        alert("No existen productos iguales o más caros que " + precioIntroducido);
    }

}

//Calcular el precio total de los productos en stock usando filter, map y reduce en conjunto con funciones flecha para calcular el precio total de los productos disponibles.
function calcularPrecioTotalDisponibles() {

    let productosDisponibles = obtenerProductosDisponibles(); //llama a la función que devuelve un nuevo arrray de productos disponibles usando filter    

    let arrayPrecios = productosDisponibles.map(producto => producto.precio); //crea un nuevo array solo con los precios de los productos disponibles

    let precioTotalProductos = arrayPrecios.reduce((acumulador, precio) => acumulador + precio, 0); //suma el precio de todos los valores del array (empezando en 0)
    console.log(precioTotalProductos);

    alert("el precio total de los productos disponibles es de " + precioTotalProductos);
}

/*Obtener una lista de nombres de productos de una determinada categoría introducida por el usuario usando filter y map para crear un array que
solo contenga los nombres de los productos en la categoría introducida.*/

function obtenerProductosPorCategoria() {
    let categorias = simplificarCategorias() //almacena en un array las categorias sin duplicados
    let categoriaUsuario = mostrarCategorias(categorias); //muestra al usuario las categorias y pide que seleccione une

    categoriaUsuario = categorias[categoriaUsuario - 1]; //se define una variable que guarde la categoría seleccionada. Se usa -1 ya que el array empieza en 0

    let productosCategoria = productos.filter(producto => producto.categoria === categoriaUsuario);

    let mensaje = "Productos en la categoría " + categoriaUsuario + ": \n"; // Crea un mensaje con las categorías
    productosCategoria.forEach((productos) => {
        mensaje += `${productos.nombreProducto}\n`;  // Agrega los productos al mensaje
    });

    alert(mensaje);
}

// Comprobar si todos los productos de una categoría están disponible usan every para verificar si todos los productos de la categoría introducida por el usuario están disponibles.
function comprobarDisponibilidadPorCategoria() {
    let categorias = simplificarCategorias() //almacena en un array las categorias sin duplicados
    let categoriaUsuario = mostrarCategorias(categorias); //muestra al usuario las categorias y pide que seleccione une

    categoriaUsuario = categorias[categoriaUsuario - 1]; //se define una variable que guarde la categoría seleccionada. Se usa -1 ya que el array empieza en 0

    let todosDisponibles = productos.every(producto => producto.disponible); //comprueba si todos los elementos cumplen la condición (si estan disponibles-true)
   
    if (todosDisponibles) {
        alert("Todos los productos de la categoria" + categoriaUsuario + " están disponibles");
    } else {
        alert("No todos los productos de la categoria " + categoriaUsuario + " están disponibles");
    }
}