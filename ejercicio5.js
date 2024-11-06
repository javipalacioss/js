//pedir edad
let edad =parseInt( prompt("Dime tu edad"));
//verficicar edad
if (edad > 0 && edad !== null && edad < 125 ){
    alert("Tu edad el año que viene sera de " + (edad + 1) + " años")
}else{
    alert("Ingresa un numero valido porfavor")
}