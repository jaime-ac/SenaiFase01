/*
INSTITUIÇÃO: SESI SENAI - FLN
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Disciplina: Lógica de Programação
Tutoria 1: 
Atividade 1: Solicite ao usuário um valor em horas e converta para minutos e segundos.
*/
programa {
  funcao inicio() {

    inteiro horas, horasMinutos, horasSegundos

    escreva("Informe a hora que deseja converter em minutos e segundos: ")
    leia(horas)

    //para converter horas em minutos basta multiplicar a hora por 60;
    horasMinutos = horas * 60

    //para converter horas em segundos basta multiplicar a hora por 3600;
    horasSegundos = horas * 3600

    escreva("\nVocê digitou ", horas, " horas")
    escreva("\n", horas, " horas corresponde a ", horasMinutos, " minutos.")
    escreva("\n", horas, " horas corresponde a ", horasSegundos, " segundos.\n")
    
  }
}
