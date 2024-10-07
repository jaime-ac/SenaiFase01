/*
1) Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos,
25 centavos e 50 centavos. O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo
até que o usuário digite 0 (condição para encerrar). Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda
que foi inserida naquele dia e o total acumulado de economia.

Instituição: SESI SENAI FLORIANÓPOLIS
Disciplina: Lógica de Programação/Javascript
Professor: Lucas Naspolini
Aluno: Jaime António Cá
Tutoria III
*/

let moedas1centavos = 0, moedas5centavos = 0, moedas10centavos = 0, moedas25centavos = 0, moedas50centavos = 0
let valor1centavos, valor5centavos, valor10centavos, valor25centavos, valor50centavos
let deposito, totalAcumulado

do{

    deposito = Number(prompt("Qual moeda deseja inserir no cofre: "))

    switch (true){
        case (deposito == 1):
            moedas1centavos ++
            break
        
        case (deposito == 5):
            moedas5centavos ++
            break

        case (deposito == 10):
            moedas10centavos ++
            break
            
        case (deposito == 25):
            moedas25centavos ++
            break

        case (deposito == 50):
            moedas50centavos ++
            break

        case (deposito == 0):
            alert(`Depósito no cofre encerrado...`)
            break

        default:
            alert("A moeda digitada é inválida, digite uma moeda válida!")
    }

}while (deposito != 0)

//totalAcumulado = (moedas1centavos * 1) + (moedas5centavos * 5) + (moedas10centavos * 10) + (moedas25centavos * 25) + (moedas50centavos * 50)

valor1centavos = moedas1centavos * 0.01
valor5centavos = moedas5centavos * 0.05
valor10centavos = moedas10centavos * 0.10
valor25centavos = moedas25centavos * 0.25
valor50centavos = moedas50centavos * 0.50

totalAcumulado = valor1centavos + valor5centavos + valor10centavos + valor25centavos + valor50centavos

alert(`>>>> MEU COFRE <<<<\n\nMoedas de 1 centavo: ${moedas1centavos}\nMoedas de 5 centavos: ${moedas5centavos}\nMoedas de 10 centavos: ${moedas10centavos}\nMoedas de 25 centavos: ${moedas25centavos}\nMoedas de 50 centavos: ${moedas50centavos}\n\nTotal acumulado: R$${totalAcumulado.toFixed(2)}`)