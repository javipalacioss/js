/*
Imagina que tienes un sistema simple de autenticación que
permite a un usuario iniciar sesión y realizar ciertas acciones
según su rol. El sistema:

● Pregunta si el usuario está autenticado.
● Pregunta si el usuario tiene permiso de administrador.
● Si no tiene permisos de administrador, se le permite realizar acciones básicas (ver perfil, cambiar su contraseña, etc.).
● Si tiene permisos de administrador, puede acceder a funciones especiales (mostrar usuarios, eliminar, etc.).
● Se realizarán comparaciones entre variables booleanas para decidir el acceso a las funcionalidades.
● El usuario puede decidir salir del sistema o continuar probando con otro usuario.
*/


//Inicializamos en false las variables, en los metodos metereemos valor true si cumplimos la condicion
var autentificado = false;
var admin = false;

//MENU
do {
    var opcion = prompt(`*********LOGIN************
        1. Ver perfil
        2. Cambiar Contraseña
        3. Mostrar usuarios
        4. Eliminar usuarios
        5. Logueo nuevo User
        6. Salir
        ****************************`);

    switch (opcion) {
        case "1":
            alert("Mostrando perfil . . . \n LOADING . . . ");
            break;

        case "2":
            alert("Cambiando contraseña . . .  \n LOADING . . . ");
            break;

        case "3":
            // Solo muestra usuarios si es admin
            if (admin) {
                alert("Mostrando usuarios...");
            } else {
                alert("No tienes permiso para mostrar usuarios.");
            }
            break;

        case "4":
            // Solo  elimina si admin
            if (admin) {
                alert("Eliminando usuarios...");
            } else {
                alert("No tienes permiso para eliminar usuarios.");
            }
            break;

        case "5":
            // Llama a las funciones de autenticación y permisos
            autentificado = autentificador(); //Autentificamos el nuevo usurio
            if (autentificado) {
                admin = esadministrador(); //damos privilegio de admin o no
            } else {
                alert("ERROR. . . No puedes acceder.");
            }
            break;

        case "6":
            alert("Saliendo . . .");
            break;

        default:
            alert("Opción no válida, envía: \n1 para sí\n2 para no");
            break;
    }

} while (opcion !== "6");

// Función que verifica si el usuario está autenticado
function autentificador() {
    var autentificado;
    do {
        autentificado = prompt(`¿Estás autenticado?  \n1. Si \n2. No`);
    } while (autentificado !== "1" && autentificado !== "2");

    // Retorna 1 (True) si el usuario está autenticado de lo contrario false
    return autentificado === "1";
}

// Función que define si el usuario tiene permisos de administrador
function esadministrador() {
    var admin;
    do {
        admin = prompt(`¿Tienes permisos de administrador? \n1. Si\n2. No`);
    } while (admin !== "1" && admin !== "2");

    return admin === "1";
}