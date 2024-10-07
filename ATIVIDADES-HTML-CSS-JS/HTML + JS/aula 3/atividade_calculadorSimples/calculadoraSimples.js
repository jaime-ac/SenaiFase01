/*
2) Criar uma mini-calculadora SIMPLES, com HTML e JS.
A calculadora deve ter:

-> Título, duas labels, dois inputs e quatro botões.
-> Utilizar os 2 valores dos inputs para realizar a operação do botão clicado.
-> Mostra o resultado em um alert

Aluno: Jaime António Cá
Professor: Lucas Naspolini
Disciplina: Lógica de Programação _ HTML + JS
Data: 05/06/2024

*/

let valorUm = document.getElementById("inptValorUm")
let valorDois = document.getElementById("inptValorDois")
let soma, subtracao, multiplicacao, divisao

//função da soma
function Soma() {

    soma = Number(valorUm.value) + Number(valorDois.value)

    alert(`A soma dos dois valores é igual a: ${soma}`)  
    
}

//função da subtração
function Subtracao(){
    
    subtracao = Number(valorUm.value) - Number(valorDois.value)
    
    alert(`A subtração do primeiro valor pelo segundo valor é igual a: ${subtracao}`)  
    
}

//função da multiplicação
function Multiplicacao(){
    
    multiplicacao = Number(valorUm.value) * Number(valorDois.value)
    
    alert(`A multiplicação dos dois valores é igual a: ${multiplicacao}`)  
    
}

//função da divisão
function Divisao(){
    
    divisao = Number(valorUm.value) / Number(valorDois.value)
    
    alert(`A divisão do primeiro valor pelo segundo valor é igual a: ${divisao.toFixed(1)}`)  

}