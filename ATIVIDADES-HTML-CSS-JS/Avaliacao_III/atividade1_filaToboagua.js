/*
Um parque aquático recém inaugurou uma das suas mais incríveis atrações: ComboLoco, um toboágua gigante. Para organização das filas, resolveu separar em grupos de 10 pessoas por vez, onde as crianças tem preferência em relação aos adultos. Criar um sistema que simule essa fila. Deve-se perguntar o nome e a idade de cada uma das 10 pessoas, caso seja criança (menor que 12 anos) vai para o início da fila, caso não seja criança, vai para o final da fila. Ao final, mostrar a fila com os nomes.

Exemplo: João, 60 anos, chegou. Astrogildo, 67 anos chegou. Alícia, 9 anos, chegou. Enzo, 10 anos, chegou. Suzana, 25 anos, chegou.
Fila: Enzo, Alícia, João, Astrogildo, Suzana

Aluno: Jaime António Cá
Professor: Lucas Naspolini
Instituição: SESI SENAI - FLN
Avaliação III
Data: 02/07/2024
*/

let fila = []
let idades = []
let contador = 0
let nome, idade

alert(`>>>>> Bem vindos ao Parque Aquático Maravilha <<<<<\n\nEm seguida iremos pegar o nome e idade das pessoas para organizar a fila para nossa famosa ComboLoco, nossa e vossa famosa Toboágua Gigante!!!\nLembrando que a fila é organizada de acordo com a idade das pessoas, sendo crianças na frente da fila e adultos no final da final.\n\nAproveitem a diversão!!!`)

while (contador < 5){

    nome = prompt("Informe seu nome: ").toLocaleUpperCase()
    idade = Number(prompt("Informe sua idade: "))

    if (idade < 12){
        fila.unshift(nome)
        idades.unshift(idade)
    }else{
        fila.push(nome)
        idades.push(idade)
    }

    contador++
}

alert(`>>>> Parque Aquático - Toboágua COMBOLOCO <<<<\n\nFila: ${fila}\n\nIdades: ${idades}`)