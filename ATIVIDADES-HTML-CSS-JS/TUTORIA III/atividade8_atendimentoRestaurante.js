/*
8) Um determinado restaurante trabalha com limite de lotação de 50 pessoas. 
Porém, mesmo com esse limite, o restaurante pode encerrar seu atendimento antes do horário por falta de insumos para produção das refeições. 
Criar um programa que receba os dados da quantidade de pessoas que chegam ao restaurante (repetidamente) e seos insumos estão "ok" ou
"insuficientes". Caso alguma das duas possibilidades aconteça, encerrar o programa e mostrar ao final o motivo do encerramento 
(atingiu limite de pessoa ou faltaram insumos).

Intituição: SESI SENAI - FLN
Aluno: Jaime António Cá
Professor: Lucas Naspolini
Data: 21/05/2024
TUTORIA III
*/

let limiteLotacao = 50, contador = 0
let quantidadePessoas, insumos

while (contador < limiteLotacao){

    quantidadePessoas = Number(prompt("Quantas pessoas chegaram no restaurante agora: "))
    contador = contador + quantidadePessoas

    if (contador >= limiteLotacao){
        alert(`Atendimento Encerrado...\nMotivo: Limite de lotação atingido.`)
        break
    }else{
        insumos = prompt("Como estão os insumos ('ok' ou 'insuficientes'): ").toLowerCase()
        if (insumos == 'insuficientes'){
            alert(`Atendimento Encerrado...\nMotivo: Insumos insuficientes.`)
            break
        }
    }
}


