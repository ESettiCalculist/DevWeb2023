// Método forEach()
const frutas = ['apple', 'orange', 'cherry'];

frutas.forEach(minhaFuncao);

function minhaFuncao(valor, posicao) {
console.log(`Valor: ${valor}`);
console.log(`Posição: ${posicao}`);
}

// forEach() com array de objetos

const tarefas = [
{
id: 1,
texto: 'Levar o lixo para fora',
isCompleted: true,
},
{
id: 2,
texto: 'Encontrar com o chefe',
isCompleted: true,
},
{
id: 3,
texto: 'Consulta no dentista',
isCompleted: false,
},
]
tarefas.forEach((teste) => console.log(teste.texto))

// Método map()
const numeros = [4, 9, 16, 25];
const newArray = numeros.map(Math.sqrt);

console.log('Números:');
console.log(numeros);
console.log('Novo array:');
console.log(newArray);

