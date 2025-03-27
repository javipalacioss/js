//cargar contenido desde el dom con eventListener
document.addEventListener("DOMContentLoaded", () => {

    // referencia al campo de entrada donde el usuario escribe la tarea
    const inputTarea = document.getElementById("task-input");
    //referencia al botón que agrega una nueva tarea
    const botonAnadirTarea = document.getElementById("add-task-btn");
    //referencia al contenedor donde se mostrarán las tareas agregadas
    const contenedorListaTareas = document.getElementById("task-list-container");

    /*
    || []: Si getItem devuelve null, se asigna un array vacío [] como valor predeterminado.
    - Esto garantiza que tareas siempre sea un array, evitando errores al intentar manipularlo más adelante.
    */
    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

    //cargar tareas
    function cargarTareas() {
        //limpiamos antes de cargar
        contenedorListaTareas.innerHTML = "";

        tareas.forEach((tarea, index) => {
            //crear contenedor de la tarea
            const divTarea = document.createElement("div");
            divTarea.className = "d-flex justify-content-between align-items-center p-2 mb-2 border border-secondary rounded";

            //crear span con texto de la tarea
            const spanTarea = document.createElement("span");
            spanTarea.className = "flex-grow-1";
            spanTarea.textContent = tarea.text;

            if (tarea.completada) {
                spanTarea.classList.add("completed"); //
            }

            //contenedor botones
            const divBotones = document.createElement("div");

            //boton para marcar como completada
            const botonCompletar = document.createElement("button");
            botonCompletar.className = "btn btn-info btn-sm complete-btn mx-1";
            botonCompletar.textContent = "Completar";
            botonCompletar.addEventListener("click", () => marcarCompletada(index));

            //boton para eliminar la tarea
            const botonEliminar = document.createElement("button");
            botonEliminar.className = "btn btn-danger btn-sm remove-btn mx-1";
            botonEliminar.textContent = "Eliminar";
            botonEliminar.addEventListener("click", () => eliminarTarea(index));


            //agregar botones contenedor
            divBotones.appendChild(botonCompletar);
            divBotones.appendChild(botonEliminar);

            //agregar spa y botones al div de la tarea
            divTarea.appendChild(spanTarea);
            divTarea.appendChild(divBotones);

            //agregar tarea al contenedor principal
            contenedorListaTareas.appendChild(divTarea);
        });

        //ahora guardariamos el localStorage
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    //añadir tarea
    botonAnadirTarea.addEventListener("click", () => {
        const texto = inputTarea.value.trim();

        if (texto === "") return;

        tareas.push({ text: texto, completada: false });
        //limpiar input
        inputTarea.value = "";

        //funcion para cargar tareas(completar)
        cargarTareas();

    });

    //marcar como completada
    function marcarCompletada(index) {
        tareas[index].completada = !tareas[index].completada; 
        cargarTareas();
    }

    //eliminar tarea
    function eliminarTarea(index) {
        tareas.splice(index, 1); //eliminar en la posicion index
        cargarTareas();
    }

    cargarTareas();

});