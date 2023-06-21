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
