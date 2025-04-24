console.clear ()

/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Enzo Cassão Marini
*/

let teclado = require(`prompt-sync`)()

let x: number = parseInt(teclado(`Escreva o primeiro número: `));
let y: number = parseInt(teclado(`Escreva o segundo número: `));

console.log(`O número X é ${x} e o número Y é ${y}`);

let z: number = y
y = x
x = z

console.log(`O número X é ${x} e o número Y é ${y}`);