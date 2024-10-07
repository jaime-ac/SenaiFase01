/*
3) O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8 dias, mostrar a quantidade de dias que foram necessários para tal.

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 21/05/2024
TUTORIA III
*/

let baseEverest = 5360, cumeEverest = 8848, somaEscaladasDia = 0
let limiteDias = 8, contadorDias = 0
let distanciaEscalada, escaladaDia

distanciaEscalada = cumeEverest - baseEverest

while(distanciaEscalada > 0){

    escaladaDia = Number(prompt("Quantos metros você escalou hoje: "))
    somaEscaladasDia += escaladaDia
    
    contadorDias ++

    distanciaEscalada = distanciaEscalada - escaladaDia

    if (distanciaEscalada <= 0){
        alert(`Parabéns! Você chegou ao cume do Everest.\nTempo de duração: ${contadorDias} dia(s).`)
        break
    }
    if (contadorDias == limiteDias){
        alert(`Atenção: você deve voltar, pois corre risco de ficar sem oxigênio.\nLimite de dias permitido: ${limiteDias} dias.\nTempo de duração: ${contadorDias} dias.\nDistância escalada nesses 8 dias: ${somaEscaladasDia} metros.\nDistância restante: ${distanciaEscalada} metros.`)
        break
    }
}