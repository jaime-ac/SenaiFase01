/*
Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano.
Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março.
Mostrar na tela "O mês possui 31 dias".

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 02/05/2024
*/

let mes 

mes = Number(prompt(" >>>>>> Calendário <<<<<< \n1) Janeiro \n2) Fevereiro \n3) Março \n4) Abril \n5) Maio \n6) Junho \n7) Julho \n8) Agosto \n9) Setembro \n10) Outubro \n11) Novembro \n12) Dezembro \nInforme o mês que deseja saber a quantidade de dias (digitar o número do mês): "))

switch (mes){

    case 1:
        alert(`O mês selecionado é: Janeiro \nO mês possui 31 dias.`)
        break

    case 2:
        alert(`O mês selecionado é: Fevereiro \nO mês possui 28 dias.`)
        break

    case 3:
        alert(`O mês selecionado é: Março \nO mês possui 31 dias.`)
        break

    case 4:
        alert(`O mês selecionado é: Abril \nO mês possui 30 dias.`)
        break

    case 5:
        alert(`O mês selecionado é: Maio \nO mês possui 31 dias.`)
        break

    case 6:
        alert(`O mês selecionado é: Junho \nO mês possui 30 dias.`)
        break

    case 7:
        alert(`O mês selecionado é: Julho \nO mês possui 31 dias.`)
        break
    
    case 8:
        alert(`O mês selecionado é: Agosto \nO mês possui 31 dias.`)
        break
    
    case 9:
        alert(`O mês selecionado é: Setembro \nO mês possui 30 dias.`)
        break
    
    case 10:
        alert(`O mês selecionado é: Outubro \nO mês possui 31 dias.`)
        break
    
    case 11:
        alert(`O mês selecionado é: Novembro \nO mês possui 30 dias.`)
        break
    
    case 12:
        alert(`O mês selecionado é: Dezembro \nO mês possui 31 dias.`)
        break

    default:
        alert(`Mês selecionado inválido, tente novamente!`)
}