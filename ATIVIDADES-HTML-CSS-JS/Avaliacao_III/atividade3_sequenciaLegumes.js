/*
A brincadeira "Acerte os legumes" consiste em acertar uma sequência de legumes (batata, beterraba, mandioca, cebola, pepino) geradas aleatoriamente pelo sistema. Criar um sistema no qual são gerados 3 legumes entre os citados acima e armazenados. Em seguida peça para o usuário digitar (um de cada vez) quais legumes ele acha que formam a sequência. Caso acerte todos as legumes na ordem correta, mostrar uma mensagem "Parabéns! Você acertou a sequência", mostrando ainda os legumes gerados e os legumes digitados pelo usuário. Caso erre algum legume, mostrar uma mensagem "Você não acertou todos os legumes". Ao final, dar opção para o jogador jogar novamente ou não, iniciando uma nova rodada caso responda SIM ou finalizando o programa caso responda NÃO.

Aluno: Jaime António Cá
Professor: Lucas Naspolini
Instituição: SESI SENAI - FLN
Avaliação III
Data: 02/07/2024
*/

let legumesGeral = ['batata', 'beterraba', 'mandioca', 'cebola', 'pepino']
let legumesGerada = [], legumesDigitados = []
let legumeAleatoria, contador = 0
let min = 0, max
let acertos = 0, erros = 0, tentativa

max = legumesGeral.length

let opcao

do {
    
    while (contador < 3){
    
        legumeAleatoria = (Math.floor(Math.random() * (max - min) + min))
    
        legumesGerada.push(legumesGeral[legumeAleatoria])
    
        contador++
    }
    console.table(legumesGerada)
    
    for (let i = 0; i < legumesGerada.length; i++){
    
        tentativa = prompt("Digite a fruta da sequêcia: ").toLowerCase()
        legumesDigitados.push(tentativa)
    
        if (tentativa == legumesGerada[i]){

            acertos++

        }else{

            erros++

        }
    
    }
    
    if (acertos == 3){
    
        alert(`Parabéns! Você acertou a sequência.\n\nLista Gerada: ${legumesGerada}\nLegumes Digitados: ${legumesDigitados}`)
    
    }else{
    
        alert(`Você não acertou todos os legumes!\n\nLista Gerada: ${legumesGerada}\nLegumes Digitados: ${legumesDigitados}`)
    
    }

    opcao = prompt("Deseja jogar novamente (S -> Sim / N -> Não): ").toUpperCase()

    if (opcao == 'S'){

        legumesGerada = [], legumesDigitados = []
        legumeAleatoria, contador = 0
        min = 0, max
        acertos = 0, erros = 0, tentativa

        max = legumesGeral.length

    }else{

        alert('Jogo encerrado!!!')

    }

} while (opcao != 'N');