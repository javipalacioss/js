/*10. Imagina que tienes un sistema simple de autenticación que
permite a un usuario iniciar sesión y realizar ciertas acciones
según su rol. El sistema:
● Pregunta si el usuario está autenticado.
● Pregunta si el usuario tiene permiso de administrador.
● Si no tiene permisos de administrador, se le permite
realizar acciones básicas (ver perfil, cambiar su
contraseña, etc.).
● Si tiene permisos de administrador, puede acceder a
funciones especiales (mostrar usuarios, eliminar, etc.).
● Se realizarán comparaciones entre variables booleanas
para decidir el acceso a las funcionalidades.
● El usuario puede decidir salir del sistema o continuar
probando con otro usuario.
*/

function autenticacion() {
    let nombre;
    let contrasenia;
    var opcion;
    let admin = false;//boleano para comprobar si el usuario es o no administrador
    let error="La opcion que ha introducido no es correcta";
    let error2="Los valores que ha introducido no son correctos, por favor intentelo de nuevo";


    do {//Inicio un do while en el que doy al usuario 2 opciones a elegir

        alert("¿Que desea hacer?\n 1.Iniciar sesion \n 2.Salir del programa")//Muestro al usuario las opciones

        opcion = parseInt(prompt("Escoja una opcion"));//Le pido al usuario que elija una opcion

        if (opcion == 2) {//Si elige la opcion 2, muestro un mensaje de despedida antes de cerrar el programa
            alert("Saliendo del sistema...");
        }

        else if (opcion == 1) {//Si elige la opcion 1, pido al usuario nombre y contraseña para iniciar sesion
            do {

                nombre = prompt("introduzca su nombre (debe poseer 5 caracteres como minimo)");
                contrasenia = prompt("Introduzca su contraseña (debe poseer 5 caracteres como minimo)");

                if (nombre.length < 5 || contrasenia.length < 5) {//Si la contraseña o el nombre tienen una
                    //longitud menor que 5...

                    alert(error2);
                    //muestro un mensaje de error al usuario.
                }
            } while (nombre.length < 5 || contrasenia.length < 5);//Este do while se reproducira hasta que
            //el usuario introduzca un nombre y una contrasesaña de al menos 5 de longitud.






            opcion = prompt("¿Es usted administrador? (Introduzca y (si) o n (no))");//Pregunto al usuario
            //si es administrador.

            if (opcion == "y") {//Si responde 'y'


                admin = true;//admin cambiara su valor a true.
            }

            if (admin) {//mientras que admin sea true..
                do {//Inicio un do while.

                    alert("Se ha logueado como administrador, puede ejecutar las siguientes opciones:\n 1.Ver perfil\n 2.Cambiar Contraseña\n 3.Mostrar usuarios\n 4.Borrar usuarios\n 5.Desconectar");
                    //Aviso al usuario de que se ha registrado como administrador y le muestro las opciones
                    //disponibles.

                    opcion = parseInt(prompt("Escoja una opcion"));//Pido al usuario introducir una opcion.



                    switch (opcion) {
                        case 1: alert("Nombre de usuario: " + nombre + ", " + "contraseña " + contrasenia);
                        //Si elige la opcion 1, le muestro al usuario al usuario su propia informacion
                            break;
                        case 2:
                        //Si elige la opcion 2...

                            let contraseniaRespaldo = contrasenia;//Creo una copia de la actual contraseña del
                            //usuario.

                            contrasenia = prompt("Introduzca su nueva contraseña (debe poseer 5 caracteres como minimo)");
                            //Pido al usuario la nueva contraseña.
                           
                            if (contrasenia.length >= 5) {//Si la contraseña tiene una longitud mayor o igual
                                // a 5...

                                alert("La contraseña se ha cambiado correctamente");//Aviso al usuario de la
                                //operacion exitosa.
                                alert("Nueva contraseña: " + contrasenia);//Le muestro su nueva contraseña
                           
                            } else {//En otro caso
                                alert(error2);//Aviso de que su contraseña no esta bien escrita.
                                contrasenia = contraseniaRespaldo;//restauro la contraseña original del
                                //usuario.
                            }
                            break;


                        case 3: alert("Esta opcion esta en proceso");
                            break;

                        case 4: alert("Esta opcion esta en proceso");
                            break;


                        case 5: alert("Hasta la proxima");//Si el usuario escoge la opcion 5
                            admin = false;//admin pasa a falso para poder romper el bucle.
                            break;

                        default: alert(error);//Muestro un mensaje
                        //de error cuando el usuario escoja una opcion fuera de rango.
                    }


                } while (admin)//Este do while se sigue reproduciendo mientras admin sea true.

            } else {//En caso de que el usuario no sea administrador.

                do {//Inicio un do while.

                    alert("Se ha logueado como usuario sin privilegios, puede ejecutar las siguientes opciones:\n 1.Ver perfil\n 2.Cambiar Contraseña\n 3.Desconectar");
                    //Aviso al usuario de que esta logueado como usuario normal y le muestro las opciones
                    //disponibles.

                    opcion = parseInt(prompt("Escoja una opcion"));//Le pido que escoja una opcion.


                    switch (opcion) {
                        case 1: alert("Nombre de usuario: " + nombre + ", " + "contraseña " + contrasenia);
                        //Si elige la opcion 1, le muestro al usuario al usuario su propia informacion.
                       
                            break;
                        case 2:
                            //Si elige la opcion 2..
                            //Los pasos a seguir seran los mismos que con la opcion 2 del swicht admin.
                            let contraseniaRespaldo = contrasenia;
                            contrasenia = prompt("Introduzca su nueva contraseña (debe poseer 5 caracteres como minimo)");
                            if (contrasenia.length >= 5) {
                                alert("La contraseña se ha cambiado correctamente");
                                alert("Nueva contraseña: " + contrasenia);
                            } else {
                                alert (error2);
                                contrasenia = contraseniaRespaldo;
                            }
                            break;

                        case 3: alert("Hasta la proxima");//Se muestra un mensaje de despedida.
                            break;

                        default: alert (error);
                        ;//Muestro un mensaje
                        //de error cuando el usuario escoja una opcion fuera de rango.
                    }

                } while (opcion != 3);//Este do while se sigue reproduciendo mientras que opcion no tenga un
                //'3' como valor.
            }

        }else{
            alert(error);//Muestro un mensaje de error en el do while principal que anida a los demas do while
            // en caso de que se escoja una opcion fuera de rango.
        }

    } while (opcion != 2);//Este es el do while principal, se reproducira una y otra vez hasta que el usuario
    //escoja la opcion 2.
}

autenticacion();