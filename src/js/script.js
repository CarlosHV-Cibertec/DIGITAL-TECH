function mostrarProductos(identifier, arrayproductos) {
  contenedor.innerHTML = "";

  arrayproductos.forEach((celular) => {
    const diseñoProducto = `
          <div class="celular">
            <img src="${celular.imagen}" alt="${celular.marca} ${celular.modelo}">
            <h3>${celular.marca} ${celular.modelo}</h3>
            <p>Precio: $${celular.precio}</p>
            <button onclick="agregarAlCarrito('${celular.imagen}','${celular.marca}', '${celular.modelo}', ${celular.precio})">Agregar al carrito </ion-icon></button>
          </div>
        `;
    identifier.innerHTML += diseñoProducto;
  });
}


//--   esta funcion nos permite mostrar los productos, recoge como parametros el id del div que va a contener a los productos. y como segundo parametro se usa un array de  los productos.
//-- se usa un SWITCH PARA PODER VALIDAR EN QUE PAGINA NOS ENCONTRAMOS ASI SE PASARA EL ARRAY CORRECTO.