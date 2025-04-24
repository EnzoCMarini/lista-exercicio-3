console.clear ()

/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
- À vista: aplicar um desconto de 15% sobre o valor do carro.
- Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno: Enzo Cassão Marini
*/

let teclado = require(`prompt-sync`)()

console.log(`=======================================`)
console.log(`============Concessionaria=============`)
console.log(`================Carros=================`)
console.log(`============Fyat.Dos-45.000============`)
console.log(`=======Lambrosini.Uvas-2.600.000=======`)
console.log(`=======Telas.Cybertruck-840.000========`)
console.log(`==========Ronda.Vicic-265.900==========`)
console.log(`=======================================`)

let carros: number = 0
let escolha: number = 0
let resultado: number = 0

console.log(`
1 - Fyat Dos - 45.000
2 - Lambrosini Uvas - 2.600.000
3 - Telas Cybertruck - 840.000
4 - Ronda Vicic - 265.000`)
carros = parseInt(teclado(`Qual Carro você deseja comprar? `))

if (carros == 1){
    let fyat: number = 45000
    escolha = parseInt(teclado(`Pagar a vista(1) ou Parcelado(2)? `))
    if (escolha == 1){
        resultado = fyat * 0.85
    }
    else if (escolha == 2){
        resultado = fyat * 1.13
    }
}
else if (carros == 2){
    let Lambrosini: number = 2600000
    escolha = parseInt(teclado(`Pagar a vista(1) ou Parcelado(2)? `))
    if (escolha == 1){
        resultado = Lambrosini * 0.85
    }
    else if (escolha == 2){
        resultado = Lambrosini * 1.13
    }
}
else if (carros == 3){
    let Telas: number = 840000
    escolha = parseInt(teclado(`Pagar a vista(1) ou Parcelado(2)? `))
    if (escolha == 1){
        resultado = Telas * 0.85
    }
    else if (escolha == 2){
        resultado = Telas * 1.13
    }
}
else if (carros == 4){
    let Ronda: number = 265900
    escolha = parseInt(teclado(`Pagar a vista(1) ou Parcelado(2)? `))
    if (escolha == 1){
        resultado = Ronda * 0.85
    }
    else if (escolha == 2){
        resultado = Ronda * 1.13
    }
}

console.log(`O preço final do carro será ${resultado}`);