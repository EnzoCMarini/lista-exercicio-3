console.clear()

/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno: Enzo Cassão Marini
*/

let teclado = require(`prompt-sync`)()

let idadeM: number = 0;
let somaIdadeM: number = 0;
let mediaIdadeM: number = 0;
let idadeF: number = 0;
let somaIdadeF: number = 0;
let mediaIdadeF: number = 0;
let sexo: string = ``;
let pessoas: number = 0

do{
    sexo = teclado(`Qual o seu gênero? M para Masculino e F para Feminino `);
    if(sexo == `M` || sexo == `m`){
        idadeM = parseInt(teclado(`Digite a sua Idade: `));
        somaIdadeM = somaIdadeM + idadeM
        mediaIdadeM ++
    }
    else if(sexo == `F` || sexo == `f`){
        idadeF = parseInt(teclado(`Digite a sua Idade: `));
        somaIdadeF = somaIdadeF + idadeF
        mediaIdadeF ++
    }
    pessoas ++
}while(pessoas <= 50)

console.log(`A média de idade dos homens é ${somaIdadeM / mediaIdadeM} e das mulheres é ${somaIdadeF / mediaIdadeF}`);