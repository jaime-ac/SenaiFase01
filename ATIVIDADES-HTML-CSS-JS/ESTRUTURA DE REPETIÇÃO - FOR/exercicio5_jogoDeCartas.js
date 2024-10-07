/**
5) Criar um programa que simule um jogo de cartas, onde inicialmente deve-se perguntar o nome do jogador 1 e o nome do jogador 2. Cada jogador tem 5 cartas para jogar. Inicia pelo jogador 1, em seguida o jogador 2, e assim segue alternando até que cada jogador tenha "jogado" suas 5 cartas. Os valores das cartas devem se digitados. Vence o jogador que tiver a maior soma. Ao final mostrar o nome do jogador vencedor e a sua soma. Caso tenha dado empate, mostrar mensagem na tela "O jogo empatou!". (DESAFIO: Aceitar somente cartas com valores entre 1 e 13, como no baralho).

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição - FOR
Data: 27/05/2024
 */

//let max = 14, min = 1 -> essa é a linha da declaração dos limites do intervalo;

let quantidadeCartasJogador = 5
let nomeJogadorUm, nomeJogadorDois
let cartaJogadorUm, cartaJogadorDois
let somaPontosJogadorUm = 0, somaPontosJogadorDois = 0
let indiceCartasJogadorUm = 1, indiceCartasJogadorDois = 1

nomeJogadorUm = prompt("Informe o nome do Jogador 1: ")
nomeJogadorDois = prompt("Informe o nome do Jogador 2: ")

for (let cont = 0; cont < quantidadeCartasJogador; cont++){

    //Jogador 1
    alert(`Sua vez, Jogador 1: ${nomeJogadorUm}\nCarta nº ${indiceCartasJogadorUm}`)
    cartaJogadorUm = Number(prompt("Qual é o valor da carta: "))

    /*
    cartaJogadorUm = Math.floor(Math.random() * (max - min) + min) -> gera número valor aleatório no intervalo de 1 a 13 (sendo min = 1 e max = 14)... caso essa opção seja ativada, não teria necessidade de usar a estrutura de condição para verificar se o número digitado está dentro do intervalo, uma vez que o intervalo já foi definido no início.
    */
    
    if ((cartaJogadorUm >= 1) && (cartaJogadorUm <= 13)){
        
        somaPontosJogadorUm = somaPontosJogadorUm + cartaJogadorUm  
        indiceCartasJogadorUm++
        
    }else{
        
        alert(`Valor de carta digitada errada... tente novamente (os valores das cartas são de 1 a 13)!`)
        
        do{
            
            alert(`Jogador 1: ${nomeJogadorUm}\nDigite de novo o valor da Carta nº ${indiceCartasJogadorUm}`)
            cartaJogadorUm = Number(prompt("Qual é o valor da carta: "))

        }while((cartaJogadorUm < 1) || (cartaJogadorUm > 13))
        
        somaPontosJogadorUm = somaPontosJogadorUm + cartaJogadorUm
        indiceCartasJogadorUm++
        
    }
     
    //Jogador 2
    alert(`Sua vez, Jogador 2: ${nomeJogadorDois}\nCarta nº ${indiceCartasJogadorDois}`)
    cartaJogadorDois = Number(prompt("Qual é o valor da carta: "))
    
    /*cartaJogadorDois = Math.floor(Math.random() * (max - min) + min) -> gera número valor aleatório no intervalo de 1 a 13 (sendo min = 1 e max = 14)... caso essa opção seja ativada, não teria necessidade de usar a estrutura de condição para verificar se o número digitado está dentro do intervalo, uma vez que o intervalo já foi definido no início.
    */
   
   if ((cartaJogadorDois >= 1) && (cartaJogadorDois <= 13)){
       
       somaPontosJogadorDois = somaPontosJogadorDois + cartaJogadorDois
       indiceCartasJogadorDois++
       
    }else{
        
        alert(`Valor de carta digitada errada... tente novamente (os valores das cartas são de 1 a 13)!`)

        do{
            
            alert(`Jogador 2: ${nomeJogadorDois}\nDigite de novo o valor da Carta nº ${indiceCartasJogadorDois}`)
            cartaJogadorDois = Number(prompt("Qual é o valor da carta: "))
     
        }while((cartaJogadorDois < 1) || (cartaJogadorDois > 13))
        
        somaPontosJogadorDois = somaPontosJogadorDois + cartaJogadorDois
        indiceCartasJogadorDois++

    }
}

switch(true){

    case somaPontosJogadorUm > somaPontosJogadorDois:
        alert(`>>>>> RESULTADO DO JOGO <<<<<\n\nVencedor do jogo: ${nomeJogadorUm}\nPontuação total: ${somaPontosJogadorUm}\n\nSegundo colocado: ${nomeJogadorDois}\nPontuação total: ${somaPontosJogadorDois}`)
        break
        
    case somaPontosJogadorUm < somaPontosJogadorDois:
        alert(`>>>>> RESULTADO DO JOGO <<<<<\n\nVencedor do jogo: ${nomeJogadorDois}\nPontuação total: ${somaPontosJogadorDois}\n\nSegundo colocado: ${nomeJogadorUm}\nPontuação total: ${somaPontosJogadorUm}`)
        break
        
    case somaPontosJogadorDois == somaPontosJogadorUm:
        alert(`>>>>> RESULTADO DO JOGO <<<<<\n\nO jogo empatou!\nAmbos os jogadores ${nomeJogadorUm} e ${nomeJogadorDois} possuem ${somaPontosJogadorDois} pontos`)
        break

    default:
        alert(`Erro na contagem das pontuações, tente novamente...`)
        break

}