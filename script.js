document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       VERIFICACIÓN DE EDAD
    ========================== */

    const ageGate = document.getElementById("ageGate");
    const button = document.getElementById("acceptAge");

    if (ageGate && button) {

        if (localStorage.getItem("ladeno18") === "yes") {

            ageGate.style.display = "none";

        } else {

            button.addEventListener("click", function () {

                localStorage.setItem("ladeno18", "yes");

                ageGate.style.opacity = "0";

                setTimeout(function () {

                    ageGate.style.display = "none";

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }, 600);

            });

        }

    }

    /* ==========================
       BARRA DE NAVEGACIÓN
    ========================== */

    const navbar = document.querySelector(".navbar");
    const filosofia = document.getElementById("filosofia");
    const vino = document.getElementById("vino");
    const esencia = document.getElementById("esencia");

    function updateNavbar() {
    const navHeight = navbar.offsetHeight;
    const y = window.scrollY + navHeight;
    const contacto = document.getElementById("contacto");

    // HERO — transparente, letras blancas
    if (y < filosofia.offsetTop + navHeight) {
        navbar.classList.remove("dark", "translucent");
        navbar.classList.add("light");
    }
    // EL ORIGEN — translúcida, letras negras
    else if (y < vino.offsetTop + (navHeight / 2)) {
        navbar.classList.remove("light", "translucent");
        navbar.classList.add("dark");
    }
    // EL VINO — translúcida, letras blancas
    else if (y < esencia.offsetTop + navHeight) {
        navbar.classList.remove("light", "dark");
        navbar.classList.add("translucent");
    }
    // ESENCIA — translúcida, letras negras
    else if (y < contacto.offsetTop + navHeight) {
        navbar.classList.remove("light", "translucent");
        navbar.classList.add("dark");
    }
    // CONTACTO — translúcida, letras blancas
    else {
        navbar.classList.remove("light", "dark");
        navbar.classList.add("translucent");
    }
}

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);
/* ==========================
   MENÚ MÓVIL
========================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function(){

    navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", function(){

        navMenu.classList.remove("active");

    });

});
});
