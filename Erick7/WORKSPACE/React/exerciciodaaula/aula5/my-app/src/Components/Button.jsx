import React from 'react';

class BotaoAdicionar extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <button onClick={onClick}>Adicionar Parágrafo</button>
    );
  }
}

export default BotaoAdicionar;