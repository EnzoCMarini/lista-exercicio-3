console.clear ()

/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno: Enzo Cassão Marini
*/

let teclado = require(`prompt-sync`)()

let n1: number = 0
let n2: number = 0
let n3: number = 0
let maiorN: number = 0;
let meioN: number = 0;
let menorN: number = 0;

n1 = parseInt(teclado(`Escreva o primeiro número: `));
n2 = parseInt(teclado(`Escreva o segundo número: `));
n3 = parseInt(teclado(`Escreva o terceiro número: `));

if (n1 > n2 && n1 > n2){
    maiorN = n1;
    if (n2 > n3){
        meioN = n2;
        menorN = n3;
    }
    else if (n3 > n2){
        meioN = n3;
        menorN = n2;
    }
}
if (n2 > n1 && n2 > n3){
    maiorN = n2;
    if (n1 > n3){
        meioN = n1;
        menorN = n3;
    }
    else if (n3 > n1){
        meioN = n3;
        menorN = n1;
    }
};
if (n3 > n2 && n3 > n1){
    maiorN = n3;
    if (n2 > n1){
        meioN = n2;
        menorN = n1;
    }
    else if (n1 > n2){
        meioN = n1;
        menorN = n2;
    }
}

console.log(`Os números em ordem decrescente são: ${maiorN}, ${meioN}, ${menorN}`)