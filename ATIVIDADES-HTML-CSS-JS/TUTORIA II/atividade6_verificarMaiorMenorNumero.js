/*
Atividade 6: Faça um programa do qual o usuário digite quatro números e ao final mostre o maior número, o menor número,
e a soma dos outros dois números (que não são o maior nem o menor). Caso existam números repetidos digitados,
após o usuário digitar os quatro números, não mostrar maior, menor nem soma,
mas sim uma mensagem "Você digitou números repetidos".

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 09/05/2024
TUTORIA II
*/

let numeroUm, numeroDois, numeroTres, numeroQuatro, maiorNumero, menorNumero, somaNumeros, somaOutrosDoisNumeros

numeroUm = Number(prompt("Digite o primeiro número: "))
maiorNumero = numeroUm
menorNumero = numeroUm

numeroDois = Number(prompt("Digite o segundo número: "))
if (numeroDois > maiorNumero){
    maiorNumero = numeroDois
}
if(numeroDois < menorNumero){
    menorNumero = numeroDois
}

numeroTres = Number(prompt("Digite o terceiro número: "))
if (numeroTres > maiorNumero){
    maiorNumero = numeroTres
}
if(numeroTres < menorNumero){
    menorNumero = numeroTres
}

numeroQuatro = Number(prompt("Digite o quarto número: "))
if (numeroQuatro > maiorNumero){
    maiorNumero = numeroQuatro
}
if(numeroQuatro < menorNumero){
    menorNumero = numeroQuatro
}

if (numeroUm == numeroDois || numeroUm == numeroTres || numeroUm == numeroQuatro || numeroDois == numeroTres || numeroDois == numeroQuatro || numeroTres == numeroQuatro){
    alert(`Você digitou números repetidos!`)    
}else{
    somaNumeros = numeroUm + numeroDois + numeroTres + numeroQuatro
    somaOutrosDoisNumeros = somaNumeros - maiorNumero - menorNumero
    
    alert(`Números digitados: ${numeroUm}, ${numeroDois}, ${numeroTres}, ${numeroQuatro}\nMaior número digitado: ${maiorNumero}\nMenor número digitado: ${menorNumero}\nSoma dos outros dois números: ${somaOutrosDoisNumeros}`)
}