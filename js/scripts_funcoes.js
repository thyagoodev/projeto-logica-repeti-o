
function mensagem(){
    console.log('Uma mensagem')
    
}

mensagem()

function mensagemLinda(txt){
    console.log(txt)
}

mensagemLinda('Brasil vai dar um pau no Haiti')

function somaNumeros(num1, num2){
    return num1 + num2
}

console.log('As somas dos números ', somaNumeros(10, 58))

const multiplicacao = function(num1, num2){
    return num1 * num2
}

console.log(multiplicacao(64, 5))

console.log('--------> ARROW FUNCTION <-----')

const msgArrow = ()=> {
    console.log('Outra mensagem na arrow function')

}

msgArrow()

const divisaoNum = (valor1, valor2) => {

    let reposta

    if ((valor1 > 0)&& (valor2)){
        reposta = valor1 / valor2
    }else{
        reposta = 'NÃO É POSSÍVEL DIVISÃO POR ZERO'
    }

    return reposta
}




        console.log (divisaoNum(10,0))

        console.log (Math.random())

        console.log('o numero sorteado ------> ',parseFloat(Math.random() * 100))

        setTimeout(()=>{

            console.log('Executou após 5s')
        }, 5000)

        let cont= 0

        const Intervalo= setInterval(()=>{
            cont++
            console.log(cont, ' Repetição da setInterval')

            if(cont --5){
                clearInterval(Intervalo)

            }
        }, 3000)
        =/

        let contVolta = 0, numSorteado = 0

        const sorteo = setInterval(() => {
            contVolta++
            
            numSorteado = parseInt(Math.random() * 60)

            console.log ('${contVolta} º número sorteado $ {numSorteado}')

            if (numSorteado == 6) {
                console.log ('--------> SORTEIO ENCERRADO<--------')

                divisaoNumSorteio.innerHTML += `-------> SORTEIO ENCERRADO <------
                <br>
                TOTAL DE NÚMEROS GERADOS: ${contVolta} <br>
                TOTAL DE NÚMEROS PAR: ${contPar} <br>
                TOTAL DE NÚMEROS ÍMPAR: ${contImpar}
                `
                clearInterval (sorteio)
                contVolta = 0
                numSorteado = 0
            }
        },2000)




            



        



        


    



