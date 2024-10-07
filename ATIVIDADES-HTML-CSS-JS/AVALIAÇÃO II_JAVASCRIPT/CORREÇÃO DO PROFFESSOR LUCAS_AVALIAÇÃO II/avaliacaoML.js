/* No site Mercado Livre, os produtos a venda podem ser avaliados pelos compradores, o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque: destaque na página principal, destaque na página da categoria daquele produto, destaque na página de promoções ou não deve ganhar destaque. O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade. Criar um sistema utilizando a estrutura condicional switch / case, que receba avaliações do comprador nesses três quesitos (notas de 0 a 10) sobre um determinado produto e gere o índice dele. Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque), índice entre 5 e 7 (destaque na página da categoria), índice entre 7 a 9 (destaque em promoções), índice igual a 9 ou maior (destaque na página principal).

Critérios de avaliação:

(1,0) Receber e armazenar as notas dos três quesitos (avaliação).
(1,0) Calcular o índice do produto (média aritmética) com duas casas após a vírgula e mostrar na tela.
(1,0) Criar o sistema de destaques com as quatro possibilidades e mostrar mensagem referente na tela. */

let qualidadeProduto, custoProduto, durabilidadeProduto
let somaNotas, indiceProduto
let quantidadeNotas = 3

qualidadeProduto = Number(prompt('Digite uma nota (De 0 a 10) para a qualidade: '))
custoProduto = Number(prompt('Digite uma nota (De 0 a 10) para o custo benefício: '))
durabilidadeProduto = Number(prompt('Digite uma nota (De 0 a 10) para a durabilidade: '))

somaNotas = qualidadeProduto + custoProduto + durabilidadeProduto
indiceProduto = Number((somaNotas / quantidadeNotas).toFixed(2))

alert('Índice do produto: ' + indiceProduto)

switch(true){

    case indiceProduto < 5:
        alert('Não ganha destaque!')
        break

    case indiceProduto >= 5 && indiceProduto < 7:
        alert('Destaque na página da categoria!')
        break

    case indiceProduto >= 7 && indiceProduto < 9:
        alert('Destaque em promoções!')
        break

    case indiceProduto >= 9:
        alert('Destaque na página principal!')
        break

    default:
        alert('Você digitou algo errado!')

}
