/*
Atividade 5: Desenvolva um programa onde o nadador digite a sua idade e mostre na tela a qual categoria ele pertence.
 
  - "Infantil A" de 5 a 7 anos de idade
  - "Infantil B" de 8 a 10 anos de idade
  - "Juvenil A" de 11 a 13 anos de idade
  - "Juvenil B" de 14 a 17 anos de idade
  - "Senior" com 18 anos de idade ou mais

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 08/05/2024
TUTORIA II
*/

let idadeNadador

idadeNadador = Number(prompt("Informe a idade do nadador: "))

switch (true){

  case (idadeNadador >= 5) && (idadeNadador <= 7):
    alert(`>>>>>> CATEGORIA DO NADADOR <<<<<<\nInfantil A ==> de 5 a 7 anos\nInfantil B ==> de 8 a 10 anos\nJuvenil A ==> de 11 a 13 anos\nJuvenil B ==> de 14 a 17 anos\nSenior ==> de 18 ou mais\n\nIdade digitada: ${idadeNadador}\nO nadador é de Categoria: Infantil A`)
    break

  case (idadeNadador >= 8) && (idadeNadador <= 10):
    alert(`>>>>>> CATEGORIA DO NADADOR <<<<<<\nInfantil A ==> de 5 a 7 anos\nInfantil B ==> de 8 a 10 anos\nJuvenil A ==> de 11 a 13 anos\nJuvenil B ==> de 14 a 17 anos\nSenior ==> de 18 ou mais\n\nIdade digitada: ${idadeNadador}\nO nadador é de Categoria: Infantil B`)
    break

  case (idadeNadador >= 11) && (idadeNadador <= 13):
    alert(`>>>>>> CATEGORIA DO NADADOR <<<<<<\nInfantil A ==> de 5 a 7 anos\nInfantil B ==> de 8 a 10 anos\nJuvenil A ==> de 11 a 13 anos\nJuvenil B ==> de 14 a 17 anos\nSenior ==> de 18 ou mais\n\nIdade digitada: ${idadeNadador}\nO nadador é de Categoria: Juvenil A`)
    break

  case (idadeNadador >= 14) && (idadeNadador <= 17):
    alert(`>>>>>> CATEGORIA DO NADADOR <<<<<<\nInfantil A ==> de 5 a 7 anos\nInfantil B ==> de 8 a 10 anos\nJuvenil A ==> de 11 a 13 anos\nJuvenil B ==> de 14 a 17 anos\nSenior ==> de 18 ou mais\n\nIdade digitada: ${idadeNadador}\nO nadador é de Categoria: Juvenil B`)
    break

  case (idadeNadador >= 18):
    alert(`>>>>>> CATEGORIA DO NADADOR <<<<<<\nInfantil A ==> de 5 a 7 anos\nInfantil B ==> de 8 a 10 anos\nJuvenil A ==> de 11 a 13 anos\nJuvenil B ==> de 14 a 17 anos\nSenior ==> de 18 ou mais\n\nIdade digitada: ${idadeNadador}\nO nadador é de Categoria: Senhior`)
    break

  default:
    alert(`Idade digitada: ${idadeNadador}\nObservação: A idade digitada não pertence a nenhuma das categorias, tente novamente!`)
    break
  }
