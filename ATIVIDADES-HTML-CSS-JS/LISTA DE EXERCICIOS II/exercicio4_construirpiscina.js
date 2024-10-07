/*Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos.
O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento.
Digitar os valores (em metros) da largura e comprimento que deseja a piscina.
Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago,
sendo que uma caixa de azulejo com 60 unidades custa R$45,50.

Instituição: SESI SENAI
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 25/04/2024 */

let larguraPiscina, comprimentoPiscina, metroQuadradoPiscina, precoTotal
let totalAzulejos,precoCaixaAzulejos = 45.50, quantidadeAzulejosCaixa = 60, totalCaixa

larguraPiscina = Number(prompt("Informe a largura da piscina: "))
comprimentoPiscina = Number(prompt("Informe o comprimento da piscina: "))

metroQuadradoPiscina = larguraPiscina * comprimentoPiscina
totalAzulejos = metroQuadradoPiscina * 120
totalCaixa = totalAzulejos / quantidadeAzulejosCaixa
precoTotal = totalCaixa * precoCaixaAzulejos

alert(`A piscina terá ${metroQuadradoPiscina} m², serão necessários um total de ${totalAzulejos} azulejos equivalente a ${totalCaixa} caixas de 60 unidades de azulejos cada.\nE custará ${precoTotal.toFixed(2)} reais no total.`)

