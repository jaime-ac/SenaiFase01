/*
O Amazon Prime Video, possui um sistema de pesquisa no seu catálogo que armazena as últimas buscas do usuário. Esse sistema armazena em um histórico de pesquisa somente as séries e filmes que existem no catálogo, ou seja, que foram encontradas na busca. Criar um programa que contenha a seguinte lista com 20 séries: House, The Boys, Clarice, Monk, Citadel, Reacher, Undone, Bosch, The Lake, Cold Case, Mr Robot, Hannibal, Upload, Chuck, Hanna, Enxame, Madmen, Sherlock, Hunters e Supernatural. Criar um sistema com as opções: 1) Pesquisar Série 2) Consultar histórico de pesquisa 3) Limpar histórico 4) Sair. O sistema deve permitir ao usuário pesquisar se uma série existe e após cada pesquisa mostrar mensagem "Série encontrada!" ou "Série não encontrada!", voltando para o menu. Caso escolha consultar histórico, mostrar o histórico somente com as séries encontradas ou "Seu histórico de pesquisa está vazio!". A opção de limpar o histórico, deve esvaziar o histórico. A opção sair deve encerrar o programa.

Aluno: Jaime António Cá
Professor: Lucas Naspolini
Instituição: SESI SENAI - FLN
Avaliação III
Data: 02/07/2024
*/

let series = ['House', 'The Boys', 'Clarice', 'Monk, Citadel', 'Reacher', 'Undone', 'Bosch', 'The Lake', 'Cold Case', 'Mr Robot', 'Hannibal', 'Upload', 'Chuck', 'Hanna', 'Enxame', 'Madmen', 'Sherlock', 'Hunters','Supernatural']

let opcao
let pesquisaSerie, resultadoPesquisa
let historicoPesquisa = []

do {

    opcao = Number(prompt(">>>> Menu de Opções <<<<\n\n1) Pesquisar Série\n2) Consultar histórico de pesquisa\n3) Limpar histórico\n4) Sair\n\nDigite sua opção: "))

    switch (opcao){

        case 1:

            pesquisaSerie = prompt("Digite o título da série que deseja pesquisar: ")

            resultadoPesquisa = series.indexOf(pesquisaSerie)

            if (resultadoPesquisa != -1){

                historicoPesquisa.push(pesquisaSerie)
                alert("Série encontrada!")

            }else{

                alert("Série não encontrada!")

            }
            break

        case 2:

            if (historicoPesquisa.length <= 0){

                alert("Seu histórico de pesquisa está vázio!")

            }else{

                alert(`>>>> Histórico de Pesquisa <<<<\nObs.: Só é apresentado as pesquisas cujo resultado foi encontrado.\n\nVocê pesquisou e encontrou as seguintes séries: ${historicoPesquisa}`)

            }
            break

        case 3:

            while (historicoPesquisa.length > 0){

                historicoPesquisa.pop()

            }

            alert("Seu histórico foi esvaziado, conforme sua solicitação!")
            break

        case 4:

            alert("Encerrando o programa...")
            break

        default:

            alert("Opção inválida, escolha uma das opções do Menu!")
            break
    }
    
} while (opcao != 4);