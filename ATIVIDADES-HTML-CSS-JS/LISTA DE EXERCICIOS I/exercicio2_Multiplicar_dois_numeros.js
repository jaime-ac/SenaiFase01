/*Faça um programa no qual o usuário digite dois números e mostre na tela a multiplicação desses números.

Instituição: SESI SENAI
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 25/04/2024*/

let primeiroNumero, segundoNumero, multiplicacao

primeiroNumero = Number(prompt("Digite um número inteiro: "))
segundoNumero = Number(prompt("Digite um outro número inteiro: "))

multiplicacao = primeiroNumero * segundoNumero

console.log(`A multiplicação dos dois números digitados é igual a ${multiplicacao}`)