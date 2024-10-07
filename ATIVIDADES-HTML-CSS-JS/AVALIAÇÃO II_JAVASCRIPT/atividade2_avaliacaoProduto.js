/*
Atividade 2: No site Mercado Livre, os produtos a venda podem ser avaliados pelos compradores,
o que gera um índice (média aritmética) utilizado pelo algoritmo para definir se o produto deve ou não ganhar destaque:
destaque na página principal, destaque na página da categoria daquele produto, destaque na página de promoções ou não deve ganhar destaque.
O índice é calculado através da avaliação de 3 quesitos pelo comprador: qualidade do produto, custo benefício, durabilidade.
Criar um sistema utilizando a estrutura condicional switch / case,
que receba avaliações do comprador nesses três quesitos (notas de 0 a 10) sobre um determinado produto e gere o índice dele.
Após receber as avaliações, mostrar o índice do produto e indicar se conseguiu destaque para: índice abaixo de 5 (não ganha destaque),
índice entre 5 e 7 (destaque na página da categoria), índice entre 7 a 9 (destaque em promoções),
índice igual a 9 ou maior (destaque na página principal).

Instituição: SESI SENAI
Unidade Curicular: Lógica de Programação/Javascript
Data: 14/05/2024
Avaliação II
Professor: Lucas Naspolini
Aluno: Jaime António Cá
*/

//DECLARAÇÃO DE VARIÁVEIS
let qualidadeProduto, custoBeneficioProduto, durabilidadeProduto
let indiceProduto, somaPontosProduto, quantidadeQuesitos = 3

//ENTRADA DE DADOS
qualidadeProduto = Number(prompt(">>>> Avaliação da Qualidade do Produto <<<<\n De 0 a 10, que nota você dá para a qualidade do produto: "))
custoBeneficioProduto = Number(prompt(">>>> Avaliação do Custo Benefício do Produto <<<<\n De 0 a 10, que nota você dá para o custo benefício do produto: "))
durabilidadeProduto = Number(prompt(">>>> Avaliação da Durabilidade do Produto <<<<\n De 0 a 10, que nota você dá para a durabilidade do produto: "))

//PROCESSAMENTO E SAÍDA DE DADOS
somaPontosProduto = qualidadeProduto + custoBeneficioProduto + durabilidadeProduto

indiceProduto = (somaPontosProduto / quantidadeQuesitos).toFixed(2)

switch (true){

    case (indiceProduto < 5):
        alert(`>>>> RESULTADO DA AVALIAÇÃO DO PRODUTO <<<<\n\nÍndice do Produto: ${indiceProduto}\nObservação: Produto "Não ganha Destaque"`)
        break
        
    case (indiceProduto >= 5 && indiceProduto < 7):
        alert(`>>>> RESULTADO DA AVALIAÇÃO DO PRODUTO <<<<\n\nÍndice do Produto: ${indiceProduto}\nObservação: Produto "Ganha destaque em promoções"`)
        break
        
    case (indiceProduto >= 7 && indiceProduto < 9):
        alert(`>>>> RESULTADO DA AVALIAÇÃO DO PRODUTO <<<<\n\nÍndice do Produto: ${indiceProduto}\nObservação: Produto "Ganha destaque na página da categoria"`)
        break
        
    case (indiceProduto >= 9 && indiceProduto <= 10):
        // coloquei a segunda condição <indiceProduto <= 10> porque o limite máximo do índice é 10 devido aos limites das notas de avalição.
        // isso também facilitaria o uso do default para mostrar uma mensagem de erro, caso o índice passe de 10.
        alert(`>>>> RESULTADO DA AVALIAÇÃO DO PRODUTO <<<<\n\nÍndice do Produto: ${indiceProduto}\nObservação: Produto "Ganha destaque na página principal"`)
        break

    default:
        alert(`Ocorreu algum erro na avaliação do produto, por favor tente novamente!\nLembre-se que as notas de avaliação são de 0 a 10...`)
        break
}