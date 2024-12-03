function calculadora() {
    debugger;
    let opcionUsuario=parseInt(prompt("¿Que operacion desea realizar:? \n1.Sumar \n2.Restar \n3.Multiplicar \n4.Dividir \n5.Salir"));
    opcionUsuario=validacionOpcionUsuario(opcionUsuario);
       
           
            while (opcionUsuario!=5) {

                let primerNumeroUsuario=parseInt(prompt("Introduzca el primer numero para realizar la operacion"));
                let segundoNumeroUsuario=parseInt(prompt("Introduzca el segundo numero para realizar la operacion"));
                primerNumeroUsuario=validacionNumeroUsuario1(primerNumeroUsuario);
                segundoNumeroUsuario=validacionNumeroUsuario2(segundoNumeroUsuario);
               
                   
                    switch (opcionUsuario) {
                        case 1:
                            let suma=primerNumeroUsuario + segundoNumeroUsuario;
                            alert("suma :" + suma);
                            break;
                        case 2:
                            let resta=primerNumeroUsuario - segundoNumeroUsuario;
                            alert("resta :" + resta);
                            break;
                        case 3:
                            let multiplicacion=primerNumeroUsuario * segundoNumeroUsuario;
                            alert("multiplicacion :" + multiplicacion);
                            break;
                        case 4:
                            let division;
                            if (primerNumeroUsuario==0 || segundoNumeroUsuario==0) {
                                division=0;
                            }
                            else{
                                division=primerNumeroUsuario / segundoNumeroUsuario;
                            }
                           
                            alert("division :" + division);
                            break;    
                        default:
                            break;
                   
                    }
                opcionUsuario=parseInt(prompt("¿Que operacion desea realizar:? \n1.Sumar \n2.Restar \n3.Multiplicar \n4.Dividir \n5.Salir"));
                opcionUsuario=validacionOpcionUsuario(opcionUsuario);
            }
           
            alert("Hasta Pronto");    

}  



function validacionOpcionUsuario(opcion) {
   

    while ((opcion< 0 || opcion>5 || isNaN(opcion) )) {
        opcion=parseInt(prompt("OPCION INVALIDA.¿Que operacion desea realizar:? \n1.Sumar \n2.Restar \n3.Multiplicar \n4.Dividir \n5.Salir"));
           
    }
    return opcion;
}
function validacionNumeroUsuario1(numero1) {
    while (isNaN(numero1)) {
        numero1=parseInt(prompt("OPCION INVALIDA.Introduzca el primer numero para realizar la operacion"));
    }
    return numero1;
}

function validacionNumeroUsuario2(numero2) {
    while (isNaN(numero2)) {
        numero2=parseInt(prompt("OPCION INVALIDA.Introduzca el segundo numero para realizar la operacion"));
    }
    return numero2;
}


calculadora();
