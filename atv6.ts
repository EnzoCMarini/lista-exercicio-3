console.clear()

/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
- A quantidade de números pares digitados e quais foram eles;
- A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: Enzo Cassão Marini
*/

let teclado = require(`prompt-sync`)()

let numero: number = 0
let numeroImpar: number = 0
let cont: number = 0

while(cont != 10){
    numero = parseInt(teclado(`Digite o número: `));

    if(numero % 2 == 0){
        console.log(`${numero} é Par`);
    }
    else{
        numeroImpar = numero
        console.log(`${numeroImpar} é Impar`);
    }
    cont++
}