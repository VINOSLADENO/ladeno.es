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
    const contacto = document.getElementById("contacto");

    function updateNavbar() {

        const y = window.scrollY + 120;

        if (y < filosofia.offsetTop) {

            navbar.classList.add("light");
            navbar.classList.remove("dark");

        } else if (y < vino.offsetTop) {

            navbar.classList.add("dark");
            navbar.classList.remove("light");

        } else if (y < contacto.offsetTop) {

            navbar.classList.add("light");
            navbar.classList.remove("dark");

        } else {

            navbar.classList.add("dark");
            navbar.classList.remove("light");

        }

    }

    updateNavbar();

    window.addEventListener("scroll", updateNavbar);

});
