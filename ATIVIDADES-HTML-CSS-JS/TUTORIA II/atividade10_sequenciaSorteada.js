/*
Atividade 10: Em uma máquina de cassino, ao jogar o jogador sempre ganha.
Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro.
Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

   CEREJA - CEREJA - CEREJA -> R$100
   LARANJA - LARANJA - LARANJA -> R$80
   CEREJA - LARANJA - CEREJA -> R$50
   LARANJA - CEREJA - LARANJA -> R$25

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 08/05/2024
TUTORIA II
*/

let sequenciaSorteada, sequenciaUm = 100, sequenciaDois = 80, sequenciaTres = 50, sequenciaQuatro = 25

sequenciaSorteada = Number(prompt(">>> SEQUÊNCIA DE FRUTAS <<<\n1) CEREJA - CEREJA - CEREJA\n2) LARANJA - LARANJA - LARANJA\n3) CEREJA - LARANJA - CEREJA \n4) LARANJA - CEREJA - LARANJA\n\nDigite o número corresponte a tua sequência: "))

switch (sequenciaSorteada){

   case 1:
      alert(`Sequência sorteada: CEREJA - CEREJA - CEREJA\nValor ganho: R$${sequenciaUm.toFixed(2)}`)
      break

   case 2:
      alert(`Sequência sorteada: LARANJA - LARANJA - LARANJA\nValor ganho: R$${sequenciaDois.toFixed(2)}`)
      break

   case 3:
      alert(`Sequência sorteada: CEREJA - LARANJA - CEREJA\nValor ganho: R$${sequenciaTres.toFixed(2)}`)
      break
     
   case 4:
      alert(`Sequência sorteada: LARANJA - CEREJA - LARANJA\nValor ganho: R$${sequenciaQuatro.toFixed(2)}`)
      break

   default:
      alert(`Atenção: a sequência sorteada é inválida, verifique o menu de sequência e tente novamente!`)
      break
}

