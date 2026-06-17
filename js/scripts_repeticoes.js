// ESTRUTURA DE REPETIÇÃO

const divFor = document.querySelector('#div-for');

for (let i = 0; i < 10; i++) {
    console.log(i, 'Amor');
    divFor.innerHTML += `${i} - Amor <br>`;
}

// CONTADOR/ACUMULADOR

const inputNum = document.querySelector('#num');
const bitNum = document.querySelector('#btn-num');
const divContAcum = document.querySelector('#div-cont-acum');

let cont = 0;
let acum = 0;

bitNum.addEventListener('click', (evt) => {

    let numDigitado = Number(inputNum.value);

    cont++;
    acum += numDigitado;

    divContAcum.innerHTML = `
        TOTAL DE NÚMEROS DIGITADOS: ${cont} <br>
        A SOMA DOS NÚMEROS É: ${acum}
    `;

    inputNum.value = '';


})

//CONTROLANDO FOR
const inputFrase = document.querySelector('#Frase')
const inputNumRepeticao = document.querySelector
('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('div-frase')

btnFrase.addEventListener('click', (evt) => {
    let numRepeti = Number(inputNumRepeticao.value)
    let frase =  inputFrase.value

    for (i = 0; i < numRepeti; i++) {
        divFrase.innerHTML += '$(i + 1) - $ (frase) <br>'

    }

})

//COLEÇÃO DE DADOS - ARRAY
const presentes = {'Bicicletas', 'Camisa do Mengão', 'Doleira', 'Tênis Adidas'}

const divArray = document.querySelector('#div-array')

//divArray.innerHTML = presentes[6]

for(i = 0;i <5;i++) {
divArray.innerHTML += '${presentes(i) }'

}

//FOR IN


