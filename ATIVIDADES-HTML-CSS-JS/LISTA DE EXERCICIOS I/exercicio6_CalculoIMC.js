/*Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura,
realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela, com 3 casas depois da vírgula.

Instituição: SESI SENAI
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 25/04/2024*/

let peso, altura, imc 

peso = Number(prompt("Informe o seu peso em Kg: "))
altura = Number(prompt("Informe a sua altura em metros: "))

imc = peso / (altura * altura)

alert(`O Índice de Massa Corporal (IMC) do indivíduo é igual a: ${imc.toFixed(2)}`)