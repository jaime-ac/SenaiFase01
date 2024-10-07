/*
3) Programar para que o usuário digite 5 números e caso sejam pares, mostre a média deles. Se algum número digitado não for par, ao final não será mostrada a média e sim uma mensagem “Um dos números digitados era ímpar”.

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição - FOR
Data: 23/05/2024
*/

let numeroDigitado, mediaNumeros
let numerosPares = 0, somaNumeros = 0

for (contador = 0; contador < 5; contador ++){

    numeroDigitado = Number(prompt("Digite um número inteiro: "))

    if (numeroDigitado % 2 == 0){
        somaNumeros = somaNumeros + numeroDigitado
        numerosPares ++
    }
}

if (numerosPares == 5){

    mediaNumeros = somaNumeros / numerosPares
    alert(`A média dos números pares digitados é igual a: ${mediaNumeros.toFixed(0)}`)

}else{

    alert(`Um dos números digitados era ímpar...`)
    
}