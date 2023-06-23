
// ! variables del carrito
const prodSelecItm = document.getElementById("icnCar_itm");
const carritoContn = document.getElementById("contenedor");
const subTotal = document.getElementById("subTotalprecio");

const carrito = [];
var cantProdAdd;
var precioTotal = 0;

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
}

function verificarCarritoVacio(cantprod) {
  const carritoVacio = `
    <div id="alertaProducto">
    <p>No has Añadido productos.</p>
    </div>
    `;

  if (cantprod == 0) {
    carritoContn.innerHTML += carritoVacio;
  } else if (cantprod == 1) {
    removeElements("alertaProducto");
  } else {
    //fin
  }
}

function removeElements(identifier) {
  var remover = document.getElementById(identifier);
  carritoContn.removeChild(remover);
}

function setIdUnico() {
  return cantProdAdd++;
}

function setCantProdsSelec() {
  var numero = parseInt(prodSelecItm.innerText);
  numero++;
  prodSelecItm.innerText = numero.toString();
}

function setSubTotal(total) {
  var numero = parseInt(subTotal.innerText);
  numero = total;
  subTotal.innerText = numero.toFixed(2) + " $";
}

function eliminarDelCarrito(id, precio) {
  const indice = carrito.findIndex((producto) => producto.id === id);

  if (indice !== -1) {
    carrito.splice(indice, 1);
    precioTotal -= precio;

    // Actualizar la visualización del carrito y el precio total
    console.log("recibi la señal");

    subTotal.innerText = precioTotal.toFixed(2) + " $";
    // setSubTotal(precioTotal);
    // setCantProdsSelec();
    verificarCarritoVacio(carrito.length);
  }
}

//code
