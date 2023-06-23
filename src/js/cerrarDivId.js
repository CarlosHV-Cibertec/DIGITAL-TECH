

var setlogin = document.getElementById('cont_box_login');
setlogin.style.display = 'none';


var setcarrito = document.getElementById('carrito');
setcarrito.style.display = 'none';


// todo : oculta o abre un elemento en el dom
function toggleDiv(divId) {
  var div = document.getElementById(divId);
console.log(div)

  // !comprueba si el div esta en pantalla, sino lo abre o lo cierra.
  if (div.style.display === "none") {
    div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}
