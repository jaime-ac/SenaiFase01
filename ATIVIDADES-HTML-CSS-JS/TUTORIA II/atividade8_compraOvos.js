/*
Atividade 8: Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia),
30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias.
Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 08/05/2024
TUTORIA II
*/

let quantidadeOvos, valorPagar

quantidadeOvos = Number(prompt("Por favor, digite a quantidade de ovos que deseja comprar: "))

switch (true){

    case (quantidadeOvos >= 1) && (quantidadeOvos <= 12):
        valorPagar = quantidadeOvos * 0.40
        alert(`Você deseja comprar ${quantidadeOvos} ovos\nCada ovo custará R$ 0.40 (centavos)\nO valor total a pagar pela compra será de: R$${valorPagar.toFixed(2)}`)
        break

    case (quantidadeOvos >= 13) && (quantidadeOvos <= 24):
        valorPagar = quantidadeOvos * 0.30
        alert(`Você deseja comprar ${quantidadeOvos} ovos\nCada ovo custará R$ 0.30 (centavos)\nO valor total a pagar pela compra será de: R$${valorPagar.toFixed(2)}`)
        break
        
    case (quantidadeOvos >= 25):
        valorPagar = quantidadeOvos * 0.25
        alert(`Você deseja comprar ${quantidadeOvos} ovos\nCada ovo custará R$ 0.25 (centavos)\nO valor total a pagar pela compra será de: R$${valorPagar.toFixed(2)}`)
        break

    default:
        alert(`Quantidade de ovos digitados inválido, tente novamente!`)
        break
}