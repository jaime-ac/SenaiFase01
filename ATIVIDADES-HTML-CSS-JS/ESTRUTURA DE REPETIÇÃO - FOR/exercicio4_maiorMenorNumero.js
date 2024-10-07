/*
4) Fazer um programa no qual o usuário deve digitar 10 números entre 0 e 50. Ao final deve mostrar o maior número digitado e o menor número digitado. Os números digitados que não estiverem entre 0 e 50, devem ser desconsiderados.

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição - FOR
Data: 23/05/2024
*/

let maiorNumeroDigitado, menorNumeroDigitado
let numero

for (let cont = 0; cont < 10; cont ++){

    numero = Number(prompt("Digite um número de 0 a 50: "))

    if (numero >= 0 && numero <= 50){

        if (cont == 0){

            maiorNumeroDigitado = numero
            menorNumeroDigitado = numero

        }else{

            if (numero > maiorNumeroDigitado){
                maiorNumeroDigitado = numero
            }
            if (numero < menorNumeroDigitado){
                menorNumeroDigitado = numero
            }
        }
    }
}

alert(`>>>> Resultado <<<<\nMaior número digitado: ${maiorNumeroDigitado}\nMenor número digitado: ${menorNumeroDigitado}`)
