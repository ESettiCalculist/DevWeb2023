// Lista de inscritos
var inscritos = [];
var codigoItem = 1; // Variável para gerar o código de item

function incluirInscrito() {
  // Obter valores dos campos do formulário
  var nome = document.getElementById('nome').value;
  var dataNasc = document.getElementById('dataNasc').value;
  var email = document.getElementById('email').value;

  // Validação da idade (maior de 18 anos)
  var dataAtual = new Date();
  var dataNascimento = new Date(dataNasc);
  var idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
  if (idade < 18) {
    alert('Você precisa ter mais de 18 anos para se inscrever.');
    return;
  }

  // Validação do email usando RegEx
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('O email fornecido é inválido.');
    return;
  }

  // Criar objeto de inscrito
  var inscrito = {
    codigoItem: codigoItem,
    nome: nome,
    dataNasc: dataNasc,
    email: email
  };

  // Adicionar inscrito à lista
  inscritos.push(inscrito);
  codigoItem++;

  // Limpar campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('dataNasc').value = '';
  document.getElementById('email').value = '';

  // Atualizar a exibição dos inscritos
  atualizarExibicaoInscritos();

  // Exibir mensagem de sucesso
  alert('Inscrição realizada com sucesso!');
}

function excluirInscrito() {
  // Obter código de item a ser excluído
  var codigoItemExcluir = document.getElementById('item').value;

  // Remover inscrito da lista com base no código de item
  var indice = -1;
  for (var i = 0; i < inscritos.length; i++) {
    if (inscritos[i].codigoItem === parseInt(codigoItemExcluir)) {
      indice = i;
      break;
    }
  }

  if (indice === -1) {
    alert('Não foi encontrado nenhum inscrito com o código de item fornecido.');
  } else {
    inscritos.splice(indice, 1);
    // Atualizar a exibição dos inscritos
    atualizarExibicaoInscritos();
    alert('Inscrito removido com sucesso!');
  }

  // Limpar campo de código de item
  document.getElementById('item').value = '';
}

function atualizarExibicaoInscritos() {
  var exibicaoInscritos = document.getElementById('exibicaoInscritos');
  exibicaoInscritos.innerHTML = '';

  for (var i = 0; i < inscritos.length; i++) {
    var inscrito = inscritos[i];
    var inscritoItem = document.createElement('li');
    inscritoItem.textContent = 'Código de Item: ' + inscrito.codigoItem + ', Nome: ' + inscrito.nome + ', Data de Nascimento: ' + inscrito.dataNasc + ', Email: ' + inscrito.email;
    exibicaoInscritos.appendChild(inscritoItem);
  }
}
