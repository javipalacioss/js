

     opcionUsuario=parseInt(prompt("¿Deseas cargar el script? \n1 = si \n2 = no"));
    if (opcionUsuario === 2 || isNaN(opcionUsuario)) {
        alert("Has elegido no hacer funcionar la pagina");
        opcionUsuario = 2;  
        } else if(opcionUsuario === 1){
        alert("Has elegido entrar en la pagina web y que haga su funcionalidad");
        opcionUsuario = 1;  
    }

    cargarPagina(opcionUsuario);

function cargarPagina(opcionUsuario) {
    if (opcionUsuario === 1) {
        alert("Cargando contenido pagina web");
        document.addEventListener("DOMContentLoaded", () =>{
    
            const contenedorPadre = document.getElementById("container");
            const divPrueba = document.getElementById("prueba");
            const divPodcast = document.getElementsByClassName("podcast");
        
            divPrueba.innerHTML('');
            divPodcast.innerHTML('');
        
            genero = divPrueba.getAttribute(data-genero);
            fila = divPrueba.getAttribute(data-fila);
            columna = divPrueba.getAttribute(data-columna);
        
            
            
                divPrueba.addEventListener("click" , () =>{

                                        //<a target="_blank" href="">
                                        //<a href="seo.html">Pulse aqui para registrar su actividad y mandarla a terceros<a>    

                    pPrueba = document.createElement("p");
                    pPrueba.textContent = "Se esta reproduciendo una pista de audio del genero: "+  genero;
                    
                    aPrueba = document.createElement("a");
                    link = divPrueba.getElementsByTagName("src");
                    aPrueba.textContent = "Para seguir descubriendo nuevos temas visite: " + link;

                    aPrueba2 = document.createElement("a");
                    aPrueba2.textContent = "Pulse aqui para registrar su actividad y mandarla a terceros";

                    divPrueba.appendChild(pPrueba);
                    divPrueba.appendChild(aPrueba);
                    divPrueba.appendChild(aPrueba2);

                    cancion.push({ titulo: genero, fila: fila, columna: columna });
                    localStorage.setItem("cancion", JSON.stringify(cancion));



                });
        
                divPodcast.addEventListener("click" , () =>{
        
                    
                    pPodcast = document.createElement("p");
                    pPodcast.textContent = "Se esta reproduciendo una pista de audio del genero: "+  genero;
                    
                    aPodcast = document.createElement("a");
                    link = divPodcast.getElementsByTagName("src");
                    aPodcast.textContent = "Para seguir descubriendo nuevos temas visite: " + link;

                    aPodscast2 = document.createElement("a");
                    aPodscast2.textContent = "Pulse aqui para registrar su actividad y mandarla a terceros";

                    divPrueba.appendChild(aPodcast);
                    divPrueba.appendChild(aPodcast);
                    divPrueba.appendChild(aPodscast2);

                    cancion.push({ titulo: genero, fila: fila, columna: columna });
                    localStorage.setItem("cancion", JSON.stringify(cancion));
                    
                });



        
        
            
            
        })
}
}


