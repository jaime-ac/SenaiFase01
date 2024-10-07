/*
INSTITUIÇÃO: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Disciplina: Lógica de Programação
Tutoria 1: 
Atividade 8: Solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.
*/
programa {
  funcao inicio() {

    real salarioFuncionario, bonusFuncionario, anosServico, novoSalario

    escreva("Por favor, informe o seu salário: ")
    leia(salarioFuncionario)
    escreva("Agora informe seus anos de serviço: ")
    leia(anosServico)

    se(anosServico > 5){
      bonusFuncionario = salarioFuncionario * 0.05
      novoSalario = salarioFuncionario + bonusFuncionario
    }senao{
      bonusFuncionario = 00.00
      novoSalario = salarioFuncionario
    }

    escreva("\nO seu salário é de : R$ ", salarioFuncionario)
    escreva("\nVocê tem ", anosServico, " anos de serviço.")
    escreva("\nO seu bônus pelos anos de serviço é de: R$ ", bonusFuncionario)
    escreva("\nSeu ganho total é de: R$ ", novoSalario, "\n")
  }
}
