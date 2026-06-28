document.addEventListener("DOMContentLoaded", function () {

    const ageGate = document.getElementById("ageGate");
    const button = document.getElementById("acceptAge");

    if (!ageGate || !button) return;

    // Si ya aceptó anteriormente
    if (localStorage.getItem("ladeno18") === "yes") {
        ageGate.style.display = "none";
        return;
    }

    button.addEventListener("click", function () {

        localStorage.setItem("ladeno18", "yes");

        ageGate.style.opacity = "0";

        setTimeout(function () {
            ageGate.style.display = "none";

            // Volver al inicio de la página (HERO)
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 600);

    });

});
const navbar = document.querySelector(".navbar");

const hero = document.querySelector(".hero");
const filosofia = document.getElementById("filosofia");
const vino = document.getElementById("vino");
const contacto = document.getElementById("contacto");

function updateNavbar(){

    const y = window.scrollY + 120;

    if(y < filosofia.offsetTop){

        navbar.classList.add("light");
        navbar.classList.remove("dark");

    }else if(y >= filosofia.offsetTop && y < vino.offsetTop){

        navbar.classList.add("dark");
        navbar.classList.remove("light");

    }else if(y >= vino.offsetTop && y < contacto.offsetTop){

        navbar.classList.add("light");
        navbar.classList.remove("dark");

    }else{

        navbar.classList.add("dark");
        navbar.classList.remove("light");

    }

}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("load", updateNavbar);
