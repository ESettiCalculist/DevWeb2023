const titulo = document.getElementById('titulo')
const item = document.getElementsByClassName("item")
const lista = document.getElementsByTagName("li")
const item4 = document.getElementById('n4')
const paiDoElemento = item4.parentNode

titulo.style.backgroundColor = "gray"
item[0].style.fontWeight = "bold"
lista[1].style.color = "purple"
lista[2].style.borderBottom = "solid"
item4.remove()

var elementoInserir = document.createElement("li");
elementoInserir.textContent = "Item recuperado";


paiDoElemento.insertBefore(elementoInserir, item4.e)

console.log("o item4 está removido da lista nos codigo de javascript")