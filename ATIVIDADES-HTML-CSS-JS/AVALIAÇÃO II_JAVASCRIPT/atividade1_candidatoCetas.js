/*
Atividade 1: O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes.
Criar um sistema que receba os dados do candidato (nome, idade, formação e cidade) para sinalizar se ele pode concorrer às vagas.
Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer.
Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

Vaga para Equipe de Resgate -> O candidato deve ter de 25 a 50 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
Vaga para Equipe de Tratamento -> O candidato deve ter de 22 a 60 anos, possuir formação em "Veterinária" e residir em Florianópolis.

Instituição: SESI SENAI
Unidade Curicular: Lógica de Programação/Javascript
Data: 14/05/2024
Avaliação II
Professor: Lucas Naspolini
Aluno: Jaime António Cá
*/

//DECLARAÇÃO DE VARIÁVEIS
let nomeCandidato, idadeCandidato, formacaoCandidato, cidadeCandidato

//ENTRADA DE DADOS
nomeCandidato = prompt("Por favor, informe o nome do candidato: ")
idadeCandidato = Number(prompt("Por favor, informe a idade do candidato: "))
formacaoCandidato = prompt("Informe agora a formação do candidato: ").toUpperCase()
cidadeCandidato = prompt("E por último, informe a cidade do candidato: ").toUpperCase()
//coloquei o .toUpperCase() para converter todos os caracteres digitados em maiúscula, desta forma elimino o problema do usuário digitar em caixa alta ou baixa

//PROCESSAMENTO E SAÍDA DE DADOS
if ((idadeCandidato >= 25 && idadeCandidato <= 50) && (formacaoCandidato == 'BIOLOGIA' || formacaoCandidato == 'ECOLOGIA') && (cidadeCandidato == 'FLORIANÓPOLIS')){
    alert(`>>>> RESULTADO DO PROCESSO DE SELEÇÃO <<<<\n\nNome do Candidato: ${nomeCandidato}\nSituação: Está apto a concorrer\nVaga para: Equipe de Resgate`)

} else if ((idadeCandidato >= 22 && idadeCandidato <= 60) && (formacaoCandidato == 'VETERINÁRIA') && (cidadeCandidato == 'FLORIANÓPOLIS')){
    alert(`>>>> RESULTADO DO PROCESSO DE SELEÇÃO <<<<\n\nNome do Candidato: ${nomeCandidato}\nSituação: Está apto a concorrer\nVaga para: Equipe de Tratamento`)

}else{
    alert(`>>>> RESULTADO DO PROCESSO DE SELEÇÃO <<<<\n\nNome do Candidato: ${nomeCandidato}\nSituação: Não está apto a concorrer`)
}