/*
Atividade 9: Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno.
Quando os três lados forem iguais trata-se de um triângulo equilátero,
dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 08/05/2024
TUTORIA II
*/

let ladoA, ladoB, ladoC

ladoA = Number(prompt("Digite a medida do lado A do triângulo: "))
ladoB = Number(prompt("Digite a medida do lado B do triângulo: "))
ladoC = Number(prompt("Digite a medida do lado C do triângulo: "))

switch (true){

    case (ladoA == ladoB) && (ladoB == ladoC):
        alert(`>>>> TRIÂNGULO <<<<\nLado A = ${ladoA}\nLado B = ${ladoB}\nLado C = ${ladoC}\n\nOs três lados do triângulo são iguais.\nPortanto, o triângulo é do tipo: Equilátero.`)
        break

    case (ladoA == ladoB) || (ladoB == ladoC) || (ladoC == ladoA):
        alert(`>>>> TRIÂNGULO <<<<\nLado A = ${ladoA}\nLado B = ${ladoB}\nLado C = ${ladoC}\n\nO triângulo possui dois lados iguais.\nPortanto, o triângulo é do tipo: Isósceles.`)
        break

    case (ladoA != ladoB) && (ladoB != ladoC) && (ladoC != ladoA):
        alert(`>>>> TRIÂNGULO <<<<\nLado A = ${ladoA}\nLado B = ${ladoB}\nLado C = ${ladoC}\n\nOs três lados do triângulo são diferentes.\nPortanto, o triângulo é do tipo: Escaleno.`)
        break

    default:
        alert(`Erro ao digitar as medidas, tente novamente!`)
        break
}