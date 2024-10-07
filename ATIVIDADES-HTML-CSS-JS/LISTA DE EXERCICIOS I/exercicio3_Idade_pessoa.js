/*Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY)
e o ano atual também no formato (YYYY). Em seguida mostre na tela qual a idade do usuário em anos, em meses,
em dias e em semanas.

Instituição: SESI SENAI
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 25/04/2024*/

let anoNascimento, anoAtual, idadePessoa
let mesesPessoa, semanasPessoa, diasPessoa

anoNascimento = Number(prompt("Informe o ano do seu nascimento: "))
anoAtual = Number(prompt("Informe o ano atual: "))

idadePessoa = anoAtual - anoNascimento
mesesPessoa = 12 * idadePessoa
semanasPessoa = 52 * idadePessoa
diasPessoa = 365 * idadePessoa

console.log(`Você tem ${idadePessoa} anos de vida.`)
console.log(`Você tem ${mesesPessoa} meses de vida.`)
console.log(`Você tem ${semanasPessoa} semanas de vida.`)
console.log(`Você tem ${diasPessoa} dias de vida.`)