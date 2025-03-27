//cargar contenido desde el dom con eventListener
document.addEventListener("DOMContentLoaded", () => {

    // referencia al campo de entrada donde el usuario escribe la tarea
    const inputTarea = document.getElementById("task-input");
    //referencia al botón que agrega una nueva tarea
    const botonAnadirTarea = document.getElementById("add-task-btn");
    //referencia al contenedor donde se mostrarán las tareas agregadas
    const contenedorListaTareas = document.getElementById("task-list-container");

    //recupera la lista de tareas almacenadas en localStorage y la convierte de formato JSON a un array de objetos JavaScript
    /*
    || []: Si JSON.parse(...) devuelve null, se asigna un array vacío [] como valor predeterminado.
    - Esto garantiza que tareas siempre sea un array, evitando errores al intentar manipularlo más adelante.
    */
    let tareas = (localStorage.getItem("tareas")) || [];

    //añadir tarea
    agregarTarea.addEventListener("click", () => {
        const texto = taskInput.value.trim();

        if (texto === "") return;

        tareas.push({ text: texto, completada: false });
        inputTarea.value = "";

        //funcion para cargar tareas(completar)
        cargarTareas();

    });

    //marcar como completada
    function marcarCompletada(index) {
        tareas[index].completed = !tareas[index].completada; 
        cargarTareas();
    }

    //eliminar tarea
    function eliminarTarea(index) {
        tareas.splice(index, 1); //eliminar en la posicion index
        renderizarTareas();
    }

    cargarTareas();

});