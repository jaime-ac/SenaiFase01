/*Criar um programa que realize o cálculo de uma média da faculdade.
A média é composta por três notas: Atividade Individual (peso 1), Seminário em Equipe (peso 1),
Projeto final (peso 3). O usuário deve digitar as três notas e a média deve ser mostrada na tela.

Instituição: SESI SENAI
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 25/04/2024*/

let primeiraNota, segundaNota, terceiraNota, media

primeiraNota = Number(prompt("Informe a primeira nota referente a Atividade Individual: "))
segundaNota = Number(prompt("Informe a segunda nota referente ao Seminário em Equipe: "))
terceiraNota = Number(prompt("Informe a terceira nota referente ao Projeto Final: "))

media = ((primeiraNota * 1) + (segundaNota * 1) + (terceiraNota * 3)) / 5

alert(`A média ponderada das três notas digitadas é de: ${media.toFixed(1)}`)

