/*
INSTITUIÇÃO: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Disciplina: Lógica de Programação
Tutoria 1: 
Atividade 10: Peça ao usuário que digite números que sejam subtraídos (descontados) de 100,
mostrando o valor atualizado a cada número digitado. Quando o valor chegar a zero ou ficar negativo, encerrar o programa.
*/

programa {
  funcao inicio() {

    inteiro numeroDigitado, valor = 100

    enquanto(valor > 0){
      escreva("\nDigite um número a ser subtraído do valor: ")
      leia(numeroDigitado)

      valor = valor - numeroDigitado

      escreva("\nValor atualizado: ", valor, "\n")
    }
    
    escreva("\nO valor chegou a zero ou ficou negativo. Programa encerrado!\n")
  }
}
