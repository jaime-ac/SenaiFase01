/*
INSTITUIÇÃO: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Disciplina: Lógica de Programação
Tutoria 1: 
Atividade 6: Solicite um número ao usuário e informe se é positivo ou negativo.
*/
programa {
  funcao inicio() {

    inteiro numeroDigitado

    escreva("Por favor, digite um número inteiro: ")
    leia(numeroDigitado)

    se(numeroDigitado < 0){
      escreva("\nO número digitado é NEGATIVO.\n")
    }senao se (numeroDigitado > 0){
      escreva("\nO número digitado é POSITIVO.\n")
    }senao{
      escreva("\nVocê digitou o número zero (0). O zero é um número neutro, ou seja, não é positivo e nem negativo.\n")
    }
    
  }
}
