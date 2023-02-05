function valmax(tableau){
let valeurpremiere = 0;
let valeurdeuxieme = 0;

for(let i = 0;  i < tableau.length; i++){
    if(tableau[i] > valeurpremiere){
        valeurdeuxieme = valeurpremiere;
        valeurpremiere = tableau[i];
    }
    else if (tableau[i] > valeurdeuxieme && tableau[i] < valeurpremiere){
        valeurdeuxieme = tableau[i]
    }
}
return[valeurpremiere, valeurdeuxieme];
}

let number = [90,4,5,6,7,8,9];

console.log(valmax(number));
