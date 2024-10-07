/*
Atividade 4: Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada:
1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela.
Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente.
Criar uma variável com um valor que represente o saldo inicial.

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 02/05/2024
*/

let contaBancaria, opcao, deposito, saque
let saldo = 5000

contaBancaria = Number(prompt("Informe o número da sua conta bancária, por gentileza: "))

opcao = Number(prompt(`>>>>>>> MENU DE OPÇÕES <<<<<<<\n 1) Saldo \n 2) Depósito \n 3) Saque \n Por favor, informe qual opção deseja realizar: `))

switch(opcao){
    case 1:
        alert(`Caro cliente, o seu saldo é de R$${saldo.toFixed(2)}`)
        break

    case 2:
        deposito = Number(prompt("Por favor, informe o valor de depósito: R$"))
        saldo = saldo + deposito
        alert(`Você depositou R$${deposito.toFixed(2)} na sua conta.\nSeu saldo agora é de R$${saldo.toFixed(2)}`)
        break

    case 3:
        saque = Number(prompt("Por favor, informe o valor que deseja sacar: "))
        if(saque <= saldo){
            saldo = saldo - saque
            alert(`Saque no valor de R$${saque.toFixed(2)} realizado com sucesso! \nSeu saldo atual é de R$${saldo.toFixed(2)} `)
            
        }else{
            alert("Infelizmente não foi possível realizar o saque. Informamos que o valor do saque é maior do que seu saldo.")
        }
        break

    default:
        alert(`A opção selecionada não existe, tente novamente!`)
}
