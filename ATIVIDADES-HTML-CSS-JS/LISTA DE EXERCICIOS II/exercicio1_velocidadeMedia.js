/*Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média
das trilhas que você realiza. Para isso, devem ser digitados os dados de distância percorrida (quilômetros)
e tempo que a trilha durou (horas). Fazer então o cálculo da velocidade média e mostrar na tela a mensagem
"Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.

Instituição: SESI SENAI
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 25/04/2024*/

let distanciaPercorrida, tempoDuracao, velocidadeMedia

distanciaPercorrida = Number(prompt("Informe a distância percorrida em Km: "))
tempoDuracao = Number(prompt("Informe o tempo de duração da trilha em horas: "))

velocidadeMedia = distanciaPercorrida / tempoDuracao

alert(`A velocidade média durante essa trilha foi de ${velocidadeMedia.toFixed(2)} km/h.`)