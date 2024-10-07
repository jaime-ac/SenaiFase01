/*
Faça um programa que crie um vetor vazio. Esse programa deve perguntar qual opção o usuário deseja (1, 2, 3, 4, 5, 0) e as opções devem executar as tarefas abaixo. Criar as mensagens e a forma de pesquisa / lista, da forma que achar melhor.

======== MENU ========
1- Cadastrar nome
2- Excluir um nome
3- Editar um nome
4- Pesquisar se um nome está cadastrado
5- Listar todos os nomes cadastrados
0- Sair do programa

*/

let escolhaMenu
let listaNomes = []
let encontrouNome = true, contador = 0
let nome, posicaoNome, quantidadeNomes
let nomeExcluido, nomeEditado, nomePesquisado

do {

    escolhaMenu = Number(prompt("===== MENU =====\n1- Cadastrar nome\n2- Excluir um nome\n3-Editar um nome\n4-Pesquisar se um nome está cadastrado\n5-Listar todos os nomes cadastrados\n0-Sair do programa"))

    switch (escolhaMenu){

        case 1:

            quantidadeNomes = Number(prompt("Quantos nomes deseja cadastrar: "))

            for (let cont = 0; cont < quantidadeNomes; cont++){

                nome = prompt("Digite o nome que deseja cadastrar: ")
                listaNomes.push(nome)
        
            }

            break
            
        case 2:

            nomeExcluido = prompt("Digite o nome que deseja excluir da lista: ")

            posicaoNome = listaNomes.indexOf(nomeExcluido)

            
            if (posicaoNome == -1){
                
                alert("O nome digitado não existe na lista!")
                
            }else{
                
                listaNomes.splice(posicaoNome, 1)
                alert(`O nome '${nomeExcluido}' foi excluído da lista com sucesso!`)

            }

            break

        case 3:

            nome = prompt("Qual nome da lista deseja editar: ")

            for (let i = 0; i < listaNomes.length; i++){

                if (nome == listaNomes[i]){

                    posicaoNome = i

                    listaNomes.splice(posicaoNome, 1)

                }

            }

            nomeEditado = prompt("Qual deseja colocar no lugar: ")
            listaNomes.splice(posicaoNome, 0, nomeEditado)

            break

        case 4:

            nomePesquisado = prompt("Qual nome deseja pesquisar na lista: ")

            for (let i = 0; i < listaNomes.length; i++){

                if (nomePesquisado == listaNomes[i]){

                    posicaoNome = i

                    alert(`O nome '${nomePesquisado}' existe na lista e se encontra na posição ${posicaoNome}`)

                }else{

                    encontrouNome = false
                    contador++
                    
                }
                
            }
            
            if (encontrouNome == false && contador == 3){

                alert("O nome pesquisado não existe na lista!")
                contador = 0
                encontrouNome = true

            }
            break

        case 5:

            if (listaNomes.length < 1){

                alert(`A lista de nomes está vázia!`)

            }else{

                alert(`Lista dos nomes cadastrados: ${listaNomes}`)

            }
            
            break

        case 0:
            alert("Programa finalizado...")
            break

        default:
            alert("Opção selecionada inválida. Selecione uma opção válida!")
            break

    }
    
} while (escolhaMenu != 0);