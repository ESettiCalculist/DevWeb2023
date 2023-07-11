import React from 'react';

class CalculadoraMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nota1: '',
      nota2: '',
      nota3: '',
      nota4: '',
      media: 0
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: parseFloat(value) });
  }

  handleOnClick = (event) => {
    const { name } = event.target;
    this.setState({ [name]: '' });
  }

  calcularMedia = () => {
    const { nota1, nota2, nota3, nota4 } = this.state;
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    this.setState({ media });
  }

  render() {
    const { nota1, nota2, nota3, nota4, media } = this.state;

    return (
      <div 
      style={{
        textAlign: 'center'
      }}
      >
        <h1>Calculadora de Média</h1>
        <label>
          Nota 1:
          <input
            type="number"
            name="nota1"
            value={nota1}
            onClick={this.handleOnClick}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Nota 2:
          <input
            type="number"
            name="nota2"
            value={nota2}
            onClick={this.handleOnClick}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Nota 3:
          <input
            type="number"
            name="nota3"
            value={nota3}
            onClick={this.handleOnClick}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Nota 4:
          <input
            type="number"
            name="nota4"
            value={nota4}
            onClick={this.handleOnClick}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button onClick={this.calcularMedia}>Calcular Média</button>
        <p>Média do aluno: {media.toFixed(2)}</p>
      </div>
    );
  }
}

export default CalculadoraMedia;