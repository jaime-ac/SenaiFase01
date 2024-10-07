/*
Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011)

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 02/05/2024
*/

let dataNascimento

dataNascimento = Number(prompt("Digita a sua data de nascimento (apenas o ano): "))

switch(true){

    case (dataNascimento <= 1945):
        alert(`Data de nascimento digitado: ${dataNascimento} \nGeração: Sem Geração`)
        break

    case (dataNascimento >= 1946) && (dataNascimento <= 1964):
        alert(`Data de nascimento digitado: ${dataNascimento} \nGeração: Baby Boomers`)
        break

    case (dataNascimento >= 1965) && (dataNascimento <= 1980):
        alert(`Data de nascimento digitado: ${dataNascimento} \nGeração: Geração X`)
        break

    case (dataNascimento >= 1981) && (dataNascimento <= 1996):
        alert(`Data de nascimento digitado: ${dataNascimento} \nGeração: Geração Y`)
        break

    case (dataNascimento >= 1997) && (dataNascimento <= 2010):
        alert(`Data de nascimento digitado: ${dataNascimento} \nGeração: Geração Z`)
        break

    case (dataNascimento >= 2011):
        alert(`Data de nascimento digitado: ${dataNascimento} \nGeração: Geração Alfa`)
        break

    //default:
        //alert(`Data digitada inválida, tente novamente!`)
}