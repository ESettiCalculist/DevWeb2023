class Pessoa {
  constructor(nome, dataNascimento) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
  }
  getIdade() {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear()
    const mesAtual = hoje.getMonth()
    const diaAtual = hoje.getDate()

    const anoNascimento = this.dataNascimento.getFullYear()
    const mesNascimento = this.dataNascimento.getMonth()
    const diaNascimento = this.dataNascimento.getDate()

    let idade = anoAtual - anoNascimento

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
    }

    return idade;
  }
}

Pessoa.prototype.getNiver = function () {
  const hoje = new Date();
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();

  const mesNascimento = this.dataNascimento.getMonth();
  const diaNascimento = this.dataNascimento.getDate();

  if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual >= diaNascimento)) {
    return true
  } else {
    return false
  }
}

const pessoas = []

pessoas[0] = new Pessoa("Erick", new Date(1995, 9, 12))
pessoas[1] = new Pessoa("Jonata", new Date(1998, 12, 25))
pessoas[2] = new Pessoa("Fernanda", new Date(1994, 10, 30))
pessoas[3] = new Pessoa("Julia", new Date(2000, 5, 7))
pessoas[4] = new Pessoa("Rose", new Date(1945, 8, 12))
pessoas[5] = new Pessoa("Americo", new Date(1963, 11, 5))
pessoas[6] = new Pessoa("Matheus", new Date(1983, 5, 13))
pessoas[7] = new Pessoa("Drika", new Date(1975, 12, 31))
pessoas[8] = new Pessoa("Thayna", new Date(1999, 11, 15))
pessoas[9] = new Pessoa("Joao", new Date(1992, 8, 11))

for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i]
    const idade = pessoa.getIdade()
    const fezAniversario = pessoa.getNiver() ? "já" : " ainda não"
    console.log(`${pessoa.nome} tem ${idade} anos e ${fezAniversario}`)
}
