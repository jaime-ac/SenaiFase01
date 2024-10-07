/*
6) Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% ou mais da pontuação total, que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. Menos que isso, é eliminado. Cada arremesso pode marcar de 0 a 10 pontos, dependendo da precisão. Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual) e se ele está classificado, se foi para a repescagem ou se está desclassificado.

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição - FOR
Data: 27/05/2024
*/

let pontuacaoTotal = 60, quantidadeArremessos = 6, jogadaJogador = 1
let limiteInferiorRepescagem, limiteSuperiorRepescagem
let pontuacaoJogador, somaPontosJogador = 0
let porcentualSomaPontuacao, nomeJogador

limiteInferiorRepescagem = pontuacaoTotal * 0.50
limiteSuperiorRepescagem = pontuacaoTotal * 0.75

nomeJogador = prompt("Por favor, informe seu nome: ")

    for (let contador = 0; contador < quantidadeArremessos; contador++){
        
        alert(`Jogada nº: ${jogadaJogador}`)

        pontuacaoJogador = Number(prompt("Qual foi sua pontuação nessa jogada (pontos de 0 a 10): "))
        
        if ((pontuacaoJogador < 0) || (pontuacaoJogador > 10)){ // só entra aqui se o ponto digitado for inválido;
            
            alert(`Pontuação fora do padrão... os pontos são de 0 a 10.`)
            
            do{ 
                //a estrutura de repetição do-while serve para entrar num loop até que o jogador digite uma pontuação válida

                alert(`Digite a pontuação correta da Jogada nº ${jogadaJogador}`)
                pontuacaoJogador = Number(prompt("Qual foi sua pontuação nessa jogada (pontos de 0 a 10): "))

            }while((pontuacaoJogador < 0) || (pontuacaoJogador > 10))
            
            somaPontosJogador = somaPontosJogador + pontuacaoJogador
            jogadaJogador++

        }else{

            somaPontosJogador = somaPontosJogador + pontuacaoJogador
            jogadaJogador++

        }
    }

    porcentualSomaPontuacao = (somaPontosJogador * 100) / 60

    switch (true){

        case (somaPontosJogador >= limiteSuperiorRepescagem):
            alert(`>>>> RESULTADO <<<<<\n\nNome do Jogador: ${nomeJogador}\nPontuação: ${somaPontosJogador}\nPorcentagem da pontuação: ${porcentualSomaPontuacao.toFixed(2)}%\nCondição: Classificado para a próxima fase.`)
            break
            
        case (somaPontosJogador >= limiteInferiorRepescagem) && (somaPontosJogador < limiteSuperiorRepescagem):
            alert(`>>>> RESULTADO <<<<<\n\nNome do Jogador: ${nomeJogador}\nPontuação: ${somaPontosJogador}\nPorcentagem da pontuação: ${porcentualSomaPontuacao.toFixed(2)}%\nCondição: Vaga para repescagem`)
            break
            
        case (somaPontosJogador < limiteInferiorRepescagem):
            alert(`>>>> RESULTADO <<<<<\n\nNome do Jogador: ${nomeJogador}\nPontuação: ${somaPontosJogador}\nPorcentagem da pontuação: ${porcentualSomaPontuacao.toFixed(2)}%\nCondição: Desclassificado`)
            break

        default:
            alert(`Erro no sistema... tente mais tarde!`)
            break
    }