/*
3) Criar um tradutor de números (De 1 a 5) de inglês para português, utilizando HTML e JS. O sistema deve seguir o modelo (imagem anexa). Um número um inglês deve ser selecionado no select e quando for clicado no botão "Traduzir" a tradução dele deve ser mostrada no input "Resultado", com uma mensagem em amarelo "Tradução efetuada. Caso nenhum número esteja selecionado, mostrar "Nenhuma opção escolhida".

SESI SENAI - FLN
JAIME ANTÓNIO CÁ
LUCAS NASPOLINI
LISTA II - HTML + JS
DATA: 11/06/2024
*/

let traducaoNumero = document.getElementById("resultado")
let mensagem = document.getElementById("situacaoEscolha")
let numeroEscolhido = document.getElementById("escolha")

let situacao = 'Seu número foi traduzido!'

function Traduzir(){

    if (Number(numeroEscolhido.value == '0')){

        mensagem.innerHTML = 'Nenhuma opção escolhida!'

        traducaoNumero.value = ''
        
    }
        
    if (Number(numeroEscolhido.value == 1)){
            
        mensagem.innerHTML = situacao

        traducaoNumero.value = 'Um'
    }

    if (Number(numeroEscolhido.value == 2)){
            
        mensagem.innerHTML = situacao

        traducaoNumero.value = 'Dois'
    }

    if (Number(numeroEscolhido.value == 3)){
            
        mensagem.innerHTML = situacao

        traducaoNumero.value = 'Três'
    }

    if (Number(numeroEscolhido.value == 4)){
            
        mensagem.innerHTML = situacao

        traducaoNumero.value = 'Quatro'
    }

    if (Number(numeroEscolhido.value == 5)){
            
        mensagem.innerHTML = situacao

        traducaoNumero.value = 'Cinco'
    } 

}