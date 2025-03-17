    //pedir hora
    let hora =parseInt(prompt("Dime la hora"));
while (isNaN(hora) || isNaN(minuto) || isNaN(segundo)) {
    //pedir hora
let hora =parseInt(prompt("Dime la hora"));
//verificar
if (hora >= 0 && hora <= 23 && !isNaN(hora)){
    alert("Has introducido una hora valida");
    //pedir minutos
    let minuto =parseInt(prompt("Dime los minutos"));
    //verificar
    if (minuto >= 0 && minuto <= 59 && !isNaN(minuto)){
        alert("Has introducido los minutos validos");
         //pedir segundos
         let segundo =parseInt(prompt("Dime los segundos"));
         //verificar
        if (segundo >= 0 && segundo <= 59 && !isNaN(segundo)){
        alert("Has introducido los segundos validos");
        segundo++;
        //verificar
        if (segundo > 59 ) {
            segundo = 0;
            minuto++;
        }
        //verificar
        if(minuto > 59){
            minuto = 0;
            hora++;
        }
        //verificar
        if (hora > 23) {
            hora = 0;
        }
        //mostramos hora
        alert("La hora es: " + hora + " : " + minuto + " : " + segundo);
    } else{
        //si falla en algo mostramos 
        alert("Has introducido la hora incorrecta, porfavor intentelo de nuevo mas tarde")
            }   
        }
    }
}

