/*
INSTITUI��O: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime Ant�nio C�
Disciplina: L�gica de Programa��o
Tutoria 1: 
Atividade 2: Pergunte ao usu�rio o sal�rio bruto e calcule o sal�rio l�quido, considerando um desconto de 20% para impostos.
 */

programa {
  funcao inicio() {

    real salarioBruto, salarioLiquido, descontoImposto

    escreva("Por favor, informe seu sal�rio bruto em R$: ")
    leia(salarioBruto)

    descontoImposto = salarioBruto * 0.20

    salarioLiquido = salarioBruto - descontoImposto

    escreva("\nSal�rio Bruto: R$ ", salarioBruto)
    escreva("\nDesconto (20%) de imposto: R$ ", descontoImposto)
    escreva("\nSal�rio L�quido: R$ ", salarioLiquido)
    escreva("\n")
    
  }
}
