var fruta1 = "Maça"
var fruta2 = "Pera"
var fruta3 = "Banana"
var fruta4 = "Abacaxi"
var fruta5 = "        Manga          "
const novaMensagem = fruta3.replace('Banana', 'IOS');
const templateString = `As frutas são ${fruta1}`
const templateString1 = `${fruta2}`
const templateString2 = `${fruta3}`
const templateString3 = `${fruta4}`
const templateString4 = `${fruta5}`

console.log(fruta1.length)
console.log(fruta4.substring(0, 3))
console.log(novaMensagem.toLowerCase())
console.log(fruta5.trim())
console.log(templateString + " " + templateString1 + " " + templateString2 + " " + templateString3 + templateString4)

