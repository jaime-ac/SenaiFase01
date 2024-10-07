/*
5) Santa Catarina é conhecida por suas quatro estações bem definidas, o que o torna um estado com alta amplitude térmica 
(diferença entre a maior e a menor temperatura, registrada em um período). O INMET, Instituto Nacional de Meteorologia, 
pretende ter os dados de amplitude térmica de uma cidade ou estado. Desenvolva um programa que calcule e mostre os dados diários 
(segunda à sexta) e a média de amplitude térmica semanal, mostrando os resultados ao final. Exemplo: Digitar o nome da cidade ou estado, 
perguntar para os cinco dias da semana a maior temperatura do dia e a menor. Mostrar as amplitudes de cada dia e a média.

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 21/05/2024
TUTORIA III
*/

let cidadeEstado, diasSemana = 5, contador = 0, indiceDias = 2
let maiorTemperatura, menorTemperatura, mediaAmplitudeSemanal
let amplitudeTermica, somaAmplitudes = 0
let amplitudeDia = ''

cidadeEstado = prompt("Informe a Cidade ou Estado que deseja verificar os dados de Amplitude Térmica: ")

while (contador < 5){

    maiorTemperatura = Number(prompt("Informe a maior temperatura do dia (°C):"))
    menorTemperatura = Number(prompt("Informe a menor temperatura do dia (°C):"))

    amplitudeTermica = maiorTemperatura - menorTemperatura
    amplitudeDia = amplitudeDia + ` ${amplitudeTermica}`
    //alert(`${indiceDias}ª Feira\nAmplitude Térmica: ${amplitudeTermica.toFixed(1)} °C`)

    somaAmplitudes = somaAmplitudes + amplitudeTermica

    //indiceDias ++
    contador ++
}

mediaAmplitudeSemanal = somaAmplitudes / diasSemana
alert(`Cidade/Estado: ${cidadeEstado}\nAmplitudes Térmicas nos 5 dias da semana (de Segunda a Sexta): ${amplitudeDia}\nA média de Amplitude Térmica Semanal é de ${mediaAmplitudeSemanal.toFixed(1)} °C`)