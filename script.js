const ageGate=document.getElementById("ageGate");
const button=document.getElementById("acceptAge");

const accepted=localStorage.getItem("ladeno18");

if(accepted==="yes"){
    ageGate.style.display="none";
}

button.addEventListener("click",()=>{

    localStorage.setItem("ladeno18","yes");

    ageGate.style.opacity="0";

    setTimeout(()=>{

        ageGate.style.display="none";

    },600);

});
