console.clear ()

/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno: Enzo Cassão Marini
*/

let teclado = require(`prompt-sync`)()

let numero: number = 0;
let soma: number = 0;

do{
    numero = parseInt(teclado(`Digite um número: `));
    soma = soma + numero
}while(soma <= 100)

console.log(`O valor ${soma} superou 100, operação foi parada`);