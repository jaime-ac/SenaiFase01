/*
2) Os números primos possuem várias aplicações dentro da Computação, por exemplo, na criptografia.
Um número primo é aquele que é divisível apenas por um e por ele mesmo.
Faça um programa que peça ao usuário para digitar cinco números inteiros e mostre na tela se são primos ou não.

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição
Data: 16/05/2024
*/

let numeroDigitado, contador = 0

while (contador < 5){

    numeroDigitado = Number(prompt("Digite um número inteiro: "))

    indice = 1 
    divisores = 0

    while (indice <= numeroDigitado){
        if (numeroDigitado % indice == 0){
            divisores = divisores + 1
        }
        indice = indice + 1
    }
    if (divisores == 2){ // com essa condição o número 1 vira exceção da regra, pois ele não terá dois divisores, mas apenas 1;
        alert(`O número digitado é primo!!!`)
    }else{
        alert(`O número digitado não é primo!`)
    }

    contador = contador + 1
}