/*
INSTITUI��O: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime Ant�nio C�
Disciplina: L�gica de Programa��o
Tutoria 1: 
Atividade 5: Pe�a tr�s n�meros ao usu�rio e os exiba em ordem crescente.
*/

programa {
  funcao inicio() {

    inteiro numeroUm, numeroDois, numeroTres, maiorNumero, menorNumero, numeroMeio

    escreva("Informe o primeiro n�mero: ")
    leia(numeroUm)

    escreva("Informe o segundo n�mero: ")
    leia(numeroDois)

    escreva("Informe o terceiro n�mero: ")
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
    
    escreva("\nOs n�meros digitados na ordem crescente ficam: ", menorNumero, ", ", numeroMeio, ", ", maiorNumero, "\n")
  }
}
