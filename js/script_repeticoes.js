//ESTRUTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for')

for (let i = 0; i < 10; i++) {
   console.log(i, 'Dinheiro')
   divFor.innerHTML += `${i} - Dinheiro <br>`
}


//CONTADOR/ACUMULADOR
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', () => {
   let numDigitado = Number(inputNum.value)

   cont++
   acum += numDigitado

   divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br>
   A SOMA DOS NÚMEROS É: ${acum}`

   inputNum.value = ''
})


//CONTROLANDO FOR
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

btnFrase.addEventListener('click', () => {
   let numRepeti = Number(inputNumRepeticao.value)
   let frase = inputFrase.value

   for (let i = 0; i < numRepeti; i++) {
      divFrase.innerHTML += `${i + 1} - ${frase} <br>`
   }
})


//COLEÇÃO DE DADOS - ARRAY
const presentes = ['Boneca', 'Carrinho', 'Quebra-Cabeça', 'Jogo de Tabuleiro', 'Bola']

const divArray = document.querySelector('#div-array')

console.log('-------------ANTES DO NOVO PRESENTE-------------')



for (let i = 0; i < presentes.length; i++) {
   divArray.innerHTML += `${i} - ${presentes[i]} <br>`
}


//FOR IN
const divForIn = document.querySelector('#div-forin')

for (let posicao in presentes) {
   divForIn.innerHTML += `${presentes[posicao]} <br>`
}


//FOR OF
const divForOf = document.querySelector('#div-forof')

for (let presente of presentes) {
   divForOf.innerHTML += `${presente} <br>`
}


//FOREACH
// const divForeach = document.querySelector('#div-foreach')

// presentes.forEach((presente) => {
//    divForeach.innerHTML += `${presente} <br>`
// })

//COLECAO DE OBJETOS LITERIAIS - ARRAY
const pessoas = [
   { nome: 'Maria Flor', idade: 25, renda: 8500 },
   { nome: 'Joerdson Souza', idade: 75, renda: 5000 },
   { nome: 'Taoca', idade: 28, renda: 500 },
   { nome: 'Chicó', idade: 36, renda: 100 },
   { nome: 'João Grilo', idade: 32, renda: 80 },
]

//MANIPULANDO ARRAY
//ADICIONAR ELEMENTOS DO ARRAY
pessoas.push({ nome: 'Magnólia', idade: 32, renda: 80 })
presentes.push('Smartphone')
pessoas.unshift({nome: 'Joerdison', idade:36
, renda: 100000 })
pessoas.splice(3,1,{nome: 'Extraterrestre', idade:250, renda: 250, renda:0.50})

// SPLICE ADICIONA EM UMA POSIÇÃO E NESSE EXEMPLO EXCLUI MAIS
// DOIS ELEMENTOS A PARTIR DA POSIÇÃO (ÍNDICE) INFORMADO
pessoas.splice(3, 2, {
    nome: 'Extraterrestre',
    idade: 250,
    renda: 0.50
});

// SPLICE EXCLUI UMA POSIÇÃO E NESSE EXEMPLO EXCLUI APENAS O
// ELEMENTO DA POSIÇÃO (ÍNDICE) INFORMADA
pessoas.splice(1, 0);

// SPLICE EXCLUI DOIS ELEMENTOS A PARTIR DA POSIÇÃO (ÍNDICE)
// INFORMADA
pessoas.splice(2, 2);

//SPLICE O ÚLTIMO ELEMENTO DO ARRAY
pessoas.pop()

//EXIBIR A QUANTIDADE DE ELEMENTOS EM UM ARRAY
console.log('TOTAL DE ELEMENTOS NO ARRAY pessoas----> ' , pessoas.length)

//LISTANDO OBJETO LITERAL PELO FOR
const divListaObjfor = document.querySelector('#div-listaobj-for')

for (i = 0; i < pessoa.length; i++) {
   divListaObjfor.innerHTML += `NOME: ${pessoas[i].nome}, ${pessoas[i].idade} ANOS, R$ ${pessoas[i].renda} <br> `
}

//LISTANDO OBJETO LITERAL PELO FOR/IN

const divListaObjForIn = document.querySelector
   ('#div-listaobj-forin')

for (let indice in pessoas) {
   divListaObjForIn.innerHTML += `NOME: '${pessoas
   [indice].nome}, ${pessoas[indice].idade}, R$ ${pessoas
   [indice].renda.toFixed(2).replace('.', ',')} <br>`
}

//LISTANDO OBJETO LITERAL PELO FOR/OF
const divListaObjForOf = document.querySelector
   ('#div-listaobj-forof')

let contador = 0

for (let pessoa of pessoas) {
   contForOf++

   divListaForof.innerHTML += `${contForOf}  -$ {elem.nome}, ${elem.idade}  R$ ${elem.renda.toFixed(2).replace('.', ',')} <br>`
}

//LISTANDO OBJETO LITERAL PELO FOREACH
const divListaObjForeach = document.querySelector('#div-listaobj-foreach')

pessoas.forEach((pessoa) => {
   divListaObjForeach.innerHTML += `${I + I}, - ${elem.nome}, $
   { elem.idade } ANOS, R$ ${elem.renda.toFixed(2).replace('.', ',')}
   <br>`
})