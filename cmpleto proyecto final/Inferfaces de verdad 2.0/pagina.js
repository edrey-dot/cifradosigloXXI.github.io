const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});



window.addEventListener("load", cargar);

function cargar() {
    let itemlocal = localStorage.getItem("articulos");
    let preciolocal = localStorage.getItem("precio");

    if (itemlocal) {
        alert("Tus item han cargado");

        carrito = JSON.parse(itemlocal);
        precio = parseFloat(preciolocal);
        total.textContent = precio.toFixed(2);

        actualizar();
    }
}

function vaciar() {
  cuerpo.innerHTML = "";
  cuenta.innerHTML = "";
  precio = 0;
  carrito = [];
  localStorage.removeItem("articulos");
  localStorage.removeItem("precio");
  total.innerHTML = "";
}

botones.forEach(function(btn){
  btn.addEventListener("click", anadir);
});
window.onload = function() {
  window.location.href = "inventario.html#Comedores"; }
  window.onload = function() {
    window.location.href = "inventario.html#alcoba"; }

      
     

  AOS.init({
    duration: 1200, // Duración de la animación
    easing: 'ease-in-out', // Efecto de transición
    once: true   });