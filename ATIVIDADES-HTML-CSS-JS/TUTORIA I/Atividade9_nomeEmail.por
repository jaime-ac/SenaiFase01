/*
INSTITUI��O: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime Ant�nio C�
Disciplina: L�gica de Programa��o
Tutoria 1: 
Atividade 9: Solicite o nome e email de 5 pessoas e mostre na tela ao final.
*/
programa {
  funcao inicio() {

    cadeia nomeUm, nomeDois, nomeTres, nomeQuatro, nomeCinco
    cadeia emailUm, emailDois, emailTres, emailQuatro, emailCinco

    escreva("Digite o nome da primeira pessoa: ")
    leia(nomeUm)
    escreva("Digite o e-mail da primeira pessoa: ")
    leia(emailUm)
    escreva("\n")

    escreva("Digite o nome da segunda pessoa: ")
    leia(nomeDois)
    escreva("Digite o e-mail da segunda pessoa: ")
    leia(emailDois)
    escreva("\n")

    escreva("Digite o nome da terceira pessoa: ")
    leia(nomeTres)
    escreva("Digite o e-mail da terceira pessoa: ")
    leia(emailTres)
    escreva("\n")

    escreva("Digite o nome da quarta pessoa: ")
    leia(nomeQuatro)
    escreva("Digite o e-mail da quarta pessoa: ")
    leia(emailQuatro)
    escreva("\n")

    escreva("Digite o nome da quinta pessoa: ")
    leia(nomeCinco)
    escreva("Digite o e-mail da quinta pessoa: ")
    leia(emailCinco)
    escreva("\n")

    escreva("\t\t\t >>>>>>>>>> DADOS DE SA�DA <<<<<<<<<<<\n")
    escreva("1� pessoa:")
    escreva("\nNome: ", nomeUm)
    escreva("\nE-mail: ", emailUm)

    escreva("\n\n2� pessoa:")
    escreva("\nNome: ", nomeDois)
    escreva("\nE-mail: ", emailDois)

    escreva("\n\n3� pessoa:")
    escreva("\nNome: ", nomeTres)
    escreva("\nE-mail: ", emailTres)

    escreva("\n\n4� pessoa:")
    escreva("\nNome: ", nomeQuatro)
    escreva("\nE-mail: ", emailQuatro)
    
    escreva("\n\n5� pessoa:")
    escreva("\nNome: ", nomeCinco)
    escreva("\nE-mail: ", emailCinco)
    escreva("\n")
  }
}
