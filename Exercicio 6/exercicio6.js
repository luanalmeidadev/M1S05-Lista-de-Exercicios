/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */


//função criada para exibir um resultado.
function showResult(frase) {
    document.write(frase);
    document.write("<br>");
}
let iphone = {nome: "Iphone 13 Pro Max:", preco: 10499.0};
let samsung = {nome: "Samsung Galaxy S22 Ultra:", preco: 4877.0};
let xiaomi = {nome: "Xiaomi S12 Ultra:", preco: 6642.0};

let products = [iphone, samsung, xiaomi];

let sumProducts = 0;
let countProducts = 0;

for (const product of products) {
    sumProducts += product.preco;
    countProducts++;

    showResult(product.nome);
    showResult(product.preco + "\n");
}

showResult(`Valor total de produtos: R$ ${sumProducts.toFixed(2)}`)
showResult(`Total de produtos: ${countProducts}`);