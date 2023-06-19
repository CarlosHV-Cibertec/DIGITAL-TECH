// Obtener elementos del DOM
const marcaFiltros = document.querySelectorAll("#marca-filtros input[type='checkbox']");
const precioFiltro = document.getElementById("precio-filtro");
const precioValor = document.getElementById("precio-valor");
const aplicarFiltrosBtn = document.getElementById("aplicar-filtros-btn");
const carritoContn = document.getElementById("contenedor");

// Manejador de eventos para el botón "Aplicar filtros"
aplicarFiltrosBtn.addEventListener("click", aplicarFiltros);

// Función para aplicar los filtros
function aplicarFiltros() {
  const marcasSeleccionadas = Array.from(marcaFiltros)
    .filter(input => input.checked)
    .map(input => input.value);

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
    },
    {
      marca: "Samsung",
      modelo: "Galaxy S21",
      imagen: "./src/assets/img/celular2.jfif",
      precio: 999.99
    },
    {
      marca: "Apple",
      modelo: "iPhone 12",
      imagen: "./src/assets/img/celular3.jfif",
      precio: 1459.99
    },
    {
      marca: "Apple",
      modelo: "iPhone 12",
      imagen: "./src/assets/img/celular4.jfif",
      precio: 1459.99
    },
    {
      marca: "Samsung",
      modelo: "Galaxy S21",
      imagen: "./src/assets/img/celular5.jfif",
      precio: 999.99
      },
    {
      marca: "Apple",
      modelo: "iPhone 12",
      imagen: "./src/assets/img/celular6.jfif",
      precio: 1459.99
    },
    {
      marca: "Apple",
      modelo: "iPhone 12",
      imagen: "./src/assets/img/celular7.jfif",
      precio: 1459.99
    },
    {
      marca: "Apple",
      modelo: "iPhone 12",
      imagen: "./src/assets/img/celular8.jfif",
      precio: 1459.99
      
    },
    {
      marca: "Apple",
      modelo: "iPhone 12",
      imagen: "./src/assets/img/celular9.jfif",
      precio: 1459.99
    },
    {
      marca: "Apple",
      modelo: "iPhone 12",
      imagen: "./src/assets/img/celular10.jfif",
      precio: 1459.99
    },
     
    // Agrega más objetos de celulares aquí...
  ];
  
  // Función para generar el HTML de los celulares
  function mostrarCelulares() {
    const celularesContainer = document.getElementById("celulares");
    celularesContainer.innerHTML = "";
  
    celulares.forEach(celular => {
      const celularHTML = `
        <div class="celular">
          <img src="${celular.imagen}" alt="${celular.marca} ${celular.modelo}">
          <h3>${celular.marca} ${celular.modelo}</h3>
          <p>Precio: $${celular.precio}</p>
          <button onclick="agregarAlCarrito(${celular.precio})">Agregar al carrito</button>
        </div>
      `;
      celularesContainer.innerHTML += celularHTML;
    });
  }
  
  // Función para agregar un celular al carrito (ejemplo de implementación)
  function agregarAlCarrito(
    //parametros
      descripcion,
      imagen,
      precio

  ) {

    const addproductHTML = 
  `
  <div class="producto"> 
  <div class="imagenprod">
    <img src="${celulares.imagen}" alt="${celulares.marca} ${celulares.modelo}">
  </div>
  <div class="descripcion">
      <h4>${celulares.marca} ${celulares.modelo}</h4>
      <p>${precio} $</p>
  </div>
  <div class="removeProd"> 
      <p>x</p>
  </div>
</div>
  `;

  carritoContn.innerHTML += addproductHTML;

    // Implementa tu lógica para agregar el celular al carrito
    console.log("Celular agregado al carrito. Precio: dfd " + precio);
  }
  
  // Llama a la función mostrarCelulares al cargar la página
  mostrarCelulares();
  