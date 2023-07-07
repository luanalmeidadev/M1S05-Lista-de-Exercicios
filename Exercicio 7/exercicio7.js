/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */
//função criada para exibir um resultado.
function showResult(frase) {
    document.write(frase);
    document.write("<br>");
}

let array = ["Apple", " Samsung", " Motorola", " Xiaomi", " LG"];
let element = " Lenovo";
let startingPosition = 1;
let finalPosition = 3;

function addElement(array, element) {
    array.push(element)
    return(array);
}

function removeLastElement(array, element){
    array.pop();
    return(array);
}

function removeRangeElements(array, element){
    return array.slice(startingPosition, finalPosition);
}

showResult(addElement(array, element));
showResult(removeLastElement(array));
showResult(removeRangeElements(array, startingPosition, finalPosition));