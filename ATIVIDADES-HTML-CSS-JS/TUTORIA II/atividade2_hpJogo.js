/*
Em um jogo o seu personagem tem 100 de HP (vida). Criar um programa onde o usuário digite o valor de um dano
(ataque sofrido pelo personagem). Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over".
Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado,
vida estável" e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!".

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 06/05/2024
Tutoria II
*/

let hp = 100, valorDano, hpRestante

valorDano = Number(prompt("Digite o valor do dano (ataque sofrido): "))

hpRestante = hp - valorDano

switch(true){

    case (hpRestante <= 0):
        alert(`Game Over! \nHP restante: ${hpRestante}`)
        break

    case (hpRestante >= 1) && (hpRestante <= 20):
        alert(`Dano crítico, quase sem vida! \nHP restante: ${hpRestante}`)
        break

    case (hpRestante >= 21) && (hpRestante <= 50):
        alert(`Dano moderado, vida estável! \nHP restante: ${hpRestante}`)
        break

    case (hpRestante >= 51) && (hpRestante <= 100):
        alert(`Dano leve, vida boa! \nHP restante: ${hpRestante}`)
        break

    default:
        alert("Comando inválido, tente novamente!!!")
}