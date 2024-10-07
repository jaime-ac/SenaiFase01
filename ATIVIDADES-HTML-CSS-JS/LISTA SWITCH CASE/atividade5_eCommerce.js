/*
Atividade 5: Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50.
A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2)
Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4)
Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4).
Mostrar na tela o valor da compra de acordo com a opção escolhida.

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 02/05/2024
*/

let frete = 12.50, valorCompra, desconto = 0, totalPagar
let categoriaCliente

valorCompra = Number(prompt("Por favor, informe o valor da compra: R$"))
categoriaCliente = Number(prompt(">>>>> Categoria de Assinante <<<<< \n1) Assinante Premium \n2) Assinante Gold \n3) Assinante Silver \n4) Não Assinante \nA qual categoria de assinante você pertence: "))

switch(categoriaCliente){
    case 1:
        desconto = valorCompra * 0.20
        totalPagar = valorCompra - desconto
        alert(`>>>>>> Comprovante da Compra <<<<<< \nCategoria: Assinante Premium \nValor da compra: R$${valorCompra.toFixed(2)} \nDesconto (20%): R$${desconto.toFixed(2)} \nFrete: Grátis \nTotal a pagar: R$${totalPagar.toFixed(2)}`)
        break

    case 2:
        desconto = valorCompra * 0.20
        totalPagar = (valorCompra - desconto) + frete
        alert(`>>>>>> Comprovante da Compra <<<<<< \nCategoria: Assinante Gold \nValor da compra: R$${valorCompra.toFixed(2)} \nDesconto (20%): R$${desconto.toFixed(2)} \nFrete: R$${frete.toFixed(2)} \nTotal a pagar: R$${totalPagar.toFixed(2)}`)
        break

    case 3:
        desconto = valorCompra * 0.10
        totalPagar = (valorCompra - desconto) + frete
        alert(`>>>>>> Comprovante da Compra <<<<<< \nCategoria: Assinante Silver \nValor da compra: R$${valorCompra.toFixed(2)} \nDesconto (10%): R$${desconto.toFixed(2)} \nFrete: R$${frete.toFixed(2)} \nTotal a pagar: R$${totalPagar.toFixed(2)}`)
        break

    case 4:
        totalPagar = valorCompra + frete
        alert(`>>>>>> Comprovante da Compra <<<<<< \nCategoria: Não Assinante \nValor da compra: R$${valorCompra.toFixed(2)} \nDesconto (00%): R$${desconto.toFixed(2)} \nFrete: R$${frete.toFixed(2)} \nTotal a pagar: R$${totalPagar.toFixed(2)}`)
        break

    default:
        alert(`A categoria selecionada não existe, tente novamente!!!`)
}