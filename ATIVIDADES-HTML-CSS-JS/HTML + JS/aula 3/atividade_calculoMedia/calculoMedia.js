let notaUm = document.getElementById("inptPrimeiraNota")
let notaDois = document.getElementById("inptSegundaNota")
let notaTres = document.getElementById("inptTerceiraNota")
let mediaNotas

function Media(){

    mediaNotas = (Number(notaUm.value) + Number(notaDois.value) + Number(notaTres.value)) / 3

    alert(`A média das três notas inseridas é igual a: ${mediaNotas.toFixed(1)}`)

}