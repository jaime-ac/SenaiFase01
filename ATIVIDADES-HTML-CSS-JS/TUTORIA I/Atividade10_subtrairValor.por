/*
INSTITUI��O: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime Ant�nio C�
Disciplina: L�gica de Programa��o
Tutoria 1: 
Atividade 10: Pe�a ao usu�rio que digite n�meros que sejam subtra�dos (descontados) de 100,
mostrando o valor atualizado a cada n�mero digitado. Quando o valor chegar a zero ou ficar negativo, encerrar o programa.
*/

programa {
  funcao inicio() {

    inteiro numeroDigitado, valor = 100

    enquanto(valor > 0){
      escreva("\nDigite um n�mero a ser subtra�do do valor: ")
      leia(numeroDigitado)

      valor = valor - numeroDigitado

      escreva("\nValor atualizado: ", valor, "\n")
    }
    
    escreva("\nO valor chegou a zero ou ficou negativo. Programa encerrado!\n")
  }
}
