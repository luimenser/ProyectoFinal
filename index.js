// Animación inicial

window.onload = function() {
  document.querySelector(".imagen").classList.add("animacion");
  }
  
  // Eventos de los botones
  
  document.querySelector("#botonSiguiente").addEventListener("click", function() {
    window.location.href = "./pagina2.html";
  });
  
  document.querySelector("#botonSuscribirse").addEventListener("click", function() {
    window.location.href = "./formulario.html";
  });
  