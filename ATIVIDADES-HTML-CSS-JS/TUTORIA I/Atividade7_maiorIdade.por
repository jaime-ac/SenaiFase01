/*
INSTITUIÇÃO: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Disciplina: Lógica de Programação
Tutoria 1: 
Atividade 7: Solicite a idade do usuário e informe se é maior de 18 anos.
*/
programa {
  funcao inicio() {

    inteiro idadePessoa

    escreva("Digite sua idade: ")
    leia(idadePessoa)

    se(idadePessoa > 18){
      escreva("\nVocê é maior de 18 anos.\n")
    }senao se(idadePessoa == 18){
      escreva("\nVocê tem 18 anos.\n")
    }senao{
      escreva("\nVocê é menor de 18 anos.\n")
    }
    
  }
}
