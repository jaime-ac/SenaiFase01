/*
INSTITUIÇÃO: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Disciplina: Lógica de Programação
Tutoria 1: 
Atividade 1: Peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.
*/

programa {
  funcao inicio() {

    inteiro primeiroNumero, segundoNumero

    escreva("Digite um número inteiro: ")
    leia(primeiroNumero)

    escreva("Digite um outro número inteiro: ")
    leia(segundoNumero)

    se (primeiroNumero > segundoNumero){
      escreva("\nO primeiro número digitado (", primeiroNumero, ") É MAIOR QUE o segundo número (", segundoNumero, ") digitado.\n")
    } senao se(primeiroNumero < segundoNumero){
      escreva("\nO primeiro número digitado (", primeiroNumero, ") É MENOR QUE o segundo número (", segundoNumero, ") digitado.\n")
    } senao{
      escreva("\nOs dois números digitados são iguais.\n")
    }
  }
    
}
