/*
3) Faça um programa que gera uma lista dos números primos existentes entre 1 e um número inteiro digitado pelo usuário.

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição
Data: 16/05/2024
*/

let numeroDigitado, indice = 1, divisores = 0, numerosPrimos = '', contador = 1

numeroDigitado = Number(prompt("Digite um número inteiro como limite superior da lista: "))

while (contador <= numeroDigitado){

    numeroVerificado = contador // a variável númeroVerificado recebe o contador que é igual ao limite inferior, ou seja, vai ser o número a ser verificado a cada loop;
    indice = 1
    divisores = 0

    while (indice <= numeroVerificado){
        if (numeroVerificado % indice == 0){
            divisores = divisores + 1
        }
        indice = indice + 1
    }
    if (divisores == 2){ // com essa condição o número 1 vira exceção da regra, pois ele não terá dois divisores, mas apenas 1;
        alert(`${numeroVerificado} é um número primo.`)
        //numerosPrimos = numerosPrimos + numeroVerificado
    }
        
    contador = contador + 1
}

//alert(`Os números primos no intervalo de de 1 a ${numeroDigitado}, são: ${numerosPrimos}`)
// como usar o .split() para separar os números no variável com algum caracter?