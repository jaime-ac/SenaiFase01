/*
INSTITUI��O: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime Ant�nio C�
Disciplina: L�gica de Programa��o
Tutoria 1: 
Atividade 8: Solicite o sal�rio e os anos de servi�o de um funcion�rio. Se ele tiver mais de 5 anos de servi�o, d� um b�nus de 5% sobre o sal�rio.
*/
programa {
  funcao inicio() {

    real salarioFuncionario, bonusFuncionario, anosServico, novoSalario

    escreva("Por favor, informe o seu sal�rio: ")
    leia(salarioFuncionario)
    escreva("Agora informe seus anos de servi�o: ")
    leia(anosServico)

    se(anosServico > 5){
      bonusFuncionario = salarioFuncionario * 0.05
      novoSalario = salarioFuncionario + bonusFuncionario
    }senao{
      bonusFuncionario = 00.00
      novoSalario = salarioFuncionario
    }

    escreva("\nO seu sal�rio � de : R$ ", salarioFuncionario)
    escreva("\nVoc� tem ", anosServico, " anos de servi�o.")
    escreva("\nO seu b�nus pelos anos de servi�o � de: R$ ", bonusFuncionario)
    escreva("\nSeu ganho total � de: R$ ", novoSalario, "\n")
  }
}
