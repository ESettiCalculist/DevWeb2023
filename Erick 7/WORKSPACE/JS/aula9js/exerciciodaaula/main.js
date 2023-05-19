const boasVindas = () => {
   alert("seja bem vindo aula de Javascript")
}

var a = 3
var b = 4
var c = -5

const delta = (b * b) - (4 * a * c)

function contaCalc1() {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    console.log(x1.toFixed(0))
}

const contaCalc2 = () => {
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)
    console.log(x2.toFixed(0))
    }

    const valoresABC = () => {
        console.log("Valor de A =", + a)
        console.log("Valor de B =", + b)
        console.log("Valor de C =", + c)
    }

    const valorDelta = () => {
        console.log(delta)
    }
