/* O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. Criar um sistema que receba os dados do candidato (nome, idade, formação e cidade) para sinalizar se ele pode concorrer às vagas. Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

Vaga para Equipe de Resgate -> O candidato deve ter de 25 a 50 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
Vaga para Equipe de Tratamento -> O candidato deve ter de 22 a 60 anos, possuir formação em "Veterinária" e residir em Florianópolis.

Critérios de avaliação:

(1,0) Receber e armazenar os dados do candidato.
(1,0) Validar os dados e critérios para cada tipo de vaga, ou caso não possa concorrer.
(1,0) Mostrar mensagem com o nome do candidato e o tipo de vaga que pode concorrer, ou mensagem de "Não apto a concorrer". */

let nomeCandidato, idadeCandidato, formacaoCandidato, cidadeCandidato

nomeCandidato = prompt('Digite o seu nome: ')
idadeCandidato = Number(prompt('Digite a sua idade: '))
formacaoCandidato = prompt('Digite a sua formação: ')
cidadeCandidato = prompt('Digite a sua cidade: ')

if(idadeCandidato >= 25 && idadeCandidato <= 50 && formacaoCandidato == 'Biologia' || formacaoCandidato == 'Ecologia' && cidadeCandidato == 'Florianópolis'){

    alert(`Candidato ${nomeCandidato} está apto para concorrer à vaga para a Equipe de Resgate!`)

}else if(idadeCandidato >= 22 && idadeCandidato <= 60 && formacaoCandidato == 'Veterinária' && cidadeCandidato == 'Florianópolis'){

    alert(`Candidato ${nomeCandidato} está apto para concorrer à vaga para a Equipe de Tratamento!`)

}else{

    alert(`Candidato ${nomeCandidato} não está apto para concorrer à nenhuma das vagas!`)

}
