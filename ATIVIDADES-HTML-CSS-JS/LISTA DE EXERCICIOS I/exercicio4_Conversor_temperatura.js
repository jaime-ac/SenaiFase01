/*Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit.
Mostrar o resultado na tela.

Instituição: SESI SENAI
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 25/04/2024*/

let temperaturaGraus, temperaturaFahrenheit

temperaturaGraus = Number(prompt("Digite a temperatura em Graus Celsius: "))

temperaturaFahrenheit = (temperaturaGraus * 9 / 5) + 32

alert(`${temperaturaGraus} Graus Celsius é equivalente a ${temperaturaFahrenheit} Fahrenheit.`)