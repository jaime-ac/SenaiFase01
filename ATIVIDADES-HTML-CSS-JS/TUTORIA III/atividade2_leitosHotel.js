/*
2) Um hotel possui 130 leitos no total, mas devido a problemas, está atendendo somente com capacidade de 50% leitos, sendo que desses, 25 estão ocupados pelas próximas semanas.  Faça um programa que o usuário digite o número de pessoas que entra (com números positivos) e o número de pessoas que saem (com números negativos). Caso a capacidade de 50% seja ultrapassada, mostrar mensagem “não é possível pois ultrapassa a capacidade em X leitos”, sendo X o número a mais de hóspedes que ficariam sem leito. (DESAFIO: Criar condição para não aceitar abrir novas vagas digitando número negativo caso já estejam as 40 vagas livres).

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 22/05/2024
TUTORIA III
*/

let leitosTotal = 130, capacidadeDisponivel, leitosOcupados, leitosDisponiveis
let entradaPessoas, saidaPessoas, excessoPessoas
let contador = 0

capacidadeDisponivel = leitosTotal * 0.50 // corresponde a 50% de leitos disponíveis para atendimento;
leitosOcupados = capacidadeDisponivel * 0.25 // leitos ocupados pelas próximas semanas nos leitos disponíveis
leitosDisponiveis = capacidadeDisponivel - leitosOcupados // leitos disponíveis para alocar
//alert(`Capacidade Disponível: ${capacidadeDisponivel}\nLeitos Ocupados: ${leitosOcupados}\nLeitos Disponíveis: ${leitosDisponiveis}`)

while (contador < leitosDisponiveis){

    entradaPessoas = Number(prompt("Quantas pessoas vão entrar (digite números positivos): "))
    if(entradaPessoas < 0){
        alert(`Atenção: o número de pessoas que estão entrando tem que ser positivo (digite números positivos)!`)
        entradaPessoas = Number(prompt("Informe quantas pessoas vão entrar (digite números negativos): "))
    }
    saidaPessoas = Number(prompt("Informe quantas pessoas saíra (digite números negativos): "))
    if(saidaPessoas >= 0){
        alert(`Atenção: o número de pessoas que saíram que ser negativo (digite números negativos)!`)
        saidaPessoas = Number(prompt("Informe quantas pessoas saíra (digite números negativos): "))
    }

    


    //contador = contador + 
}