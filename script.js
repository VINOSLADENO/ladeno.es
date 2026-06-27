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

window.addEventListener("scroll", function(){

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
