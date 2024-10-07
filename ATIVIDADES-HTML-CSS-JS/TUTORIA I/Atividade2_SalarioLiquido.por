/*
INSTITUIÇÃO: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Disciplina: Lógica de Programação
Tutoria 1: 
Atividade 2: Pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.
 */

programa {
  funcao inicio() {

    real salarioBruto, salarioLiquido, descontoImposto

    escreva("Por favor, informe seu salário bruto em R$: ")
    leia(salarioBruto)

    descontoImposto = salarioBruto * 0.20

    salarioLiquido = salarioBruto - descontoImposto

    escreva("\nSalário Bruto: R$ ", salarioBruto)
    escreva("\nDesconto (20%) de imposto: R$ ", descontoImposto)
    escreva("\nSalário Líquido: R$ ", salarioLiquido)
    escreva("\n")
    
  }
}
