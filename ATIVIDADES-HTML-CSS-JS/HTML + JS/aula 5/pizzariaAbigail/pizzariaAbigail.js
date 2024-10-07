/*
2) Criar um sistema utilizando HTML e JS, para a Pizzaria da Abgail. Deve conter um título, a mensagem de promoção com 15% de desconto para pedidos acima de R$50 um menu select com 4 sabores, onde um deles custa menos que R$50, outro exatamente R$50, outros dois acima de R$50. Após selecionar o sabor, ao clicar no botão de comprar, devem ser mostrados em dois inputs: o valor do pedido e o valor com desconto se for acima de R$50.

SESI SENAI - FLN
JAIME ANTÓNIO CÁ
LUCAS NASPOLINI
LISTA II - HTML + JS
DATA: 11/06/2024
*/

let saborEscolhido = document.getElementById("saborPizza")
let valorSemDesconto = document.getElementById("valor")
let valorTotal = document.getElementById("valorFinal")

let desconto

function ComprarPizza(){

    if (Number(saborEscolhido.value <= 50)){

        valorSemDesconto.value = Number(saborEscolhido.value).toFixed(2)
        
        valorTotal.value = Number(saborEscolhido.value).toFixed(2)

    }else{
        
        valorSemDesconto.value = Number(saborEscolhido.value).toFixed(2)

        desconto = Number(saborEscolhido.value) * 0.15

        valorTotal.value = (Number(saborEscolhido.value) - desconto).toFixed(2)
    }

}