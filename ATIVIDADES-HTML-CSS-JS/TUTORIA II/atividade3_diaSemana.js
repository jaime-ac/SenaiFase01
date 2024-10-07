/*
Crie um programa que leia um número inteiro entre 1 e 7 e mostre na tela o dia da semana correspondente a este número.
Domingo corresponde ao número 1 e assim para os outros dias da semana até sábado, que corresponde ao número 7.
Caso seja digitado um número que não seja de 1 a 7, mostrar uma mensagem que o número é inválido.

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 06/05/2024
Tutoria II
*/

let numeroDigitado

numeroDigitado = Number(prompt("Digite um número inteiro de 1 a 7 referente aos dias da semana: "))

switch (true){

    case (numeroDigitado == 1):
        alert(`Dia da semana: DOMINGO`)
        break

    case (numeroDigitado == 2):
        alert(`Dia da semana: SEGUNDA-FEIRA`)
        break

    case (numeroDigitado == 3):
        alert(`Dia da semana: TERÇA-FEIRA`)
        break

    case (numeroDigitado == 4):
        alert(`Dia da semana: QUARTA-FEIRA`)
        break

    case (numeroDigitado == 5):
        alert(`Dia da semana: QUINTA-FEIRA`)
        break

    case (numeroDigitado == 6):
        alert(`Dia da semana: SEXTA-FEIRA`)
        break

    case (numeroDigitado == 7):
        alert(`Dia da semana: SÁBADO`)
        break

    default:
        alert(`Número inválido, digite um número de 1 a 7!`)
}