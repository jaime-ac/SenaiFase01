/*
7) Na maioria das linguagens de programação, é possível contar caracteres de uma string (palavra, frase, etc). Criar um sistema no qual o usuário digite 5 palavras e ao final mostre o tamanho em número de caracteres, de cada uma delas. (Pesquisar sobre o comando length, para solução).

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição - FOR
Data: 27/05/2024
*/

//listaTamanhoPalavras = '' -> essa lista era para guardar apenas a quantidade de caracteres das palavras digitadas, porém o professor mostrou um jeito de adicionar o tamanho do string a lista de palavras também na linha nº 27

let palavraDigitada, tamanhoPalavra, indicePalavra = 1
let listaPalavrasDigitadas = ''

for (cont = 0; cont < 3; cont++){

    alert(`${indicePalavra}º Palavra`)

    palavraDigitada = prompt("Digite a palavra: ")

    tamanhoPalavra = palavraDigitada.length //para calcular ou descobrir a quantidade de caracteres da palavra digitada;

    //listaTamanhoPalavras = listaTamanhoPalavras + ` ${tamanhoPalavra}\n` -> esse comando era para guardar o quantidade de caracteres das palavras digitadas numa lista vazia;

    listaPalavrasDigitadas = listaPalavrasDigitadas + ` ${palavraDigitada} = ${tamanhoPalavra} caracteres\n` //guarda na lista a palavra e a quantidade de caracteres dela

    indicePalavra++
}

alert(`Palavras Digitadas <=> Quantidade de caracteres:\n\n${listaPalavrasDigitadas}`)
