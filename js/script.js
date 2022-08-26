
//faire le calcul imc: poids / taille au carré

let btn = document.getElementById("btn");
let result= document.getElementById("result");
let image = document.getElementById("image");
let instruction = document.getElementById("instruction")
btn.addEventListener("click", () => {
    let poids = document.getElementById("poids").value;
    let taille = document.getElementById("taille").value;
    
    if(poids !== "" && taille !== ""){
        instruction.remove();
        let imc = poids / (taille ** 2);
        imc = Math.round(imc*100)/100;

        if((imc >= 18.5) && (imc <= 24.9)){
            result.innerHTML=("Votre imc est de : " + imc + ", votre corpulence est normale.");
        }
        else if ((imc >= 25 && imc <= 29.9)){
            result.innerHTML=("Votre imc est de : " + imc + ", vous etes en surpoids.");
        }
        else if ((imc >= 30 && imc <= 34.9)){
            result.innerHTML=("Votre imc est de : " + imc + ", vous etes en obésité.");
        }
        else if ((imc >= 30 && imc > 34.9)){
            result.innerHTML=("Votre imc est de : " + imc + ", vous etes en obésité sévère.");
        }
        else{
            result.innerHTML=("Votre imc est de :" + imc +", vous etes en sous poids");
        }
        image.style.visibility = "visible"; 
    }
    else{
        instruction.innerHTML=("Veuillez entrer votre poids/taille.");

    }
})


//si le resultat est inferieur est entre 18.5 et 25 corpulence normal; sinon si au dessus de 25 surpoids, sinon en dessous maigreur.

