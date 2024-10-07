/*
4) Você é um colecionador de vinis e resolveu ir ao sebo para comprar alguns vinis raros. Porém, você tem apenas R$200 para gastar.
Faça um programa que pergunte o nome do vinil e o valor, repetidamente.
Caso o valor ultrapasse R$200, encerrar (desconsiderando o último vinil). Mostrar na tela:
a) O total gasto em reais dos vinis.
b) O valor que sobrou em dinheiro.
c) Quantos vinis foram comprados.
d) A média de preço dos vinis.
e) O vinil mais caro e o mais barato.

Instituição: SESI SENAI
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tema: Estrutura de Repetição
Data: 16/05/2024
*/

let valorTotal = 0, trocoDinheiro, quantidadeVinil = 0
let mediaValorVinil, vinilMaisCaro, vinilMaisBarato
let nomeVinilMaisCaro, nomeVinilMaisBarato
let nomeVinil, valorVinil, saldo = 200

while (valorTotal <= saldo){

    nomeVinil = prompt("Digite o nome do Vinil: ")
    valorVinil = Number(prompt("Informe o valor do vinil: "))

    valorTotal = valorTotal + valorVinil
    
    if (valorTotal <= saldo){
        if (quantidadeVinil == 0){

            vinilMaisCaro = valorVinil
            vinilMaisBarato = valorVinil

        }else{

            if (valorVinil > vinilMaisCaro){
                vinilMaisCaro = valorVinil
                nomeVinilMaisCaro = nomeVinil
            }
            
            if (valorVinil < vinilMaisBarato){
                vinilMaisBarato = valorVinil
                nomeVinilMaisBarato = nomeVinil
            }

        }
    }

    quantidadeVinil ++
}

valorTotal = valorTotal - valorVinil
quantidadeVinil --

mediaValorVinil = valorTotal / quantidadeVinil
trocoDinheiro = saldo - valorTotal

alert(`>>>> Comprovante <<<<\n\nTotal gasto: ${valorTotal.toFixed(2)}\nTroco do cliente: ${trocoDinheiro.toFixed(2)}\nQuantidade de vinis comprados: ${quantidadeVinil}\nMédia de preço dos vinis: ${mediaValorVinil.toFixed(2)}\nNome vinil mais caro: ${nomeVinilMaisCaro}\nValor vinil mais caro: ${vinilMaisCaro.toFixed(2)}\nNome vinil mais barato: ${nomeVinilMaisBarato}\nValor vinil mais barato: ${vinilMaisBarato.toFixed(2)}`)
