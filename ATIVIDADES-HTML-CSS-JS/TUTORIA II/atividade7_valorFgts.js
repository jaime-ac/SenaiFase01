/*
Atividade 7: Criar um programa no qual o usuário digite o motivo da sua saída em uma empresa e o valor do seus FGTS.
Para motivo "Justa causa" o valor a receber é o valor do FGTS somado a uma multa de R$4.000,00.
Para motivo "Sem justa causa" o valor a receber é o valor do FGTS com desconto de 15%.
Ao final mostrar o valor a receber.

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 08/05/2024
TUTORIA II
*/

let motivoSaida, valorFgts, valorReceber, desconto, multa = 4000

motivoSaida = prompt("Por favor, informe o motivo da sua saída: ").toUpperCase() //.toUpperCase() serve para converter o valor digitado em maíusculas para facilitar a comparação.
valorFgts = Number(prompt("Agora, informe o valor do seus FGTS: R$"))

switch (true){

    case (motivoSaida == 'JUSTA CAUSA'): //|| (motivoSaida == 'justa causa'): para prevenir caso o usuário digite apenas letras minúsculas
        valorReceber = valorFgts + multa
        alert(`Motivo da Saída: ${motivoSaida}\nValor do FGTS: R$${valorFgts.toFixed(2)}\nMulta: R$${multa.toFixed(2)}\nValor a Receber: R$${valorReceber.toFixed(2)}`)
        break

    case (motivoSaida == 'SEM JUSTA CAUSA'): //|| (motivoSaida == 'sem justa causa'):
        desconto = valorFgts * 0.15 //0.15 é o mesmo que 15%
        valorReceber = valorFgts - desconto
        alert(`Motivo da Saída: ${motivoSaida}\nValor do FGTS: R$${valorFgts.toFixed(2)}\nDesconto de (15%): R$${desconto.toFixed(2)}\nValor a Receber: R$${valorReceber.toFixed(2)}`)
        break

    default:
        alert(`Erro ao digitar os dados, tente novamente!`)
        break
}