const lista = [17, 43, 8, 4, 97, 56, 29]

lista.forEach(transforma) 

function transforma(number) {
    if(number % 2 === 0) {
        console.log("É par")
    } else {
        console.log("É impar")
    }
}