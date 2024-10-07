/*
4) Criar um jogo de adivinhação. O usuário deve digitar um número entre 0 e 100 (número secreto). 
Em seguida deve ser perguntado qual número imagina-se que seja o número secreto. 
A cada rodada, deve-se dar dicas após o palpite "o número digitado é menor" ou "o número digitado é maior". 
Quando o número for adivinhado, mostrar uma mensagem de parabéns e o número de tentativas realizadas.

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 21/05/2024
TUTORIA III
*/

let numeroSecreto, tentativas = 0
let palpiteUsuario

numeroSecreto = Math.floor(Math.random() * 100) // a função gera um número inteiro aleatório no intervalo de 0 a 100

do{

    palpiteUsuario = Number(prompt("Digite um número de 0 a 100 para adivinhar o número secreto: "))

    if (palpiteUsuario < numeroSecreto){
        alert("O número digitado é menor que o número secreto. Tente novamente!")
    }
    if (palpiteUsuario > numeroSecreto){
        alert("O número digitado é maior que o número secreto. Tente novamente!")  
    }

    tentativas ++

}while(palpiteUsuario != numeroSecreto)

alert(`>>>>>>> PARABÉNS <<<<<<<<\n\nVocê acertou o número secreto.Número secreto: ${numeroSecreto}\nNúmero de tentativas: ${tentativas}`)