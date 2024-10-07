/*
1) Supondo que a população de um país A seja da ordem de 80.000 habitantes com uma taxa anual de crescimento de 3% e
que a população de B seja 200.000 habitantes com uma taxa de crescimento de 1.5%.
Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B,
mantidas as taxas de crescimento.

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição
Data: 16/05/2024
*/

let paisA = 80000, paisB = 200000
let taxaAnualCrescimentoA, taxaAnualCrescimentoB, contadorAno = 0

while (paisB > paisA){
    
    taxaAnualCrescimentoA = (paisA * 3) / 100
    taxaAnualCrescimentoB = (paisB * 1.5) / 100

    paisB = paisB + taxaAnualCrescimentoB
    paisA = paisA + taxaAnualCrescimentoA

    contadorAno = contadorAno + 1
}

alert(`O país A terá população igual ou mais que o país B em ${contadorAno} anos.`)