//declaração de variáveis
let questao1, questao2, questao3, questao4
let pontos = 0

//alert(`Aqui tenho que criar uma mensagem de boas vindas que explica a regra do jogo`)

//entrada de dados
//.toLowerCase -> serve para converter a resposta em letra minúscula, evitando erros de digitação por parte do usuário
questao1 = prompt("1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA) Van Helsing\nB) Castlevania\nC) The Vampire Diaries\nD) Blade: The Series\n\nSua resposta é a opção (A, B, C ou D): ").toLowerCase()
questao2 = prompt("2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA) Alice no País das Maravilhas\nB) O Hobbit\nC) A Fantástica Fábrica de Chocolates\nD) Coraline\n\nSua resposta é a opção (A, B, C ou D): ").toLowerCase()
questao3 = prompt("3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros\n\nSua resposta é a opção (A, B, C ou D): ").toLowerCase()
questao4 = prompt("4) Quais dos autores citados, representam melhor o gênero de livros de terror?\n\nA) Stephen King\nB) Edgar Allan Poe\nC) H.P. Lovecraft\nD) Mary Shelley\n\nSua resposta é a opção (A, B, C ou D): ").toLowerCase()

//processamento de dados
//verificando pontuação da primeira pergunta
switch (questao1){
    case 'a':
        pontos = pontos + 2
        break
    case 'b':
        pontos = pontos + 3
        break
    case 'c':
        pontos = pontos + 2
        break
    case 'd':
        pontos = pontos + 1
        break
    default:
        pontos = pontos + 0
        break
}
//verificando pontuação da segunda pergunta
switch (questao2){
    case 'a':
        pontos = pontos + 4
        break
    case 'b':
        pontos = pontos + 2
        break
    case 'c':
        pontos = pontos + 4
        break
    case 'd':
        pontos = pontos + 3
        break
    default:
        pontos = pontos + 0
        break
}
//verificando pontuação da terceira pergunta
switch (questao3){
    case 'a':
        pontos = pontos + 3
        break
    case 'b':
        pontos = pontos + 2
        break
    case 'c':
        pontos = pontos + 2
        break
    case 'd':
        pontos = pontos + 4
        break
    default:
        pontos = pontos + 0
        break
}
//verificando pontuação da quarta pergunta
switch (questao4){
    case 'a':
        pontos = pontos + 4
        break
    case 'b':
        pontos = pontos + 2
        break
    case 'c':
        pontos = pontos + 3
        break
    case 'd':
        pontos = pontos + 4
        break
    default:
        pontos = pontos + 0
        break
}
//saída de dados
if (pontos == 15){
    alert("Pontuação total:" + pontos + "\nParabéns!!!")
}else{
    alert("Pontuação total:" + pontos + " pontos.")
}