/*
INSTITUI��O: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime Ant�nio C�
Disciplina: L�gica de Programa��o
Tutoria 1: 
Atividade 7: Solicite a idade do usu�rio e informe se � maior de 18 anos.
*/
programa {
  funcao inicio() {

    inteiro idadePessoa

    escreva("Digite sua idade: ")
    leia(idadePessoa)

    se(idadePessoa > 18){
      escreva("\nVoc� � maior de 18 anos.\n")
    }senao se(idadePessoa == 18){
      escreva("\nVoc� tem 18 anos.\n")
    }senao{
      escreva("\nVoc� � menor de 18 anos.\n")
    }
    
  }
}
