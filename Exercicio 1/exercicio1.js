/**
 * [M1S05] Ex 1 - Classificação de idade
 *
 * Escreve um programa que atribui um valor a uma variável `idade` e determina
 * em qual categoria ela se enquadra: criança (0-12 anos), adolescente (13-17 anos),
 * adulto (18-59 anos) ou idoso (60 anos ou mais). Utiliza uma estrutura condicional
 * (if, else if, else).
 */

//função criada para exibir um resultado.
function showResult(frase) {
    document.write(frase);
}
let yourName = prompt("Informe seu nome");
let age = parseFloat(prompt(yourName + " ,qual a sua idade?"));

function determinesAge(age) {
    if (age >= 0 && age <= 12) {
        showResult(yourName + ", você é considerado(a) uma criança!");
    }else if(age >= 13 && age <= 17){
        showResult(yourName + ", você é considerado(a) um adolescente!");
    }else if(age >= 19 && age <= 59){
        showResult(yourName + ", você é considerado(a) um adulto(a)!");
    }else if (age >= 60){
        showResult(yourName + ", você é considerado(a) um idoso(a)!");
    }
}

determinesAge(age);