console.clear ()

/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno: Enzo Cassão Marini
*/

const teclado = require(`prompt-sync`)()

let somaN: number = 0;
let sair: boolean = false
let numero: number = 0;
let media: number = 0;

console.log(`Digite qualquer número`);
console.log(`Digite 0 para sair`);

do{
    numero = parseInt(teclado(`Digite um número: `));

    if (numero != 0){
        somaN = somaN + numero;
        media ++
    }
    else if (numero == 0){
     sair = true
    }
}while(sair == false)

console.log(`A média dos valores digitados são: ${somaN / media}`);