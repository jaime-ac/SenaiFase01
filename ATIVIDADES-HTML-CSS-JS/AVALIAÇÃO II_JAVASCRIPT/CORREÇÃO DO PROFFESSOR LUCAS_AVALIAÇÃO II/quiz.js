/* Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional switch/case. O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica. Realizar o cálculo da pontuação e mostrar ao final.

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

Critérios de avaliação:

(1,0) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
(1,0) Validar para que respostas digitadas com letra minúscula (a, b, c, d) também somem os pontos.
(1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
(1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (15 pontos), incluir além da pontuação, uma mensagem "Parabéns!" */

let perguntaQuiz
let pontosQuiz = 0

alert('Bem vindo, cidadão NERD ao Quiz mais maneiro do planeta!')

perguntaQuiz = prompt(`1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA) Van Helsing (2 pontos)\nB) Castlevania (3 pontos)\nC) The Vampire Diaries (2 pontos)\nD) Blade: The Series (1 ponto)\n`).toUpperCase()

switch(perguntaQuiz){

    case 'A':
        pontosQuiz = pontosQuiz + 2
        break

    case 'B':
        pontosQuiz = pontosQuiz + 3
        break

    case 'C':
        pontosQuiz += 2
        break

    case 'D':
        pontosQuiz++
        break

    default:
        alert('Você não digitou uma alternativa. Ganha ZERO pontos!')

}

perguntaQuiz = prompt(`2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA) Alice no País das Maravilhas (4 pontos)\nB) O Hobbit (2 pontos)\nC) A Fantástica Fábrica de Chocolates (4 pontos)\nD) Coraline (3 pontos)\n`).toUpperCase()

switch(perguntaQuiz){

    case 'A':
        pontosQuiz = pontosQuiz + 4
        break

    case 'B':
        pontosQuiz = pontosQuiz + 2
        break

    case 'C':
        pontosQuiz = pontosQuiz + 4
        break

    case 'D':
        pontosQuiz = pontosQuiz + 3
        break

    default:
        alert('Você não digitou uma alternativa. Ganha ZERO pontos!')

}

perguntaQuiz = prompt(`3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n\nA) The Legend of Zelda (3 pontos)\nB) Kirby (2 pontos)\nC) Metroid (2 pontos)\nD) Super Mario Bros (4 pontos)\n`).toUpperCase()

switch(perguntaQuiz){

    case 'A':
        pontosQuiz = pontosQuiz + 3
        break

    case 'B':
        pontosQuiz = pontosQuiz + 2
        break

    case 'C':
        pontosQuiz = pontosQuiz + 2
        break

    case 'D':
        pontosQuiz = pontosQuiz + 4
        break

    default:
        alert('Você não digitou uma alternativa. Ganha ZERO pontos!')

}

perguntaQuiz = prompt(`4) Quais dos autores citados, representam melhor o gênero de livros de terror?\n\nA) Stephen King (4 pontos)\nB) Edgar Allan Poe (2 pontos)\nC) H.P. Lovecraft (3 pontos)\nD) Mary Shelley (4 pontos)\n`).toUpperCase()

switch(perguntaQuiz){

    case 'A':
        pontosQuiz = pontosQuiz + 4
        break

    case 'B':
        pontosQuiz = pontosQuiz + 2
        break

    case 'C':
        pontosQuiz = pontosQuiz + 3
        break

    case 'D':
        pontosQuiz = pontosQuiz + 4
        break

    default:
        alert('Você não digitou uma alternativa. Ganha ZERO pontos!')

}

if(pontosQuiz == 15){

    alert(`Sua pontuação foi ${pontosQuiz} pontos. Parabéns! :D`)

}else{

    alert(`Sua pontuação foi ${pontosQuiz} pontos. MELHORE!`)

}