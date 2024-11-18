  const departmentCityMapping = {
            "Amazonas": ["Leticia"],
            "Antioquia": ["Medellín", "Rionegro", "Envigado", "Itagüí", "Bello", "Sabaneta", "La Ceja", "Caldas", "Fredonia", "Copacabana"],
            "Arauca": ["Arauca", "Tame", "Arauquita", "Fortul", "Saravena"],
            "Atlántico": ["Barranquilla", "Soledad", "Malambo", "Puerto Colombia", "Sabanalarga", "Galapa", "Juan de Acosta", "Piohacha"],
            "Bolívar": ["Cartagena", "Magangué", "Turbaná", "Santa Catalina", "Mompox", "María la Baja"],
            "Boyacá": ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá", "Samacá", "Paipa", "Tibasosa", "Moniquirá", "Berbeo"],
            "Caldas": ["Manizales", "Chinchiná", "Villamaría", "La Dorada", "Riosucio", "Pácora", "Neira", "Viterbo", "Marquetalia"],
            "Caquetá": ["Florencia", "Curillo", "San Vicente del Caguán", "Solano", "El Paujil", "La Montañita"],
            "Casanare": ["Yopal", "Hato Corozal", "Támara", "Maní", "Nunchía", "San Luis de Palenque", "Tauramena"],
            "Cauca": ["Popayán", "Cauca", "Piendamo", "Totoró", "El Tambo", "Patía", "La Sierra", "Almaguer", "San Sebastián"],
            "Cesar": ["Valledupar", "Aguachica", "Bosconia", "La Paz", "Curumani", "San Diego", "Manaure"],
            "Chocó": ["Quibdó", "Rio Sucio", "Lloró", "Bojayá", "Bagadó", "Carmen de Atrato", "Acandí"],
            "Córdoba": ["Montería", "Ciénaga de Oro", "Sahagún", "Lorica", "Cereté", "Tuchín", "San Bernardo del Viento", "Moñitos", "Montelíbano"],
            "Cundinamarca": ["Bogotá", "Soacha", "Chía", "Zipaquirá", "Fusagasugá", "Tocancipá", "Funza", "Cota", "Madrid"],
            "Guainía": ["Inírida"],
            "Guaviare": ["San José del Guaviare"],
            "Huila": ["Neiva", "Pitalito", "Campoalegre", "La Plata", "Altamira", "Íquira", "Tello", "Suaza", "Rivera"],
            "La Guajira": ["Riohacha", "Maicao", "San Juan del Cesar", "Albania", "Uribia"],
            "Magdalena": ["Santa Marta", "Ciénaga", "Aracataca", "El Retén", "Zapatoca"],
            "Meta": ["Villavicencio", "Acacías", "Restrepo", "Guamal", "San Martín", "Puerto López"],
            // ... puedes seguir añadiendo los demás departamentos y sus ciudades
        };

          // Función para actualizar las ciudades según el departamento seleccionado
          document.getElementById("department").addEventListener("change", function() {
            const department = this.value;
            const citySelect = document.getElementById("city");

            // Limpiar las ciudades previas
            citySelect.innerHTML = "<option value=''>Selecciona tu ciudad</option>";

            if (departmentCityMapping[department]) {
                departmentCityMapping[department].forEach(function(city) {
                    const option = document.createElement("option");
                    option.value = city;
                    option.textContent = city;
                    citySelect.appendChild(option);
                });
            }
        });

      // Función para obtener parámetros de la URL
      function getQueryParameter(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Capturar el nombre del mueble desde la URL
    const producto = getQueryParameter('producto');

    if (producto) {
        // Si el parámetro 'producto' existe, lo coloca en el campo 'furniture'
        document.getElementById('furniture').value = producto;
    }

// Enviar mensaje a través de WhatsApp cuando el formulario se envía
document.getElementById('furnitureForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const name = document.getElementById('name').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const department = document.getElementById('department').value;
    const city = document.getElementById('city').value;
    const furniture = document.getElementById('furniture').value;
    const category = document.getElementById('category').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    let paymentDetails = "";

    // Opciones de pago
    if (paymentMethod === "Credito") {
        const creditOption = document.getElementById('paymentOptionCredito').querySelector('select').value;
        paymentDetails = `Método de pago: ${paymentMethod} - ${creditOption}`;
    } else {
        const paymentOptionContado = document.getElementById('paymentOptionContado').querySelector('select').value;
        paymentDetails = `Método de pago: ${paymentMethod} - ${paymentOptionContado}`;
    }

    // Formar el mensaje
    const message = `Nombre: ${name}\n` +
                    `Número de WhatsApp: ${whatsapp}\n` +
                    `Departamento: ${department}\n` +
                    `Ciudad: ${city}\n` +
                    `Mueble: ${furniture}\n` +
                    `Categoría: ${category}\n` +
                    `Pago: ${paymentDetails}`;

    // Número de WhatsApp al que se enviará el mensaje
    const phoneNumber = '3154255686'; // Pon tu número de WhatsApp aquí

    // Crear la URL de WhatsApp con el mensaje prellenado
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirigir a WhatsApp
    window.location.href = whatsappURL;
});

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