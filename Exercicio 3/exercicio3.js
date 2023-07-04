/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

//função criada para exibir um resultado.
function showResult(frase) {
    document.write(frase);
}

let number = parseFloat(prompt("Insira um número"));

function numberPrime(number) {

    let operation = 1;
    let checks = 0;

    do {
        let result = number / operation;
        let integer = (result % 1) === 0;

        if (integer) {
            checks += result;
        }
        operation++

    }while (operation <= number)

            if (checks == (number + 1) || checks == 1) {
                showResult(number + " é um número primo");
            } else {
                showResult(number + " não é um número primo");
            }
    }

numberPrime(number);