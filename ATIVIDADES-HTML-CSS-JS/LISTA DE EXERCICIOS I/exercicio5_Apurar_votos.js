/*Uma cidade pretende apurar os votos de sua eleição. Faça um programa para ler o número total de eleitores.
Em seguida o número de votos do candidato X, o número de votos do candidato Y,
total de votos brancos e total de votos nulos (a soma desses quatro, deve ser igual ao total de eleitores).
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

Instituição: SESI SENAI
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 25/04/2024*/

let totalEleitores, votosBrancos, votosCandidatoX, votosCandidatoY, votosNulos
let totalVotos
let porcentagemCandidatoX, porcentagemCandidatoY, porcentagemVotosBrancos, porcentagemVotosNulos

totalEleitores = Number(prompt("Por favor, informe o total de eleitores: "))
votosCandidatoX = Number(prompt("Informe o total de votos do candidato X: "))
votosCandidatoY = Number(prompt("Informe o total de votos do candidato Y: "))
votosNulos = Number(prompt("Informe o total de votos Nulos: "))
votosBrancos = Number(prompt("Informe o total de votos em branco: "))

totalVotos = votosBrancos + votosCandidatoX + votosCandidatoY + votosNulos

porcentagemCandidatoX = (votosCandidatoX / totalVotos) * 100
porcentagemCandidatoY = (votosCandidatoY / totalVotos) * 100
porcentagemVotosBrancos = (votosBrancos / totalVotos) * 100
porcentagemVotosNulos = (votosNulos / totalVotos) * 100

alert(`Total de Eleitores: ${totalEleitores} \nTotal de Votos: ${totalVotos.toFixed(2)}`)
alert(`Candidato X: ${votosCandidatoX} (${porcentagemCandidatoX.toFixed(2)} %)`)
alert(`Candidato Y: ${votosCandidatoY} (${porcentagemCandidatoY.toFixed(2)} %)`)
alert(`Votos Nulos: ${votosNulos} (${porcentagemVotosNulos.toFixed(2)} %)`)
alert(`Candidato em Branco: ${votosBrancos} (${porcentagemVotosBrancos.toFixed(2)} %)`)