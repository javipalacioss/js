// Esperamos a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
    
    // Lista de productos disponibles en la tienda
    const productos = [
        { id: 1, nombre: "Laptop", precio: 800 },
        { id: 2, nombre: "Teléfono", precio: 500 },
        { id: 3, nombre: "Auriculares", precio: 100 },
        { id: 4, nombre: "Mouse", precio: 40 }
    ];

    // Seleccionamos los elementos HTML donde mostraremos productos y carrito
    const contenedorProductos = document.getElementById("productos"); // Contenedor de productos
    const cuerpoCarrito = document.getElementById("carrito-body"); // Cuerpo de la tabla del carrito
    const totalCarrito = document.getElementById("total"); // Elemento donde mostramos el total
    const botonVaciar = document.getElementById("vaciar-carrito"); // Botón para vaciar el carrito

    // Recuperamos el carrito desde localStorage si existe, o lo inicializamos vacío
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Función para mostrar los productos en la tienda
    function mostrarProductos() {
        // Limpiamos el contenedor antes de agregar los productos
        contenedorProductos.innerHTML = ""; 

        // Recorremos el array de productos y los mostramos en pantalla
        productos.forEach(producto => {
            // Creamos un nuevo elemento <div> para cada producto
            const div = document.createElement("div");
            div.classList.add("col-md-3", "mb-3"); // Agregamos clases de Bootstrap para diseño

            // Usamos innerHTML para insertar la estructura HTML del producto dentro del div
            div.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5> <!-- Nombre del producto -->
                        <p class="card-text">Precio: $${producto.precio}</p> <!-- Precio del producto -->
                        <button class="btn btn-primary agregar-carrito" data-id="${producto.id}">Agregar</button> <!-- Botón para agregar al carrito -->
                    </div>
                </div>
            `;

            // Agregamos el producto al contenedor de productos en el HTML
            contenedorProductos.appendChild(div);
        });
    }

    // Función para actualizar la tabla del carrito
    function actualizarCarrito() {
        // Limpiamos la tabla del carrito antes de agregar nuevos productos
        cuerpoCarrito.innerHTML = ""; 

        let total = 0; // Variable para almacenar el total de la compra

        // Recorremos el carrito y agregamos cada producto a la tabla
        carrito.forEach((item, index) => {
            // Creamos una fila <tr> para cada producto en el carrito
            const fila = document.createElement("tr");

            // Usamos innerHTML para agregar las columnas dentro de la fila
            fila.innerHTML = `
                <td>${item.nombre}</td> <!-- Nombre del producto -->
                <td>$${item.precio}</td> <!-- Precio unitario -->
                <td>${item.cantidad}</td> <!-- Cantidad seleccionada -->
                <td><button class="btn btn-danger btn-sm eliminar" data-index="${index}">X</button></td> <!-- Botón para eliminar -->
            `;

            // Agregamos la fila completa al cuerpo de la tabla
            cuerpoCarrito.appendChild(fila);

            // Sumamos el precio total (precio * cantidad) del producto al total del carrito
            total += item.precio * item.cantidad;
        });

        // Mostramos el total calculado en la página
        totalCarrito.textContent = total.toFixed(2); // Mostramos solo 2 decimales

        // Guardamos el carrito actualizado en localStorage para que se mantenga al recargar la página
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    // Función para agregar productos al carrito
    function agregarAlCarrito(id) {
        // Buscamos el producto en la lista de productos usando su ID
        const producto = productos.find(p => p.id === id);

        // Verificamos si el producto ya está en el carrito
        const productoEnCarrito = carrito.find(item => item.id === id);

        if (productoEnCarrito) {
            // Si ya está en el carrito, aumentamos la cantidad
            productoEnCarrito.cantidad++;
        } else {
            // Si no está en el carrito, lo agregamos con cantidad 1
            carrito.push({ ...producto, cantidad: 1 });
        }

        // Actualizamos la tabla del carrito en pantalla
        actualizarCarrito();
    }

    // Función para eliminar un producto del carrito
    function eliminarDelCarrito(index) {
        // Eliminamos el producto del carrito según su posición (index)
        carrito.splice(index, 1);

        // Actualizamos la tabla del carrito en pantalla
        actualizarCarrito();
    }

    // Función para vaciar completamente el carrito
    function vaciarCarrito() {
        carrito = []; // Se vacía la lista de productos en el carrito
        actualizarCarrito(); // Se actualiza la tabla en pantalla
    }

    // EVENTOS

    // Evento para detectar clics en los botones "Agregar" dentro de los productos
    contenedorProductos.addEventListener("click", (e) => {
        if (e.target.classList.contains("agregar-carrito")) {
            const id = parseInt(e.target.dataset.id); // Obtenemos el ID del producto
            agregarAlCarrito(id); // Llamamos a la función para agregarlo al carrito
        }
    });

    // Evento para detectar clics en los botones "X" para eliminar productos del carrito
    cuerpoCarrito.addEventListener("click", (e) => {
        if (e.target.classList.contains("eliminar")) {
            const index = parseInt(e.target.dataset.index); // Obtenemos el índice del producto en el carrito
            eliminarDelCarrito(index); // Llamamos a la función para eliminarlo
        }
    });

    // Evento para vaciar el carrito cuando se haga clic en el botón "Vaciar Carrito"
    botonVaciar.addEventListener("click", vaciarCarrito);

    // Llamamos a las funciones iniciales para mostrar productos y cargar el carrito al abrir la página
    mostrarProductos();
    actualizarCarrito();
});
