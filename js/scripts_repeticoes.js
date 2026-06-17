//ESTRUTURA DE REPETIÇÃO
const divFor = document 

for(i = 0;i < 10; i++ ){

    console.log(i, 'Amor')
    divFor.innerHTML += '$(i) - Amor <br>'

}

//CONTADOR/ACUMULADOR
const imputnum = document.querySelector('#num')
const bitNum = document.querySelector('btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0


bitNum.addEventListener('click' ), (evt)=>{
    let numDigitado = Number (inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML= 'TOTAL DE NÚMERO DIGITADO É: $ {cont} <br>
    A SOMA DOS NÚMEROS É: $ {acum}'
    
    inputNum.value

}


