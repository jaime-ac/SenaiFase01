let quantidadeProdutoUm = document.getElementById("quantidadeProduto1")
let quantidadeProdutoDois = document.getElementById("quantidadeProduto2")
let quantidadeProdutoTres = document.getElementById("quantidadeProduto3")
let quantidadeProdutoQuatro = document.getElementById("quantidadeProduto4")

let valorProdutoUm = document.getElementById("valorProduto1")
let valorProdutoDois = document.getElementById("valorProduto2")
let valorProdutoTres = document.getElementById("valorProduto3")
let valorProdutoQuatro = document.getElementById("valorProduto4")

let totalSemDesconto = document.getElementById("valorSemDesconto")
let porcentualDesconto = document.getElementById("desconto")
let totalPagar = document.getElementById("valorFinal")

let somaValores, descontoCliente, somaValoresSemDesconto

function Calcular(){

    somaValoresSemDesconto = (valorProdutoUm.value * quantidadeProdutoUm.value) + (valorProdutoDois.value * quantidadeProdutoDois.value) + (valorProdutoTres.value * quantidadeProdutoTres.value) + (valorProdutoQuatro.value * quantidadeProdutoQuatro.value)

    totalSemDesconto.value = (somaValoresSemDesconto).toFixed(2)

    descontoCliente = (somaValoresSemDesconto * porcentualDesconto.value) / 100

    somaValores = (somaValoresSemDesconto - descontoCliente).toFixed(2)
    totalPagar.value = somaValores

}