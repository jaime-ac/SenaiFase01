/*
INSTITUIÇÃO: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Disciplina: Lógica de Programação
Tutoria 1: 
Atividade 5: Peça três números ao usuário e os exiba em ordem crescente.
*/

programa {
  funcao inicio() {

    inteiro numeroUm, numeroDois, numeroTres, maiorNumero, menorNumero, numeroMeio

    escreva("Informe o primeiro número: ")
    leia(numeroUm)

    escreva("Informe o segundo número: ")
    leia(numeroDois)

    escreva("Informe o terceiro número: ")
    leia(numeroTres)

    se(numeroUm > numeroDois e numeroUm > numeroTres){
      maiorNumero = numeroUm
      se(numeroDois > numeroTres){
        numeroMeio = numeroDois
        menorNumero = numeroTres
      }senao{
        numeroMeio = numeroTres
        menorNumero = numeroDois
      }
    }senao se(numeroDois > numeroUm e numeroDois > numeroTres){
      maiorNumero = numeroDois
      se(numeroUm > numeroTres){
        numeroMeio = numeroUm
        menorNumero = numeroTres
      }senao{
        numeroMeio = numeroTres
        menorNumero = numeroUm
      }
    }senao{
      maiorNumero = numeroTres
      se(numeroUm > numeroDois){
        numeroMeio = numeroUm
        menorNumero = numeroDois
      }senao{
        numeroMeio = numeroDois
        menorNumero = numeroUm
      }
    }
    
    escreva("\nOs números digitados na ordem crescente ficam: ", menorNumero, ", ", numeroMeio, ", ", maiorNumero, "\n")
  }
}
