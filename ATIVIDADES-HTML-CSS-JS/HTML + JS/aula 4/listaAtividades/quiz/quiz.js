/*

6) Criar um Quiz com 3 perguntas, onde o usuário digita uma resposta para cada no seu respectivo input. Selecionar a forma na qual será mostrada ALERT, INPUT ou DIV (configurar os radios para que o usuário consiga selecionar somente um). Ao clicar no botão de resultado, devem ser mostradas as respostas da forma escolhida somente se o checkbox estiver marcado, caso contrário, mostrar por alert mensagem para o usuário avisando que deve marcar o checkbox.

SESI SENAI - FLN
JAIME ANTÓNIO CÁ
LUCAS NASPOLINI
LISTA I - HTML + JS
DATA: 11/06/2024
*/

let respostaUm = document.getElementById("respostaPergunta1")
let respostaDois = document.getElementById("respostaPergunta2")
let respostaTres = document.getElementById("respostaPergunta3")

let saidaAlert = document.getElementById("radioAlert")
let saidaInput = document.getElementById("radioInput")
let saidaDiv = document.getElementById("radioDiv")

let caixaConfirmacao = document.getElementById("caixaCheckbox")

let resultadoInput = document.getElementById("inptSaida")
let resultadoDiv = document.getElementById("resultDiv")

function ResultadoQuiz(){

    if (caixaConfirmacao.checked == false){

        alert("Atenção: a caixa de confirmação precisa ser marcada!")

    }

    if (saidaAlert.checked == false && saidaInput.checked == false && saidaDiv.checked == false){

        alert("Atenção, você precisa selecionar uma forma de visualizar sua resposta (Alert; Input; DIV)")

    }else{

        //saída alert
       if(saidaAlert.checked == true){
        alert(`Suas respostas são:\n${respostaUm.value}\n${respostaDois.value}\n${respostaTres.value}`)
       }
    
       //saída input
       if(saidaInput.checked == true){
    
        resultadoInput.value = `Suas respostas são:\n${respostaUm.value}\n${respostaDois.value}\n${respostaTres.value}`
    
       }
    
       //saída div
       if(saidaDiv.checked){
        resultadoDiv.innerHTML = `Suas respostas são:\n${respostaUm.value}\n${respostaDois.value}\n${respostaTres.value}`
       }

    }


}