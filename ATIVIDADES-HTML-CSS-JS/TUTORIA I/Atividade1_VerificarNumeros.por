/*
INSTITUI��O: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime Ant�nio C�
Disciplina: L�gica de Programa��o
Tutoria 1: 
Atividade 1: Pe�a dois n�meros ao usu�rio e informe qual � o maior e qual � o menor, ou se s�o iguais.
*/

programa {
  funcao inicio() {

    inteiro primeiroNumero, segundoNumero

    escreva("Digite um n�mero inteiro: ")
    leia(primeiroNumero)

    escreva("Digite um outro n�mero inteiro: ")
    leia(segundoNumero)

    se (primeiroNumero > segundoNumero){
      escreva("\nO primeiro n�mero digitado (", primeiroNumero, ") � MAIOR QUE o segundo n�mero (", segundoNumero, ") digitado.\n")
    } senao se(primeiroNumero < segundoNumero){
      escreva("\nO primeiro n�mero digitado (", primeiroNumero, ") � MENOR QUE o segundo n�mero (", segundoNumero, ") digitado.\n")
    } senao{
      escreva("\nOs dois n�meros digitados s�o iguais.\n")
    }
  }
    
}
