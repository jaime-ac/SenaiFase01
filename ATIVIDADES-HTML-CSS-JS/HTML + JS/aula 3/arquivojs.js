/* o código abaixo é uma função, porém ela não é executável até que seja chamada. Para chamar a função, basta digitar ela dessa forma: Alert()
function Alert(){

    alert("HTML + JS")

}
Alert() aqui eu tou chamando minha função, logo ela será executado.
*/

let elementoInputUm = document.getElementById("inptPrimeiroNumero")
let elementoInputDois = document.getElementById("inptSegundoNumero")

function Alert(){

    alert(Number(elementoInputUm.value) + Number(elementoInputDois.value))

}