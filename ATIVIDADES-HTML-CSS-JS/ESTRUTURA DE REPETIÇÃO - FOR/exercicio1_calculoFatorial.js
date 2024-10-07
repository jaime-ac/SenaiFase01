/*
1) Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1. (Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120).

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição - FOR
Data: 27/05/2024
*/

let numero, fatorialNumero = 1

numero = Number(prompt("Digite um número para o cálculo do fatorial: "))

for(let contador = numero; contador >= 1; contador--){

    fatorialNumero = fatorialNumero * contador

}

alert(`O fatorial de ${numero} é igual a ${fatorialNumero}`)