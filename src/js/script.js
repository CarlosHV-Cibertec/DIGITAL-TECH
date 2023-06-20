function mostrarProductos(identifier, arrayproductos) {
  contenedor.innerHTML = "";

  arrayproductos.forEach((celular) => {
    const diseñoProducto = `
          <div class="celular">
            <img src="${celular.imagen}" alt="${celular.marca} ${celular.modelo}">
            <h3>${celular.marca} ${celular.modelo}</h3>
            <p>Precio: $${celular.precio}</p>
            <button onclick="agregarAlCarrito('${celular.imagen}','${celular.marca}', '${celular.modelo}', ${celular.precio})">Agregar al carrito</button>
          </div>
        `;
    identifier.innerHTML += diseñoProducto;
  });
}
