/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

//função criada para exibir um resultado.
function showResult(frase) {
    document.write(frase);
    document.write("<br>");
}

let number = parseFloat(prompt("Insira um número de 0 a 1000"));
let limit = 1000;
let currentNumber = number;
let previousNumber = 1;

while (currentNumber < limit){
    showResult(number)
    number = previousNumber + currentNumber;
    previousNumber = currentNumber;
    currentNumber = number;
}



