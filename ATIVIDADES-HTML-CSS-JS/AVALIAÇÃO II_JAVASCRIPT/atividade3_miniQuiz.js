/*
Atividade 3: Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional switch/case.
O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica.
Realizar o cálculo da pontuação e mostrar ao final.

1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

A) Van Helsing (2 pontos)
B) Castlevania (3 pontos)
C) The Vampire Diaries (2 pontos)
D) Blade: The Series (1 ponto)

2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

A) Alice no País das Maravilhas (4 pontos)
B) O Hobbit (2 pontos)
C) A Fantástica Fábrica de Chocolates (4 pontos)
D) Coraline (3 pontos)

3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

A) The Legend of Zelda (3 pontos)
B) Kirby (2 pontos)
C) Metroid (2 pontos)
D) Super Mario Bros (4 pontos)

4) Quais dos autores citados, representam melhor o gênero de livros de terror?

A) Stephen King (4 pontos)
B) Edgar Allan Poe (2 pontos)
C) H.P. Lovecraft (3 pontos)
D) Mary Shelley (4 pontos)

Instituição: SESI SENAI
Unidade Curicular: Lógica de Programação/Javascript
Data: 14/05/2024
Avaliação II
Professor: Lucas Naspolini
Aluno: Jaime António Cá
*/

//DECLARAÇÃO DE VARIÁVEIS
let respostaPergunta1, respostaPergunta2, respostaPergunta3, respostaPergunta4
let pontuacaoPergunta1, pontuacaoPergunta2, pontuacaoPergunta3, pontuacaoPergunta4, somaPontuacao

alert(`>>>> SEJA BEM VINDO(A) AO QUIZ MUNDO DE FANTASIA <<<<\nNeste Quiz, as regras são as seguintes:\n >> Você terá um total de 4 perguntas para responder;\n >> Cada pergunta terá quatro opções sendo elas (A, B, C ou D); >> Cada opção conta com uma pontuação específica sendo de 1 a 4;\n >> Caso você digite alguma opção inválida, será atribuído zero (0) pontos para a resposta da pergunta;\n >> No final, será apresentado a você a pontuação total que você conseguiu.\n\nAgora que você entendeu como o Quiz Mundo da Fantasia funciona, te desejo BOA SORTE no jogo!!!`)

// o .toLowerCase() -> é para converter a resposta do usuário em letras minúsculas, eliminando o problema do jogador digitar letras maiúsculas ou minúsculas

//ENTRADA E PROCESSAMENTO DE DADOS
respostaPergunta1 = prompt("1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA) Van Helsing\nB) Castlevania\nC) The Vampire Diaries\nD) Blade: The Series\n\nSua resposta é a opção [A, B, C ou D]: ").toLowerCase()
switch (respostaPergunta1){
    case 'a':
        pontuacaoPergunta1 = 2
        break
    case 'b':
        pontuacaoPergunta1 = 3
        break
    case 'c':
        pontuacaoPergunta1 = 2
        break
    case 'd':
        pontuacaoPergunta1 = 1
        break
    default:
        alert(`Você digitou uma opção inválida. Será atribuído zero (0) pontos nessa resposta.`)
        pontuacaoPergunta1 = 0
        break
}

respostaPergunta2 = prompt("2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA) Alice no País das Maravilhas\nB) O Hobbit\nC) A Fantástica Fábrica de Chocolates\nD) Coraline\n\nSua resposta é a opção [A, B, C ou D]: ").toLowerCase()
switch (respostaPergunta2){
    case 'a':
        pontuacaoPergunta2 = 4
        break
    case 'b':
        pontuacaoPergunta2 = 2
        break
    case 'c':
        pontuacaoPergunta2 = 4
        break
    case 'd':
        pontuacaoPergunta2 = 3
        break
    default:
        alert(`Você digitou uma opção inválida. Será atribuído zero (0) pontos nessa resposta.`)
        pontuacaoPergunta2 = 0
        break
}

respostaPergunta3 = prompt("3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n\nA) The Legend of Zelda\nB) Kirby\nC) Metroid\nD) Super Mario Bros\n\nSua resposta é a opção [A, B, C ou D]: ").toLowerCase()
switch (respostaPergunta3){
    case 'a':
        pontuacaoPergunta3 = 3
        break
    case 'b':
        pontuacaoPergunta3 = 2
        break
    case 'c':
        pontuacaoPergunta3 = 2
        break
    case 'd':
        pontuacaoPergunta3 = 4
        break
    default:
        alert(`Você digitou uma opção inválida. Será atribuído zero (0) pontos nessa resposta.`)
        pontuacaoPergunta3 = 0
        break
}

respostaPergunta4 = prompt("4) Quais dos autores citados, representam melhor o gênero de livros de terror?\n\nA) Stephen King\nB) Edgar Allan Poe\nC) H.P. Lovecraft\nD) Mary Shelley\n\nSua resposta é a opção [A, B, C ou D]: ").toLowerCase()
switch (respostaPergunta4){
    case 'a':
        pontuacaoPergunta4 = 4
        break
    case 'b':
        pontuacaoPergunta4 = 2
        break
    case 'c':
        pontuacaoPergunta4 = 3
        break
    case 'd':
        pontuacaoPergunta4 = 4
        break
    default:
        alert(`Você digitou uma opção inválida. Será atribuído zero (0) pontos nessa resposta.`)
        pontuacaoPergunta4 = 0
        break
}

somaPontuacao = pontuacaoPergunta1 + pontuacaoPergunta2 + pontuacaoPergunta3 + pontuacaoPergunta4

//SAÍDA DE DADOS
if (somaPontuacao == 15){
    alert(`Sua pontuação total foi: ${somaPontuacao} pontos\n\nParabéns, você conseguiu a pontuação máxima!!!`)
}else{
    alert(`Sua pontuação total foi: ${somaPontuacao} pontos`)
}