/*
1) Programar um sistema onde o usuário preencha 5 números (inputs) com um botão que verifica se os números são pares ou ímpares. Caso algum número não seja preenchido, mostrar "Indefinido".

SESI SENAI - FLN
JAIME ANTÓNIO CÁ
LUCAS NASPOLINI
LISTA II - HTML + JS
DATA: 11/06/2024
*/

let primeiroNumero = document.getElementById("numero1")
let segundoNumero = document.getElementById("numero2")
let terceiroNumero = document.getElementById("numero3")
let quartoNumero = document.getElementById("numero4")
let quintoNumero = document.getElementById("numero5")

let resultadoPrimeiroNumero = document.getElementById("resultadoNumero1")
let resultadoSegundoNumero = document.getElementById("resultadoNumero2")
let resultadoTerceiroNumero = document.getElementById("resultadoNumero3")
let resultadoQuartoNumero = document.getElementById("resultadoNumero4")
let resultadoQuintoNumero = document.getElementById("resultadoNumero5")

function VerificarNumero(){

    //verifica o primeiro número
    if(primeiroNumero.value == ''){

        resultadoPrimeiroNumero.value = 'Resultado Indefinido'

    }else{

        if (Number(primeiroNumero.value % 2 == 0)){
    
            resultadoPrimeiroNumero.value = 'Número Par'
    
        }else if (Number(primeiroNumero.value % 2 == 1)){
    
            resultadoPrimeiroNumero.value = 'Número Ímpar'
        }
    }

    //verifica o segundo número
    if(segundoNumero.value == ''){

        resultadoSegundoNumero.value = 'Resultado Indefinido'

    }else{

        if (Number(segundoNumero.value % 2 == 0)){
    
            resultadoSegundoNumero.value = 'Número Par'
    
        }else if (Number(segundoNumero.value % 2 == 1)){
    
            resultadoSegundoNumero.value = 'Número Ímpar'
        }
    }

    //verifica o terceiro número
    if(terceiroNumero.value == ''){

        resultadoTerceiroNumero.value = 'Resultado Indefinido'

    }else{

        if (Number(terceiroNumero.value % 2 == 0)){
    
            resultadoTerceiroNumero.value = 'Número Par'
    
        }else if (Number(terceiroNumero.value.value % 2 == 1)){
    
            resultadoTerceiroNumero.value = 'Número Ímpar'
        }
    }

    //verifica o quarto número
    if(quartoNumero.value == ''){

        resultadoQuartoNumero.value = 'Resultado Indefinido'

    }else{

        if (Number(quartoNumero.value % 2 == 0)){
    
            resultadoQuartoNumero.value = 'Número Par'
    
        }else if (Number(quartoNumero.value % 2 == 1)){
    
            resultadoQuartoNumero.value = 'Número Ímpar'
        }
    }

    //verifica o quinto número
    if(quintoNumero.value == ''){

        resultadoQuintoNumero.value = 'Resultado Indefinido'

    }else{

        if (Number(quintoNumero.value % 2 == 0)){
    
            resultadoQuintoNumero.value = 'Número Par'
    
        }else if (Number(quintoNumero.value % 2 == 1)){
    
            resultadoQuintoNumero.value = 'Número Ímpar'
        }
    }

}