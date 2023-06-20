const carOff = document.getElementById("carrito");

carOff.style.display = "none";

// todo : oculta o abre un elemento en el dom
function toggleDiv(divId) {
  var div = document.getElementById(divId);
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}

// * logica de carrito de compras

//variables del carrito
// const carritoContn = document.getElementById("contenedor");
// const carrito = [];
// var cantProdAdd = 0;
// var precioTotal = 0;
// Función para agregar un celular al carrito (ejemplo de implementación)
// function agregarAlCarrito(ruta, marca, modelo, precio) {

// Generar un identificador único para el producto
// const prodSelect = {
//   id: setIdUnico(),
//   marca: marca,
//   modelo: modelo,
//   imagen: ruta,
//   precio: precio,
// };

//añadir diseño de producto seleccionado a carrito
//   const addproductHTML =
//       `
//       <div class="producto">
//       <div class="imagenprod">
//         <img src="${ruta}" alt="${marca} ${modelo}">
//       </div>
//       <div class="descripcion">
//           <h4>${marca} ${modelo}</h4>
//           <p>${precio} $</p>
//       </div>
//       <div class="removeProd">
//           <p>x</p>
//       </div>
//     </div>`;

// precioTotal += precio;
// carritoContn.innerHTML += addproductHTML;
// carrito.push(prodSelect);
//   // Implementa tu lógica para agregar el celular al carrito
//   console.log(carrito);
// }

// function setIdUnico (){
//   return cantProdAdd++;
// }
