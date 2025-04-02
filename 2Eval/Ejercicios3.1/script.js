// Se espera a que el DOM se cargue completamente
document.addEventListener("DOMContentLoaded", () =>{

    // ============================================================
    // ✅ EJERCICIO 1: Capturar eventos y eliminarlos con un botón
    // ============================================================

    // Crear un párrafo dinámicamente
    const parrafo = document.createElement("p");
    // Asignar texto al párrafo
    parrafo.textContent = "Pasa el mouse o haz click sobre mi";
    // Establecer estilo del borde del párrafo
    parrafo.style.border = "2px solid black";
    // Establecer el padding para separar el contenido del borde
    parrafo.style.padding = "10px";
    // Mostrar el párrafo como bloque en línea
    parrafo.style.display = "inline-block";

    // Crear un botón para eliminar los eventos del párrafo
    const btnEliminarEventos = document.createElement("button");
    // Asignar texto al botón
    btnEliminarEventos.textContent = "Eliminar eventos";

    // Agregar el párrafo al body del documento
    document.body.appendChild(parrafo);
    // Agregar el botón al body del documento
    document.body.appendChild(btnEliminarEventos);

    // Definir función que maneja el evento click en el párrafo
    function manejarClick() {
        alert("hiciste click en el parrafo")
    }

    // Definir función que maneja el evento mouseover para cambiar el fondo
    function manejarMouseOver() {
        parrafo.style.backgroundColor = "lightblue";
    }

    // Definir función que maneja el evento mouseout para restablecer el fondo
    function manejarMouseOut() {
        parrafo.style.backgroundColor = "";
    }

    // Agregar el evento click al párrafo
    parrafo.addEventListener("click", manejarClick);
    // Agregar el evento mouseover al párrafo
    parrafo.addEventListener("mouseover", manejarMouseOver);
    // Agregar el evento mouseout al párrafo
    parrafo.addEventListener("mouseout", manejarMouseOut);

    // Agregar un listener al botón para eliminar los eventos del párrafo
    btnEliminarEventos.addEventListener("click", () => {
        // Elimina el evento click
        parrafo.removeEventListener("click", manejarClick);
        // Elimina el evento mouseover
        parrafo.removeEventListener("mouseover", manejarMouseOver);
        // Elimina el evento mouseout
        parrafo.removeEventListener("mouseout", manejarMouseOut);
        // Notificar al usuario que se han eliminado los eventos
        alert("eventos eliminados");
    });
    
    // ============================================================
    // ✅ EJERCICIO 2: Botones que ejecutan métodos de un objeto
    // ============================================================

    // Definición del objeto persona con métodos para saludar y envejecer
    const persona = {
        nombre: "Juan",
        edad: 30,
        // Método saludar: usa una función flecha que muestra un mensaje
        saludar: () => {
            alert(`Hola, mi nombre es ${persona.nombre}`);
        },
        // Método envejecer: incrementa la edad y muestra un mensaje
        envejecer: () => {
            persona.edad++;
            alert(`Ahora tengo ${persona.edad} años`);
        }
    };

    // Crear botón para ejecutar el método saludar
    const btnSaludar = document.createElement("button");
    btnSaludar.textContent = "saludar";

    // Crear botón para ejecutar el método envejecer
    const bntEnvejecer = document.createElement("button");
    bntEnvejecer.textContent = "envejecer";

    // Agregar ambos botones al body
    document.body.appendChild(btnSaludar);
    document.body.appendChild(bntEnvejecer);

    // Agregar el evento click al botón saludar para ejecutar persona.saludar()
    btnSaludar.addEventListener("click", () => persona.saludar());
    // Agregar el evento click al botón envejecer para ejecutar persona.envejecer (aunque aquí se debe llamar la función, actualmente se usa como referencia)
    bntEnvejecer.addEventListener("click", () => (persona.envejecer));
    // Nota: Para que funcione correctamente se debería invocar la función: () => persona.envejecer()

    // Guardar el objeto persona en localStorage (se guarda en formato JSON)
    localStorage.setItem("persona", JSON.stringify(persona));

    // Recuperar el objeto persona desde localStorage y convertirlo de JSON a objeto
    const personaRecuperada = JSON.parse(localStorage.getItem("persona"));

    // Si se recuperaron datos, imprimirlos en la consola
    if (personaRecuperada) {
        console.log("datos recuperados: ", personaRecuperada);
    }

    // ============================================================
    // ✅ EJERCICIO 3: Galería de imágenes
    // ============================================================

    // Crear un contenedor para la galería de imágenes
    const galeria = document.createElement("div");
    galeria.id = "galeria";
    // Agregar el contenedor de la galería al body
    document.body.appendChild(galeria);

    // Crear la imagen principal de la galería
    const imagenPrincipal = document.createElement("img");
    imagenPrincipal.id = "imagen-principal";
    // Establecer la URL de la imagen principal
    imagenPrincipal.src = "https://farm9.staticflickr.com/8536/8671399450_7bcfbaaecd_b.jpg"; 
    // Hacer que la imagen se ajuste al 100% de su contenedor
    imagenPrincipal.style.width = "100%";
    // Limitar el ancho máximo a 400px
    imagenPrincipal.style.maxWidth = "400px";
    // Agregar la imagen principal al contenedor de la galería
    galeria.appendChild(imagenPrincipal);

    // Crear un contenedor para las miniaturas
    const contenedorMiniaturas = document.createElement("div");
    contenedorMiniaturas.id = "miniaturas";
    // Agregar el contenedor de miniaturas a la galería
    galeria.appendChild(contenedorMiniaturas);

    // Array de URLs de imágenes para las miniaturas
    const imagenes = [
        "https://farm9.staticflickr.com/8536/8671399450_7bcfbaaecd_b.jpg",
        "https://blog.foto24.com/wp-content/uploads/2019/11/fotografia_miniaturas_1.jpg",
        "https://blog.foto24.com/wp-content/uploads/2019/11/fotografia_miniaturas_16.jpg",
        "https://blog.foto24.com/wp-content/uploads/2019/11/fotografia_miniaturas_11.jpg",
        "https://blog.foto24.com/wp-content/uploads/2019/11/fotografia_miniaturas_8.jpg"
    ];

    // Recorrer el array de imágenes y crear una miniatura para cada una
    imagenes.forEach((src) => {
        const miniatura = document.createElement("img");
        // Asignar la URL de la imagen a la miniatura
        miniatura.src = src;
        // Establecer el ancho de la miniatura
        miniatura.style.width = "80px";
        // Agregar margen para separarlas
        miniatura.style.margin = "5px";
        // Cambiar el cursor al pasar sobre la imagen para indicar que es interactiva
        miniatura.style.cursor = "pointer";
        // Agregar la miniatura al contenedor de miniaturas
        contenedorMiniaturas.appendChild(miniatura);
    });

    // Agregar un evento click al contenedor de miniaturas
    contenedorMiniaturas.addEventListener("click", (e) => {
        // Buscar el elemento imagen más cercano al punto donde se hizo clic
        const imagenClickeada = e.target.closest("img");
        // Si se hizo clic en una imagen, actualizar la imagen principal con la URL de la miniatura clickeada
        if (imagenClickeada) {
            imagenPrincipal.src = imagenClickeada.src;
        }
    });

    // ============================================================
    // ✅ EJERCICIO 4: Cambiar color de fondo de los botones
    // ============================================================

    // Agregar un listener al contenedor de botones (identificado por id "contenedor-botones")
    document.getElementById("contenedor-botones").addEventListener("click", (e) => {
        // Buscar el botón clickeado, usando closest para asegurarnos de obtener un <button>
        const botonClickeado = e.target.closest("button");
        if (botonClickeado) {
            // Array de colores para elegir al azar
            const colores = ["yellow", "red", "blue", "green", "purple", "orange"]; // Lista de colores
            // Seleccionar un color aleatorio del array
            const colorAleatorio = colores[Math.floor(Math.random() * colores.length)]; // Selecciona uno al azar
            // Aplicar el color aleatorio como fondo del botón
            botonClickeado.style.backgroundColor = colorAleatorio; // Aplica el color
        }
    });

    // ============================================================
    // ✅ EJERCICIO 5: Mostrar código de la tecla presionada
    // ============================================================

    // Agregar un listener para el evento keydown en el input con id "campo-texto"
    document.getElementById("campo-texto").addEventListener("keydown", (e) =>{
        // Actualizar el contenido del párrafo con id "info-tecla" mostrando la tecla presionada
        document.getElementById("info-tecla").textContent = `Tecla presionada: ${e.key}`;
    });

    // ============================================================
    // ✅ EJERCICIO 6: Mostrar a qué lista pertenece un <li>
    // ============================================================

    // Agregar un listener al contenedor con id "listas" para detectar clics en elementos <li>
    document.getElementById("listas").addEventListener("click" , (e) => {
        // Buscar el <li> más cercano al punto donde se hizo clic
        const item = e.target.closest("li");
        if (item) {
            // Actualizar el párrafo con id "resultado-lista" indicando el id de la lista (<ul>) a la que pertenece el <li>
            document.getElementById("resultado-lista").textContent = `Lista seleccionada: ${item.closest("ul").id}`;
        }
    });

    // ============================================================
    // ✅ EJERCICIO 7: Contar clics en párrafos
    // ============================================================

    // Agregar un listener al contenedor con id "textos" para detectar clics en <p>
    document.getElementById("textos").addEventListener("click", (e) => {
        // Buscar el párrafo (<p>) clickeado
        const parrafo = e.target.closest("p");
        if (parrafo) {
            // Obtener el contador actual desde el atributo data-contador; si no existe, se usa 0
            let contador = parseInt(parrafo.dataset.contador) || 0;
            // Incrementar el contador
            contador++;
            // Guardar el nuevo valor en el atributo data-contador del párrafo
            parrafo.dataset.contador = contador;
            // Actualizar el texto del párrafo para mostrar el número de clics
            parrafo.textContent = `Parrafo ${contador} clics`;
        }
    });

    // ============================================================
    // ✅ EJERCICIO 8: Mostrar código de la tecla presionada (posición del mouse)
    // ============================================================

    // Agregar un listener para el evento mousemove en el área con id "area-mouse"
    document.getElementById("area-mouse").addEventListener("mousemove", (e) =>{
        // Actualizar el contenido del párrafo con id "posicion-mouse" mostrando las coordenadas del mouse
        document.getElementById("posicion-mouse").textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
    });

    // ============================================================
    // ✅ EJERCICIO 9: Agregar texto a la lista dinámica
    // ============================================================
    // Nota: Se vuelve a usar DOMContentLoaded, pero como ya estamos dentro de uno, no es necesario duplicarlo.
    document.addEventListener("DOMContentLoaded", function() {
        // Seleccionar el input y la lista dinámica usando sus IDs.
        const campoTexto = document.getElementById("campo-texto");
        const listaDinamica = document.getElementById("lista-dinamica");
    
        // Agregar un listener para el evento keydown en el input.
        campoTexto.addEventListener("keydown", function(e) {
            // Verificar si la tecla presionada es "Enter"
            if (e.key === "Enter") {
                // Prevenir el comportamiento por defecto (por ejemplo, enviar un formulario)
                e.preventDefault();
    
                // Obtener el texto ingresado en el input y eliminar espacios extra al inicio y final
                const texto = campoTexto.value.trim();
    
                // Solo proceder si el texto no está vacío
                if (texto !== "") {
                    // Crear un nuevo elemento <li>
                    const nuevoElemento = document.createElement("li");
                    // Asignar el texto ingresado como contenido del nuevo <li>
                    nuevoElemento.textContent = texto;
                    // Agregar el nuevo <li> al final de la lista dinámica usando appendChild()
                    listaDinamica.appendChild(nuevoElemento);
                    // Limpiar el campo de texto para permitir nuevos ingresos
                    campoTexto.value = "";
                }
            }
        });
    });

    // ============================================================
    // ✅ EJERCICIO 10: Resaltar elementos en la lista
    // ============================================================

    // Agregar un listener para el evento mouseover en la lista con id "lista-resaltable"
    document.getElementById("lista-resaltable").addEventListener("mouseover" , (e) =>{
        // Buscar el <li> más cercano al punto donde se hizo el mouseover
        const item = e.target.closest("li");
        // Si se encontró un <li>, cambiar su fondo a "aquamarine"
        if (item) item.style.backgroundColor = "aquamarine";
    });

    // Agregar un listener para el evento mouseout en la lista con id "lista-resaltable"
    document.getElementById("lista-resaltable").addEventListener("mouseout", (e) =>{
        // Buscar el <li> más cercano al punto donde se hizo el mouseout
        const item = e.target.closest("li");
        // Si se encontró un <li>, eliminar el color de fondo
        if (item) item.style.backgroundColor = "";
    });

    // ============================================================
    // ✅ EJERCICIO 11: Eliminar elementos con doble clic
    // ============================================================

    // Agregar un listener para el evento dblclick en la lista con id "lista-eliminable"
    document.getElementById("lista-eliminable").addEventListener("dblclick",(e) => {
        // Buscar el <li> más cercano al punto donde se hizo doble clic
        const item = e.target.closest("li");
        // Si se encontró un <li>, eliminarlo del DOM
        if (item) item.remove();
    });

    // ============================================================
    // ✅ EJERCICIO 12: Reordenar elementos con drag & drop
    // ===========================================================
    
    // Seleccionar la lista con id "lista-drag" para habilitar el drag & drop
    const listaDrag = document.getElementById("lista-drag");
    // Variable para almacenar el elemento que se está arrastrando
    let elementoArrastrado = null;
    
    // Agregar un listener para el evento dragstart en la lista de arrastrables
    listaDrag.addEventListener("dragstart", (e) =>{
        // Almacenar el elemento <li> que se está arrastrando
        elementoArrastrado = e.target.closest("li");
        // Establecer el efecto permitido para la operación de arrastrar (mover)
        e.dataTransfer.effectAllowed = "move";
    });

    // Agregar un listener para el evento dragover para permitir el drop
    listaDrag.addEventListener("dragover", (e) =>{
        // Prevenir el comportamiento por defecto para permitir el drop
        e.preventDefault();
    });

    // Agregar un listener para el evento drop en la lista de arrastrables
    listaDrag.addEventListener("drop",(e) =>{
        // Prevenir el comportamiento por defecto del drop
        e.preventDefault();
        // Buscar el elemento <li> destino donde se soltará el elemento arrastrado
        const destino = e.target.closest("li");
        // Si se tiene un elemento arrastrado, un destino válido y no se está soltando sobre sí mismo...
        if (elementoArrastrado && destino && elementoArrastrado !== destino) {
            // Insertar el elemento arrastrado después del destino (usando nextSibling para colocarlo correctamente)
            listaDrag.insertBefore(elementoArrastrado, destino.nextSibling)
        }
    });

    // ============================================================
    // ✅ EJERCICIO 13: Cambiar fondo con teclas R, G, B
    // ============================================================

    // Agregar un listener para el evento keydown a nivel de documento
    document.addEventListener("keydown", (e) => {
        // Definir un objeto con las teclas y sus colores correspondientes
        const colores = { "r": "red", "g": "green", "b": "blue" };
        // Si la tecla presionada coincide con alguna de las claves del objeto, cambiar el fondo del body
        if (colores[e.key]) {
            document.body.style.backgroundColor = colores[e.key];
        }
    });

});
