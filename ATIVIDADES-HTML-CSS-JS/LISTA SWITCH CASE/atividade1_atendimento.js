/*
Fazer um programa onde o usuário pode acessar as seguintes opções:

A) Falar com a atendente    B) Falar com o RH
C) Falar com o gerente      D) Sair

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 02/05/2024
*/

let escolha 

escolha = prompt(">>>>> Menu de Opções <<<<< \nA) Falar com a atendente \nB) Falar com o RH \nC) Falar com o gerente \nD) Sair \n\nDigite a opção que deseja acessar: ")

switch (true){

    case escolha == 'A':
        alert(`>>>>> Bem vindo/a ao espaço do ATENDENTE <<<<< \nEm que posso te ajudar, por gentileza?`)
        break

    case escolha == 'B':
        alert(`>>>>> Bem vindo/a ao RECURSOS HUMANOS (RH) <<<<< \nEm que podemos ajudar, por favor?`)
        break

    case escolha == 'C':
        alert(`>>>>> Bem vindo/a ao espaço do GERENTE <<<<< \nEm que posso te ajudar, por gentileza?`)
        break 

    case escolha == 'D':
        alert(`Programa encerrado! \nAgradecemos sua participação, volte sempre!`)
        break

    default:
        alert(`Opção selecionada inválida, verifique as opções disponíveis e tente novamente.`)
        break
}