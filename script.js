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

        const y = window.scrollY + 120;

        // HERO
        if (y < filosofia.offsetTop) {

            navbar.classList.remove("dark");
            navbar.classList.add("light");

        }

        // FILOSOFÍA
        else if (y < vino.offsetTop) {

            navbar.classList.remove("light");
            navbar.classList.add("dark");

        }

        // EL VINO
        else if (y < esencia.offsetTop) {

            navbar.classList.remove("dark");
            navbar.classList.add("light");

        }

        // LA ESENCIA + CONTACTO
        else {

            navbar.classList.remove("light");
            navbar.classList.add("dark");

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
