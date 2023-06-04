{
    "usuarios" ; [
      {
        "nombre": "Usuario1",
        "contraseña": "contraseña1"
      },
      {
        "nombre": "Usuario2",
        "contraseña": "contraseña2"
      },
      {
        "nombre": "Usuario3",
        "contraseña": "contraseña3"
      },
      {
        "nombre": "Usuario4",
        "contraseña": "contraseña4"
      },
      {
        "nombre": "Usuario5",
        "contraseña": "contraseña5"
      }
    ]
}
 

// Abrir ventana modal de inicio de sesión
document.getElementById("loginBtn").addEventListener("click", function() {
document.getElementById("loginModal").style.display = "block";
});

// Cerrar ventana modal
document.querySelectorAll(".close").forEach(function(element) {
element.addEventListener("click", function() {
document.getElementById("loginModal").style.display = "none";
document.getElementById("registerModal").style.display = "none";
});
});

// Mostrar formulario de registro
document.getElementById("registerBtn").addEventListener("click", function() {
document.getElementById("loginForm").style.display = "none";
document.getElementById("registerForm").style.display = "block";
});

// Mostrar formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function(event) {
event.preventDefault(); // Evitar el envío del formulario

// Obtener los valores del formulario
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var rememberMe = document.getElementById("rememberMe").checked;

// Aquí puedes realizar la validación de usuario y contraseña

// Cerrar ventana modal y actualizar el logo con el usuario
document.getElementById("loginModal").style.display = "none";
document.getElementById("loginBtn").innerHTML = '<img src="./img/user.png" alt="Usuario" width="32" height="32"> ' + username;
});

// Mostrar formulario de inicio de sesión después de registrarse
document.getElementById("registerForm").addEventListener("submit", function(event) {
event.preventDefault(); // Evitar el envío del formulario

// Obtener los valores del formulario de registro
var name = document.getElementById("name").value;
var lastName = document.getElementById("lastName").value;
var email = document.getElementById("email").value;
var birthdate = document.getElementById("birthdate").value;
var passwordReg = document.getElementById("passwordReg").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var terms = document.getElementById("terms").checked;

// Aquí puedes realizar la validación del formulario de registro

// Mostrar mensaje de usuario registrado
alert("Usuario registrado correctamente.");

// Cerrar ventana modal de registro y mostrar ventana modal de inicio de sesión
document.getElementById("registerModal").style.display = "none";
document.getElementById("loginModal").style.display = "block";
});
