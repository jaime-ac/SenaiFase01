/*
2) Fazer um programa no qual o usuário deve digitar um número e o expoente dele. Mostrar na tela o resultado do cálculo. (Não é permitido usar o operador **).

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição - FOR
Data: 23/05/2024
*/

let numero, expoente, resultado = 1

numero = Number(prompt("Digite um número: "))
expoente = Number(prompt("Agora infore o seu expoente: "))

for (let contador = 0; contador < expoente; contador++){
    
    resultado = resultado * numero

}

alert(`${numero} elevado ${expoente} é igual a ${resultado}`)