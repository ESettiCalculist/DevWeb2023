import React from 'react';
import './App.css';
import BotaoAdicionar from './Button';

class Corpo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paragrafos: []
    };
  }

  adicionarParagrafo = () => {
    const { paragrafos } = this.state;
    const novoParagrafo = `Parágrafo ${paragrafos.length + 1}`;
    this.setState({ paragrafos: [...paragrafos, novoParagrafo] });
  }

  render() {
    const { paragrafos } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Meu Aplicativo</h1>
        </header>
        <section>
          <h2>Parágrafos:</h2>
          {paragrafos.map((paragrafo, index) => (
            <p key={index}>{paragrafo}</p>
          ))}
        </section>

        <BotaoAdicionar onClick={this.adicionarParagrafo} />
        
        <footer>
          <p>Rodapé do aplicativo</p>
        </footer>
      </div>
    );
  }
}

export default Corpo;