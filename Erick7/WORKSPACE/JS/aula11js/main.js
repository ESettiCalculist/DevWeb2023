const elementoDIV = document.querySelector('div')

const criaTitulo = () => {
const titulo = document.createElement('h1')
const conteudo = `cadastro de usuário`
titulo.innerHTML = conteudo
return titulo
}

const tituloElemento = criaTitulo()
document.body.appendChild(tituloElemento)

document.title = "cadastro empresa Macron"
