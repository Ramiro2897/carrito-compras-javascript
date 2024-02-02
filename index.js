document.addEventListener('DOMContentLoaded', function () {
  const productos = document.querySelectorAll('.producto');
  const carritoHeader = document.getElementById('carrito-header');

  let carrito = [];

  productos.forEach(producto => {
    const botonAgregar = producto.querySelector('.pe p');
    botonAgregar.addEventListener('click', () => {
      const productId = producto.getAttribute('data-id');
      carrito.push({
        id: productId,
        nombre: producto.querySelector('.info').textContent
      });
      actualizarCarritoHeader();
    });
  });

  function actualizarCarritoHeader() {
    carritoHeader.innerHTML = `Carrito: ${carrito.length} productos`;
  }
});

