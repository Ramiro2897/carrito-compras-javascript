const carrito = document.querySelector('.carrito');
const modalProductos = document.querySelector('.elementos-elegidos');
const productos = document.querySelector('.productos');
const cerrar = document.querySelector('.cerrar');
const body = document.body;

  carrito.addEventListener('click', function(){
  modalProductos.style.display = 'flex';
  productos.style.display = 'none';
  document.body.style.overflow = "hidden";
})

cerrar.addEventListener('click', function(){
  modalProductos.style.display = 'none';
  productos.style.display = 'flex';
  document.body.style.overflow = "";
})

// productos
const datosProductos = [
  { id: 1, nombre: "Reloj", precio: 2000 },
  { id: 2, nombre: "Suéter", precio: 3500 }
];

function generarProductos() {
  datosProductos.forEach(producto => {
    const productoExistente = document.querySelector(`.producto[data-id="${producto.id}"]`);
    if (productoExistente) {
      productoExistente.querySelector('.info').textContent = producto.nombre;
      productoExistente.querySelector('.p').textContent = producto.precio;
    }
  });
}
generarProductos();


function agregarAlCarrito(nombre, precio) {
  const carritoItemsContainer = document.querySelector('.carrito-items');

  const carritoItem = document.createElement('div');
  carritoItem.classList.add('carrito-item');
  carritoItem.innerHTML = `<p>${nombre} - ${precio}</p>`;

  carritoItemsContainer.appendChild(carritoItem);
}

const addCarritoIcons = document.querySelectorAll('.add-carrito');
addCarritoIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const productoContainer = icon.closest('.producto');
    const nombreProducto = productoContainer.querySelector('.info').textContent;
    const precioProducto = productoContainer.querySelector('.p').textContent;

    agregarAlCarrito(nombreProducto, precioProducto);
  });
});


