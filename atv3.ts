console.clear ()

/*10 pontos
3 - Faça um algoritmo que leia um valor e informe se ele está dentro de
um intervalo específico (por exemplo, entre 10 e 20, 20 e 30, até o 100).
Nome Aluno: Enzo Cassão Marini
*/
let teclado = require(`prompt-sync`)()

let numero: number = parseInt(teclado(`Escreva um número de 1 a 100: `));

if (numero >= 0 && numero <= 10){
    console.log(`Esse número está entre 0 e 10`);
}
else if (numero > 10 && numero <= 20){
    console.log(`Esse número está entre 10 e 20`);
}
else if (numero > 20 && numero <= 30){
    console.log(`Esse número está entre 20 e 30`);
}
else if (numero > 30 && numero <= 40){
    console.log(`Esse número está entre 30 e 40`);
}
else if (numero > 40 && numero <= 50){
    console.log(`Esse número está entre 40 e 50`);
}
else if (numero > 50 && numero <= 60){
    console.log(`Esse número está entre 50 e 60`);
}
else if (numero > 60 && numero <= 70){
    console.log(`Esse número está entre 60 e 70`);
}
else if (numero > 70 && numero <= 80){
    console.log(`Esse número está entre 70 e 80`);
}
else if (numero > 80 && numero <= 90){
    console.log(`Esse número está entre 80 e 90`);
}
else if (numero > 90 && numero <= 100){
    console.log(`Esse número está entre 90 e 100`);
}
else if (numero > 100 || numero < 0){
    console.log(`Algo deu errado, siga as instruções`);
}