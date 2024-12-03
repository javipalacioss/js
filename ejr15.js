/*Ejercicio15
15. Imagina que estás desarrollando un sistema para analizar
comentarios de usuarios sobre productos en una tienda en
línea. Utilizando el objeto String y funciones como: trim,
toLowerCase, toUpperCase, length, includes, indexOf, slice,
replace, replaceAll o trim; implementa la siguiente
funcionalidad:
● Contar la longitud de cada comentario.
● Buscar palabras clave específicas.
● Cortar y mostrar solo un fragmento del comentario.
● Limpiar el comentario de espacios innecesarios y reemplazar
palabras problemáticas.
● Contar palabras o verificar si el comentario es demasiado
extenso.
*/
 
 
function contarLongitud(){
   
    let comentario= aniadirComentario();
    
     alert("Comentario " + comentario +   ", Longitud: " + comentario.length);
    
    
 }
 function buscarPalabrasClave(){
     let comentario=aniadirComentario();//Pido al usuario introducir un comentario
    let palabraClave = comentario.includes(aniadirComentario());//Pido al usuario que introduzca una pala-
    //bra clave
    alert("¿La palabra clave introducida existe? " + palabraClave);//Muestro la palabra clave
 }
 
 
 
 
 
 function cortarComentario(){
     let comentario=aniadirComentario();//Pido al usuario que escriba un comentario
     alert("Longitud del comentario " + comentario.length);//Aviso de la longitud del comentario
     let posicion1=parseInt(prompt("Introduzca la primera posicion"));//Pido al usuario la primera posicion
     //por la que cortar el texto
     let posicion2=parseInt(prompt("Introduzca la segunda posicion"));//Pido al usuario la segunda posicion
     //por la que cortar el texto
     alert("Comentario cortado: " + comentario.slice(posicion1,posicion2));//Corto el comentario usando
     //las 2 posiciones introducidas por el usuario
    
 }
 function depurarComentario(){
     let comentario=aniadirComentario();
     let resultado=comentario;//Si quiero que el resultado me muestre la palabra
     //reemplazada mas adelante en el bucle for in, debo declarar ya resultado al
     //principio y almacenar el comentario en resultado
     let palabrasProblematicas = {
         "ña" : "nia",
         "ño" : "nio",
         "ñe" : "nie",
         "ñi" : "ni",
         "ñu" : "niu",
         "Cabrón": "****",
        
     }
     for( palabra in palabrasProblematicas){//Recorro el mapa con un for in donde palabra es
         //ls clave actual y palabrasPorblematicas el array o mapa en cuestion(en este caso mapa)
         resultado=resultado.replaceAll(palabra,palabrasProblematicas[palabra]);//Aqui remplazo
         //el resultado en funcion del valor que almacene dentro, para remplazar el resultado
         //a su valor remplazado equivalente,entre parentesis pongo que se busque la palabra que coincida
         //con la que esta actualmente almacenada en resultado,esto hara que le bucle vaya itinerando entre las
         //claves que tiene almacenadas y las vaya comparando con el valor actual de resultado,hasta encontrar
         //la clave que coincida con la palabra almacenada en resultado, luego en palabrasProblematicas[palabra],
         // estoy indicando que quiero sacar el valor palabra(palabra es la clave), ese valor sera la palabra
         //que reemplace a la palabra coincidente en resultado, por ejemplo si en resultado tengo cabron,
         //cabron se reemplazara como maldito y agraciado caballero (cabron es la clave y maldito y agraciado caballero
         // el valor).
     }
     resultado=resultado.trim();//Le quito los espacios inecesarios al principio y final del texto.
     alert(resultado);//Muestro el resultado con el reemplazo de texto aplicado
  
 }
 function contarEspacios(){
     let comentario=aniadirComentario();//Pido al usuario un comentario
     let contador=0;
     comentario=comentario.trim();//Le quito los espacios inecesarios al principio y final del comentario.
     for (i=0; i<comentario.length; i++){
        
         if(comentario[i].includes(" ")){//Si la posicion actual de la cadena introducida como comentario
             //tiene un espacio...
             contador++;//incremento el contador
            
         }
     }
    
     //alert(comentario);
     alert(contador + " espacios tiene el comentario.");//Muestro los espacios entre palabras dentro del
     //comentario
 }
 
 
 
 
 
 
 function aniadirComentario(){
     let comentario;
    
         do{
             comentario=prompt("Introduzca un comentario");
        
    
             if(comentario.length<4 || comentario.length>120){
                 alert("Su comentario no cumple con la longitud minima o la maxima (min 4, max 120), intentelo de nuevo.");
             }
            
    
         }while(comentario.length<4 || comentario.length>120 );
    
     
    
     return comentario;
    
            
     }
 
 
 
 //contarLongitud();
 buscarPalabrasClave();
 //cortarComentario();
 //depurarComentario();
 //contarEspacios();