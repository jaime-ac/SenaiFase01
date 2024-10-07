/*
2) Criar um sistema para gerenciar projetos e valores de projetos, com HTML e JS. O sistema deve deve seguir o layout anexo (imagem).

O usuário deverá informar dados de 5 projeto (nome do projeto, valor cobrado por hora e quantidade de horas previstas para concluir).

Ao final devem ser mostrados:
1) O valor individual de cada projeto
2) O valor total dos projetos.

TUTORIA IV
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Lógica de Programação - HTML & JS
Data: 07/06/2024
*/

let nomeProjetoUm = document.getElementById("nomeProjeto1")
let nomeProjetoDois = document.getElementById("nomeProjeto2")
let nomeProjetoTres = document.getElementById("nomeProjeto3")
let nomeProjetoQuatro = document.getElementById("nomeProjeto4")
let nomeProjetoCinco = document.getElementById("nomeProjeto5")

let valorHoraProjetoUm = document.getElementById("valorHoraP1")
let valorHoraProjetoDois = document.getElementById("valorHoraP2")
let valorHoraProjetoTres = document.getElementById("valorHoraP3")
let valorHoraProjetoQuatro = document.getElementById("valorHoraP4")
let valorHoraProjetoCinco = document.getElementById("valorHoraP5")

let quantidadeHorasProjetoUm = document.getElementById("quantidadeHorasP1")
let quantidadeHorasProjetoDois = document.getElementById("quantidadeHorasP2")
let quantidadeHorasProjetoTres = document.getElementById("quantidadeHorasP3")
let quantidadeHorasProjetoQuatro = document.getElementById("quantidadeHorasP4")
let quantidadeHorasProjetoCinco = document.getElementById("quantidadeHorasP5")

let resultadoProjetoUm = document.getElementById("projeto1")
let resultadoProjetoDois = document.getElementById("projeto2")
let resultadoProjetoTres = document.getElementById("projeto3")
let resultadoProjetoQuatro = document.getElementById("projeto4")
let resultadoProjetoCinco = document.getElementById("projeto5")
let somaTotalProjetos = document.getElementById("totalProjetos")

let projetoUm, projetoDois, projetoTres, projetoQuatro, projetoCinco, valorTotalProjetos

function CalculoProjetos(){

    //calculo do valor de cada projeto
    projetoUm = Number(valorHoraProjetoUm.value) * Number(quantidadeHorasProjetoUm.value)
    resultadoProjetoUm.innerHTML = `Nome: ${nomeProjetoUm.value} - Projeto 1: R$ ${projetoUm.toFixed(2)}`
    
    projetoDois = Number(valorHoraProjetoDois.value) * Number(quantidadeHorasProjetoDois.value)
    resultadoProjetoDois.innerHTML = `Nome: ${nomeProjetoDois.value} - Projeto 2: R$ ${projetoDois.toFixed(2)}`
    
    projetoTres = Number(valorHoraProjetoTres.value) * Number(quantidadeHorasProjetoTres.value)
    resultadoProjetoTres.innerHTML = `Nome: ${nomeProjetoTres.value} - Projeto 3: R$ ${projetoTres.toFixed(2)}`
    
    projetoQuatro = Number(valorHoraProjetoQuatro.value) * Number(quantidadeHorasProjetoQuatro.value)
    resultadoProjetoQuatro.innerHTML = `Nome: ${nomeProjetoQuatro.value} - Projeto 4: R$ ${projetoQuatro.toFixed(2)}`
    
    projetoCinco = Number(valorHoraProjetoCinco.value) * Number(quantidadeHorasProjetoCinco.value)
    resultadoProjetoCinco.innerHTML = `Nome: ${nomeProjetoCinco.value} - Projeto 5: R$ ${projetoCinco.toFixed(2)}`

    //calculo do valor total de todos os projetos
    valorTotalProjetos = projetoUm + projetoDois + projetoTres + projetoQuatro + projetoCinco

    somaTotalProjetos.innerHTML = `Total Geral: R$ ${valorTotalProjetos.toFixed(2)}`

}