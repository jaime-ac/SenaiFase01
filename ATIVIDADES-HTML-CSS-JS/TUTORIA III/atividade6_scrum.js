/*
6) SCRUM é uma metodologia ágil de gerenciamento de projetos muito utilizada na área da tecnologia. 
Dentro do SCRUM, o planejamento é realizado através de 'sprints' que normalmente variam de 15 a 30 dias. 
Criar um programa onde o usuário deve digitar o tempo total do projeto em dias e o período das sprints. 
Após calculado o número de sprints (média), arredondando o número para baixo, cadastrar para cada sprint um título e um objetivo.

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 21/05/2024
TUTORIA III
*/

let tempoTotalProjeto, periodoSprints, mediaSprints, numeroSprints
let listaTitulos = '', listaObjetivos = ''
let contador = 0, indiceSprints = 1
let tituloSprint, objetivoSprint

tempoTotalProjeto = Number(prompt("Informe o tempo total do projeto em dias: "))
periodoSprints = Number(prompt("Informe o período das sprints: "))

mediaSprints = tempoTotalProjeto / periodoSprints
numeroSprints = Math.floor(mediaSprints) // o Math.floor() arredonda o número para baixo, retornando apenas a parte inteira
//alert(numeroSprints)

while (contador < numeroSprints){

    alert(`Sprint nº ${indiceSprints}`)
    tituloSprint = prompt("Digite o título do sprint: ")
    listaTitulos = listaTitulos + ` / ${tituloSprint}` // guarda o título digitado na lista dos títulos
    
    objetivoSprint = prompt("Descreva o objetivo do sprint: ")
    listaObjetivos = listaObjetivos + ` / ${objetivoSprint}` // guarda o objetivo digitado na lista dos objetivos

    indiceSprints ++
    contador ++
}

alert(`Títulos dos Sprints (separados por / ): ${listaTitulos}\nObjetivos dos Sprints (separado por / ): ${listaObjetivos}`)