/**
 * [M1S05] Ex 2 - Tradução de cores
 *
 * Escreve um programa que atribui um valor a uma variável `cor` em inglês e imprime
 * a tradução para a mesma cor em português. Utiliza uma estrutura condicional (switch)
 * para fazer o mapeamento das cores.
 */

//função criada para exibir um resultado.
function showResult(frase) {
    document.write(frase);
}

let color = prompt("Escolha uma cor primaria em inglês");

function colorTranslation() {
    switch (color) {
        case "red":
            showResult("Tradução de Red é: Vermelho");
            break;
        case "blue":
            showResult("Tradução de Blue é: Azul");
            break;
        case "green":
            showResult("Tradução de Green é: Verde");
            break;
        default:
            showResult("Cor inválida");
            break;
    }
}
colorTranslation();