/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e exibe todas as palavras que possuem
 * mais de 5 caracteres. Utiliza a estrutura de repetição for of para percorrer o array.
 */
 
//função criada para exibir um resultado.
function showResult(frase) {
    document.write(frase);
    document.write("<br>");
}

let words = [
    "biscoito","praia","lazer","sol","montanha","céu","paralelepipido"
];

for (const word of words) {
    if(word.length > 5){
    showResult(word);
    }
}
