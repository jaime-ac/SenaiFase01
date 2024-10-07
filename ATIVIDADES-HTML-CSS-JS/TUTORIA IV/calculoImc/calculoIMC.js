/*
1) Criar um sistema (de acordo com a imagem) onde o usuário digite seu peso e altura, seja calculado o IMC (peso / altura * altura). Mostrar no campo de IMC o valor do IMC com duas casas após a vírgula, e no campo resultado o resultado de acordo com a tabela abaixo.

IMC menor que 15 -> "Muito abaixo do Peso"
IMC igual ou maior que 15 e menor que 18 -> "Abaixo do Peso"
IMC igual ou maior que 18 e menor que 25 -> "Peso Adequado"
IMC igual ou maior que 25 e menor que 28 -> "Acima do Peso"
IMC igual ou maior que 28 -> "Muito acima do Peso"

TUTORIA IV
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Lógica de Programação - HTML & JS
Data: 07/06/2024
*/

let altura = document.getElementById("alturaPessoa")
let peso = document.getElementById("pesoPessoa")

let imc = document.getElementById("imcPessoa")
let resultado = document.getElementById("resultadoPessoa")

let resultadoImc

function CalculoImc(){

    resultadoImc = ((Number(peso.value) / (Number(altura.value) * Number(altura.value)))).toFixed(2)
    imc.value = resultadoImc

    if (resultadoImc < 15){
        resultado.value = 'Muito abaixo do Peso'
    }

    if (resultadoImc >= 15 && resultadoImc < 18){
        resultado.value = 'Abaixo do Peso'
    }

    if (resultadoImc >= 18 && resultadoImc < 25){
        resultado.value = 'Peso Adequado'
    }

    if (resultadoImc >= 25 && resultadoImc < 28){
        resultado.value = 'Acima do Peso'
    }

    if (resultadoImc >= 28){
        resultado.value = 'Muito acima do Peso'
    }

}