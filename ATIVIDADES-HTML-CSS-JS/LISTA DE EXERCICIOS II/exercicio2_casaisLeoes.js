/*Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo,
exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos.
Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental.
Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo)
existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.

Instituição: SESI SENAI
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 25/04/2024*/

let casaisLeoes, totalLeoes = 14, territorioCasal = 400, territorioIndividuo = 320
let areaDominada, areaCasal, areaIndividuo, leoesSolteiros

casaisLeoes = Number(prompt("Informe quantos casais existem no território dentre o total dos leões baios: "))
leoesSolteiros = totalLeoes - (casaisLeoes * 2)
areaCasal = casaisLeoes * casal
areaIndividuo = leoesSolteiros * 320
areaDominada = areaCasal + areaIndividuo

alert(`Existem um total de ${totalLeoes} leões baios, sendo 9 fêmeas e 5 machos.\nFoi identificado ${casaisLeoes} casais dentre o total e ${leoesSolteiros} leoes solteiros.`)
alert(`Os casais dominam uma área de ${areaCasal} km², enquanto o restante ocupa uma área de ${areaIndividuo} km².`)
alert(`Logo, o total de área dominada pelos leões baios é de ${areaDominada} km²`)



