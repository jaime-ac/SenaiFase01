/*
INSTITUIÇÃO: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Disciplina: Lógica de Programação
Tutoria 1: 
Atividade 4: Solicite ao usuário três notas e seus respectivos pesos, e calcule a média ponderada.
*/

programa {
  funcao inicio() {

    real notaUm, notaDois, notaTres, somaNotas, mediaPonderada
    inteiro pesoNotaUm, pesoNotaDois, pesoNotaTres, somaPesos

    escreva("Informe a primeira nota: ")
    leia(notaUm)
    escreva("Agora informe o peso da primeira nota: ")
    leia(pesoNotaUm)

    escreva("Informe a segunda nota: ")
    leia(notaDois)
    escreva("Agora informe o peso da segunda nota: ")
    leia(pesoNotaDois)

    escreva("Informe a terceira nota: ")
    leia(notaTres)
    escreva("Agora informe o peso da terceira nota: ")
    leia(pesoNotaTres)

    somaNotas = (notaUm * pesoNotaUm) + (notaDois * pesoNotaDois) + (notaTres * pesoNotaTres)
    somaPesos = pesoNotaUm + pesoNotaDois + pesoNotaTres

    mediaPonderada = somaNotas  / somaPesos

    escreva("\nA Média Ponderada das notas digitadas com seus respectivos pesos é igual a: ", mediaPonderada, "\n")
    
  }
}
