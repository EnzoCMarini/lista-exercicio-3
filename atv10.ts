console.clear ()

/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno: Enzo Cassão Marini
*/

let teclado = require(`prompt-sync`)()

let altura: number = 0;
let alturaSoma: number = 0;
let media: number = 0;
let quantidadePessoas: number = 0;
do{
    altura = parseInt(teclado(`Digite sua altura: `))
    alturaSoma = alturaSoma + altura
    quantidadePessoas ++
    media ++
}while(quantidadePessoas <= 10)

console.log(`A média das alturas é ${alturaSoma / media}`);