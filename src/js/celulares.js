// Obtener elementos del DOM
const marcaFiltros = document.querySelectorAll(
  "#marca-filtros input[type='checkbox']"
);
const precioFiltro = document.getElementById("precio-filtro");
const precioValor = document.getElementById("precio-valor");
const aplicarFiltrosBtn = document.getElementById("aplicar-filtros-btn");

// Manejador de eventos para el botón "Aplicar filtros"
aplicarFiltrosBtn.addEventListener("click", aplicarFiltros);

// Función para aplicar los filtros
function aplicarFiltros() {
  const marcasSeleccionadas = Array.from(marcaFiltros)
    .filter((input) => input.checked)
    .map((input) => input.value);

  const precioMaximo = precioFiltro.value;

  // Realizar lógica de filtrado según las marcas seleccionadas y el precio máximo
  // ...

  // Ejemplo de salida
  console.log("Marcas seleccionadas:", marcasSeleccionadas);
  console.log("Precio máximo:", precioMaximo);
}

// Datos de ejemplo de celulares
const celulares = [
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/celular1.jfif",
    precio: 1459.99,
    id: "ce01",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21",
    imagen: "./src/assets/img/celular2.jfif",
    precio: 999.99,
    id: "ce02",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/celular3.jfif",
    precio: 1459.99,
    id: "ce03",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/celular4.jfif",
    precio: 1459.99,
    id: "ce04",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21",
    imagen: "./src/assets/img/celular5.jfif",
    precio: 999.99,
    id: "ce05",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/celular6.jfif",
    precio: 1459.99,
    id: "ce06",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/celular7.jfif",
    precio: 1459.99,
    id: "ce07",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/celular8.jfif",
    precio: 1459.99,
    id: "ce08",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/celular9.jfif",
    precio: 1459.99,
    id: "ce09",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/celular10.jfif",
    precio: 1459.99,
    id: "ce10",
  },
];

//Array de objetos para compus
const computadoras = [
  {
    marca: "LOLJ",
    modelo: "php 3",
    imagen: "./src/assets/img/pc1.jpg",
    precio: 4500.99,
    id: "co01",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21",
    imagen: "./src/assets/img/pc2.jfif",
    precio: 999.99,
    id: "co02",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/pc3.jfif",
    precio: 1459.99,
    id: "co03",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/pc4.jfif",
    precio: 1459.99,
    id: "co04",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21",
    imagen: "./src/assets/img/pc1.jpg",
    precio: 999.99,
    id: "co05",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/pc2.jfif",
    precio: 1459.99,
    id: "co06",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/pc3.jfif",
    precio: 1459.99,
    id: "co07",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/pc4.jfif",
    precio: 1459.99,
    id: "co08",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/pc1.jpg",
    precio: 1459.99,
    id: "co09",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/pc2.jfif",
    precio: 1459.99,
    id: "co10",
  },
];

//Array de objetos para laptops
const laptops = [
  {
    marca: "LOLJ",
    modelo: "php 3",
    imagen: "./src/assets/img/laptop1.jpg",
    precio: 4500.99,
    id: "co01",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21",
    imagen: "./src/assets/img/laptop2.jfif",
    precio: 999.99,
    id: "co02",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/laptop3.jpg",
    precio: 1459.99,
    id: "co03",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/laptop4.jpg",
    precio: 1459.99,
    id: "co04",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21",
    imagen: "./src/assets/img/laptop5.jpg",
    precio: 999.99,
    id: "co05",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/laptop6.jpg",
    precio: 1459.99,
    id: "co06",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/laptop7.jfif",
    precio: 1459.99,
    id: "co07",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/laptop8.jfif",
    precio: 1459.99,
    id: "co08",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/laptop9.jfif",
    precio: 1459.99,
    id: "co09",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/laptop10.jfif",
    precio: 1459.99,
    id: "co10",
  },
];

// Array de objetos para tablets
const tablets = [
  {
    marca: "LOLJ",
    modelo: "php 3",
    imagen: "./src/assets/img/tablet1.jfif",
    precio: 4500.99,
    id: "co01",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21",
    imagen: "./src/assets/img/tablet2.jpg",
    precio: 999.99,
    id: "co02",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/tablet3.jfif",
    precio: 1459.99,
    id: "co03",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/tablet2.jpg",
    precio: 1459.99,
    id: "co04",
  },
  {
    marca: "Samsung",
    modelo: "Galaxy S21",
    imagen: "./src/assets/img/tablet1.jfif",
    precio: 999.99,
    id: "co05",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/tablet3.jfif",
    precio: 1459.99,
    id: "co06",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/tablet7.jpg",
    precio: 1459.99,
    id: "co07",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/tablet1.jfif",
    precio: 1459.99,
    id: "co08",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/tablet2.jpg",
    precio: 1459.99,
    id: "co09",
  },
  {
    marca: "Apple",
    modelo: "iPhone 12",
    imagen: "./src/assets/img/tablet3.jfif",
    precio: 1459.99,
    id: "co10",
  },
];

// ! buscamos el id donde pondremos los productos:
const contenedorProductos = document.getElementById("contenedorProductos");

// -- function simpleficada: se usan parametros identifier(identificador de un div), arrayproductos(se da un array de productos para ser mostrad)
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

//pasamos los parametros para que se añandan los array independiente del productos
mostrarProductos(contenedorProductos, celulares);
mostrarProductos(contenedorProductos, computadoras);

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

//mostrarCelulares al cargar la página
mostrarCelulares();

//mostrarTablets al cargar la página
mostrarTablets();

//mostrarComputadoras al cargar la página
mostrarComputadoras();

//mostrarComputadoras al cargar la página
mostrarLaptops();
