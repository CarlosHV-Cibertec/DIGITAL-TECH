
// ! variables del carrito
const prodSelecItm = document.getElementById("icnCar_itm");
const carritoContn = document.getElementById("contenedor");
const subTotal = document.getElementById("subTotalprecio");
const pay = document.getElementById("pay");
const totalpagar = document.getElementById('totalpagar');
const resumen = document.getElementById('resumen');


const iconopago = document.getElementById('iconopago');
const descuento = document.getElementById("descuento");
var descuentofinal;
var Entrega = 0;

const carrito = [];
var cantProdAdd;
var precioTotal = 0;
var totpagar = 0;
var descuentoTotal = 0
var resumenProductos;
verificarCarritoVacio(carrito.length);

// todo: Función para agregar un celular al carrito (ejemplo de implementación)
function agregarAlCarrito(ruta, marca, modelo, precio) {
  // -- añadir diseño de producto seleccionado a carrito
  const prodSelect = {
    id: "CE" + setIdUnico(),
    marca: marca,
    modelo: modelo,
    imagen: ruta,
    precio: precio,
  };

  const addproductHTML = `
          <div class="producto" id="${prodSelect.id}">
          <div class="imagenprod">
            <img src="${ruta}" alt="${marca} ${modelo}">
          </div>
          <div class="descripcion">
            <h4>${marca} ${modelo}</h4>
            <p>${precio} $</p>
          </div>
          <div class="removeProd" onclick="eliminarDelCarrito('${prodSelect.id}', ${prodSelect.precio})">
            <p>x</p>
          </div>
        </div>`;

  carrito.push(prodSelect);
  precioTotal += precio;

  // -- se añade un nuevo elemento al carrito
  carritoContn.innerHTML += addproductHTML;

  setCantProdsSelec();
  verificarCarritoVacio(carrito.length);
  setSubTotal(precioTotal);
  calcularDescuento(carrito.length);

}

function verificarCarritoVacio(cantprod) {
  const carritoVacio = `
    <div id="alertaProducto">
    <p>No has Añadido productos.</p>
    </div>
    `;

  const alertaProducto = document.getElementById("alertaProducto");
  if (cantprod < 1) {
    if (!alertaProducto) {
      carritoContn.innerHTML += carritoVacio;
    }
  } else {
    if (alertaProducto) {
      carritoContn.removeChild(alertaProducto);
    }
  }
}


function removeAlerta(identifier) {
  var remover = document.getElementById(identifier);
  carritoContn.removeChild(remover);
}
function removeElements(identifier) {
  var remover = document.getElementById(identifier);
  carritoContn.removeChild(remover);
}

function setIdUnico() {
  return carrito.length + 1;
}

function setCantProdsSelec() {
  prodSelecItm.innerText = carrito.length;
}

function setSubTotal(total) {
  var numero = parseInt(subTotal.innerText);
  numero = total;
  subTotal.innerText = numero.toFixed(2);
}

function eliminarDelCarrito(id, precio) {
  const indice = carrito.findIndex((producto) => producto.id === id);

  if (indice !== -1) {
    carrito.splice(indice, 1);
    precioTotal -= precio;
    // Actualizar la visualización del carrito y el precio total
    subTotal.innerText = precioTotal.toFixed(2);
    removeElements(id);
    setSubTotal(precioTotal);
    calcularDescuento(carrito.length);
    setCantProdsSelec();
    verificarCarritoVacio(carrito.length);

  }
}





function calcularDescuento(cantida) {
  const descuentoPorItem = 10;
  descuentoTotal = descuentoPorItem * cantida;

  preciopagar(descuentoTotal);
  descuento.innerText = descuentoTotal.toFixed(2);

}


//code

function preciopagar(desc) {

  totpagar = precioTotal - desc;

  totalpagar.innerText = totpagar.toFixed(2);
}










function pagar() {
  var productos = carrito.map(producto => `${producto.marca} ${producto.modelo}`);
  resumenProductos = productos.join(', ');

  if (carrito.length == 0) {
    resumenProductos = "agrega elementos a tu carrito :) \n";
  }

  new QRCode(iconopago, resumenProductos + " total a pagar: " + totpagar);


}