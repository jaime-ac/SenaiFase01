/*
INSTITUI��O: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime Ant�nio C�
Disciplina: L�gica de Programa��o
Tutoria 1: 
Atividade 6: Solicite um n�mero ao usu�rio e informe se � positivo ou negativo.
*/
programa {
  funcao inicio() {

    inteiro numeroDigitado

    escreva("Por favor, digite um n�mero inteiro: ")
    leia(numeroDigitado)

    se(numeroDigitado < 0){
      escreva("\nO n�mero digitado � NEGATIVO.\n")
    }senao se (numeroDigitado > 0){
      escreva("\nO n�mero digitado � POSITIVO.\n")
    }senao{
      escreva("\nVoc� digitou o n�mero zero (0). O zero � um n�mero neutro, ou seja, n�o � positivo e nem negativo.\n")
    }
    
  }
}
