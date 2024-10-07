/*Crie um programa que peça os dados de um cliente: Nome, idade, nacionalidade, endereço.
Após digitados os dados, mostrar na tela a seguinte mensagem "Cliente [Nome], com [idade] anos,
[nacionalidade], reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos, brasileiro,
reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.

Instituição: SESI SENAI
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 25/04/2024*/ 

let nome 
let idade
let nacionalidade
let endereco

nome = prompt("Digite seu nome: ")
idade = Number(prompt("Digite sua idade: "))
nacionalidade = prompt("Digite sua nacionalidade: ")
endereco = prompt("Digite o seu endereço completo: ")

console.log(`Cliente ${nome}, com ${idade} anos, ${nacionalidade}, reside no endereço ${endereco}.`)