/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */
function showResult(frase) {
    document.write(frase);
    document.write("<br>");
}

alert("Função calculadora, vamos calcular dois números");
let numberOne = parseFloat(prompt("Informe o primeiro número"));
let numberTwo = parseFloat(prompt("Informe o segundo número"));
let operator = prompt("Somar '+' | Diminuir '-' | Multiplicar '*' | Dividir '/'");

function calculator(numberOne, numberTwo){
    switch(operator) {
        case "+":
            return numberOne + numberTwo;
        case "-":
            return numberOne - numberTwo;
        case "*":
            return numberOne * numberTwo;
        case "/":
            return numberOne / numberTwo;
    } 
}

showResult(calculator(numberOne, numberTwo, operator));