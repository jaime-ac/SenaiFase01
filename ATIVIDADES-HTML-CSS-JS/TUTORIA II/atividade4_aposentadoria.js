/*
Atividade 4: Elabore um programa que leia a idade e o tempo de serviço de um trabalhador
e escreva se ele pode ou nao se aposentar. As condições para aposentadoria são:

a) Ter pelo menos 65 anos
b) Ter trabalhado pelo menos 30 anos
c) Ter pelo menos 60 anos e ter trabalhado pelo menos 25 anos

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 08/05/2024
TUTORIA II
*/

let idade, tempoServico

idade = Number(prompt("Por favor, digita a idade da pessoa: "))
tempoServico = Number(prompt("Agora informe seu tempo de serviço, por gentileza: "))

switch (true){

    case (idade >= 65):
        alert(`Você já tem: ${idade} \nTempo de Serviço: ${tempoServico} \nNota: Pela sua idade, você já pode se aposentar!!!`)
        break 

    case (tempoServico >= 30):
        alert(`Você tem: ${idade} anos\nMas o seu tempo de serviço é de: ${tempoServico} anos\nNota: Pelo seu tempo de serviço, você já pode se aposentar!!!`)
        break 

    case (idade >= 60) && (tempoServico >= 25):
        alert(`Você tem: ${idade} anos\nE o seu tempo de serviço é de: ${tempoServico} \nNota: Então você já pode se aposentar!!!`)
        break 

    default:
        alert(`Idade: ${idade} anos\nTempo de Serviço: ${tempoServico} \nNota: Você não pode se aposentar ainda!!!`)
        break
    }