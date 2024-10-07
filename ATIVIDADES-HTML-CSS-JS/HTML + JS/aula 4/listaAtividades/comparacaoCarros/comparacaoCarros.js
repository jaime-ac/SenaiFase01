/*
5) Criar um sistema de comparação de carros, de acordo com a imagem. Devem ser digitadas notas de 0 a 10 para os 3 critérios (conforto, economia, design) de cada carro, o que irá gerar uma média com duas casas após a vírgula. Ao clicar em comparar, devem ser mostradas a médias de cada carro e o melhor carro (carro com melhor média) nos respectivos campos.

*/

let confortoCarroUm = document.getElementById("confortoCarro1")
let confortoCarroDois = document.getElementById("confortoCarro2")
let confortoCarroTres = document.getElementById("confortoCarro3")

let economiaCarroUm = document.getElementById("economiaCarro1")
let economiaCarroDois = document.getElementById("economiaCarro2")
let economiaCarroTres = document.getElementById("economiaCarro3")

let designCarroUm = document.getElementById("confortoCarro1")
let designCarroDois = document.getElementById("confortoCarro2")
let designCarroTres = document.getElementById("confortoCarro3")

let mediaCarroUm = document.getElementById("mediaCarro1")
let mediaCarroDois = document.getElementById("mediaCarro2")
let mediaCarroTres = document.getElementById("mediaCarro3")

let melhorCarro = document.getElementById("melhorCar")

let mediaPrimeiroCarro, mediaSegundoCarro, mediaTerceiroCarro



function Comparar(){

    mediaPrimeiroCarro = (Number(confortoCarroUm.value) + Number(economiaCarroUm.value) + Number(designCarroUm.value)) / 3
    mediaCarroUm.value = (mediaPrimeiroCarro).toFixed(2)

    mediaSegundoCarro = (Number(confortoCarroDois.value) + Number(economiaCarroDois.value) + Number(designCarroDois.value)) / 3
    mediaCarroDois.value = (mediaSegundoCarro).toFixed(2)

    mediaTerceiroCarro = (Number(confortoCarroTres.value) + Number(economiaCarroTres.value) + Number(designCarroTres.value)) / 3
    mediaCarroTres.value = (mediaTerceiroCarro).toFixed(2)

    if ((mediaPrimeiroCarro > mediaSegundoCarro) && (mediaPrimeiroCarro > mediaTerceiroCarro)){

        melhorCarro.value = 'Carro 1'

    }

    if ((mediaSegundoCarro > mediaPrimeiroCarro) && (mediaSegundoCarro > mediaTerceiroCarro)){

        melhorCarro.value = 'Carro 2'

    }

    if ((mediaTerceiroCarro > mediaPrimeiroCarro) && (mediaTerceiroCarro > mediaSegundoCarro)){

        melhorCarro.value = 'Carro 3'

    }

}
