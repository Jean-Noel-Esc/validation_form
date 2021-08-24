const inpUtilisateur = document.querySelector('.form-groupe:nth-child(1) input');
const inpMail = document.querySelector('.form-groupe:nth-child(2) input');
const inpMdp = document.querySelector('.form-groupe:nth-child(3) input');
const inpConfirme = document.querySelector('.form-groupe:nth-child(4) input');

const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');

inpUtilisateur.addEventListener('input', (e) => {
    if(e.target.value.length >= 3){
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/check.svg";
        allSpan[0].style.display = "none";
    }
    else{
        allImg[0].style.display = "inline";
        allImg[0].src = "ressources/error.svg";
        allSpan[0].style.display = "inline";

    }
})

inpMail.addEventListener('input', (e) => {

    const regexEmail = /\S+@\S+\.\S+/;

    if(e.target.value.search(regexEmail) === 0){

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/check.svg";
        allSpan[1].style.display = "none";

    } else if (e.target.value.search(regexEmail) === -1){

        allImg[1].style.display = "inline";
        allImg[1].src = "ressources/error.svg";
        allSpan[1].style.display = "inline";

    }

})

// Validation création du Mdp

let valeurInp;

//les symboles soit tous ce qui n'est pas lettres ou chiffres
const specialCar = /[^a-zA-Z0-9]/;
// toutes les lettres
const alphabet = /[a-z]/i;
// les chiffres
const chiffres = /[0-9]/;

// On créer un objet
// pour voir si 
// dans notre input il y a au moins 1 symbole 1e lettre et 1 chiffre

let objValidation = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}

inpMdp.addEventListener('input', (e) => {

    valeurInp = e.target.value;

    if(valeurInp.search(specialCar) !== -1){
        objValidation.symbole = 1;
    }
    if(valeurInp.search(alphabet) !== -1){
        objValidation.lettre = 1;
    }
    if(valeurInp.search(chiffres) !== -1){
        objValidation.chiffre = 1;
    }
    // gestion delete dans l'input 
    if(e.inputType = 'deleteContentBackward'){
        if(valeurInp.search(specialCar) === -1){
            objValidation.symbole = 0;
        }
        if(valeurInp.search(alphabet) === -1){
            objValidation.lettre = 0;
        }
        if(valeurInp.search(chiffres) === -1){
            objValidation.chiffre = 0;
        }
    } 
    // avec un for in on itere sur un objet
    // pour tester chaque propriétés de l'objet pour la validation
    let testAll = 0;
    for(const property in objValidation){
        if(objValidation[property] > 0){
            testAll++;
        }
    }
    // Si il n'y a pas assez d'input  
    if(testAll < 3){
        allSpan[2].style.display = "inline";
        allImg[2].style.display = "inline";
        allImg[2].src = "ressources/error.svg";
    } else {
        allSpan[2].style.display = "none";
        allImg[2].src = "ressources/check.svg";
    }

        // valider la force du mdp
        // valeur la plus basse
        if(valeurInp.length <= 6 && valeurInp.length > 0){
            allLigne[0].style.display = 'block';
            allLigne[1].style.display = 'none';
            allLigne[2].style.display = 'none';
        }
        // force moyenne
        else if (valeurInp.length > 6 && valeurInp.length <= 9) {
            allLigne[0].style.display = 'block';
            allLigne[1].style.display = 'block';
            allLigne[2].style.display = 'none';
        }
        //mdp fort
        else if (valeurInp.length > 9) {
            allLigne[0].style.display = 'block';
            allLigne[1].style.display = 'block';
            allLigne[2].style.display = 'block';
        }
        // si 0 input 
        else if (valeurInp.length === 0) {
            allLigne[0].style.display = 'none';
            allLigne[1].style.display = 'none';
            allLigne[2].style.display = 'none';
        }
    
})
//  check confirmation
// On compare la valeur de l'input a celle de l'input  valeurInp
// Si la length de la target value = 0  retour error ;
// Si la target value =  strictement celle de valeurInp  retour check;
// Sinon retour error ; 

inpConfirme.addEventListener('input', (e) => {

    if(e.target.value.length === 0){
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
    }
    else if(e.target.value === valeurInp){
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/check.svg";
    } else {
        allImg[3].style.display = "inline";
        allImg[3].src = "ressources/error.svg";
    }

})



/*
for...in
L'instruction for...in permet d'itérer sur les propriétés énumérables d'un objet qui ne sont pas des symboles. 
Pour chaque propriété obtenue, on exécute une instruction (ou plusieurs grâce à un bloc d'instructions).

InputEvent.inputType
The inputType read-only property of the InputEvent interface returns the type of change made to editable content. 
Possible changes include for example inserting, deleting, and formatting text.

valeur possible:
"deleteContentBackward"

*/
