/*
7) Em jogos de tabuleiro do gênero RPG, um dos dados que pode ser utilizado é o dado D20. 
Esse dado possui 20 faces ou "lados" com valores de 1 a 20. Criar um sistema simples de jogo, 
onde no início é solicitado o número de jogadores e para cada jogador deve-se armazenar valores de quatro jogadas de um D20. 
A pontuação do jogador é definida excluindo o primeiro e o último valor, somando então os valores da segunda e terceira jogadas. 
Ao final mostrar a soma de cada jogador e suas posições. (DESAFIO: validar os valores de 1 a 20, ou seja, 
caso um valor digitado não esteja entre dentro dos valores do dado, repetir a pergunta).

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 21/05/2024
TUTORIA III
*/

let segundoPontuacaoJogador, terceiroPontuacaoJogador, nomeJogador
let quantidadeJogadores, pontoJogadasJogador, somaPontosJogador
let listaPontuacao = '', listaJogadores = ''
let contador = 0, jogador = 1

quantidadeJogadores = Number(prompt("Informe a quantidade de jogadores que irão participar do jogo: "))

while (contador < quantidadeJogadores){

    alert(`Jogador nº ${jogador}`)
    nomeJogador = prompt("Digite seu nome: ")
    listaJogadores = listaJogadores + ` ${nomeJogador}`

    jogadas = 4
    indice = 0
    somaPontosJogador = 0

    while(indice < jogadas){

        pontoJogadasJogador = Number(prompt("Quanto você tirou nessa jogada: "))
        if (pontoJogadasJogador < 1 || pontoJogadasJogador > 20){
            alert(`Pontuação fora do formato!!! Tente novamente.`)
            pontoJogadasJogador = Number(prompt("Quanto você tirou nessa jogada: "))
        }else{
            if (indice == 1){
                somaPontosJogador = somaPontosJogador + pontoJogadasJogador
            }
            if (indice == 2){
                somaPontosJogador = somaPontosJogador + pontoJogadasJogador
            }
        }  
        indice ++

    }

    listaPontuacao = listaPontuacao + ` ${somaPontosJogador}`

    jogador ++
    contador ++
}

alert(`Jogadores: ${listaJogadores}\nPontuações: ${listaPontuacao}`)