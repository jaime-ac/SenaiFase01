/*
Exercício 01: Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho).
Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!"
e se for digitado vermelho, mostre "Pare imediatamente!".

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 06/05/2024
Tutoria II
*/

let corSemaforo

corSemaforo = prompt("Digite a cor que está no semáforo: ")

switch(true){

    case (corSemaforo == 'verde'):
        alert("Pode seguir!")
        break

    case (corSemaforo == 'amarelo'):
        alert("Alerta, pare!")
        break

    case (corSemaforo == 'vermelho'):
        alert("Pare imediatamente!")
        break

    default:
        alert("A cor digitada não existe no semáforo!")
        break
}