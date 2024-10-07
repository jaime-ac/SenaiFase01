/*
Numa competição de arremesso de peteca, o competidor tem direito a 3 arremessos para que a peteca caia em um alvo
com áreas e pontuações de 0 a 5, sendo 5 no centro e 0 fora do alvo. Faça um programa que pergunte a pontuação de cada
arremesso e ao final mostre o resultado (soma dos pontos) e a classifição: 15 pontos (deus da peteca),
de 14 a 10 (petequeiro profissa), de 9 a 5 (petequeiro de final de semana), de 4 a 1 (pseudo-petequeiro)
e 0 pontos (nunca petequeiro).

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 02/05/2024
*/

let arremessoUm, arremessoDois, arremessoTres, pontuacao

arremessoUm = Number(prompt("Informe a pontuação do primeiro arremesso: "))
arremessoDois = Number(prompt("Informe a pontuação do segundo arremesso: "))
arremessoTres = Number(prompt("Informe a pontuação do terceiro arremesso: "))

pontuacao = arremessoUm + arremessoDois + arremessoTres

switch(true){
    
    case pontuacao == 0:
        alert(`Sua pontuação foi de: ${pontuacao} pontos \nClassificação: nunca petequeiro`)
        break
    
    case (pontuacao >= 1) && (pontuacao <= 4):
        alert(`Sua pontuação foi de: ${pontuacao} pontos \nClassificação: pseudo-petequeiro`)
        break

    case (pontuacao >= 5) && (pontuacao <= 9):
        alert(`Sua pontuação foi de: ${pontuacao} pontos \nClassificação: petequeiro de final de semana`)
        break

    case (pontuacao >= 10) && (pontuacao <= 14):
        alert(`Sua pontuação foi de: ${pontuacao} pontos \nClassificação: petequeiro profissa`)
        break

    case pontuacao == 15:
        alert(`Sua pontuação foi de: ${pontuacao} pontos \nClassificação: deus da peteca`)
        break

    default:
        alert(`Pontuação errada, verifique sua pontuação e tente novamente!`)
}
