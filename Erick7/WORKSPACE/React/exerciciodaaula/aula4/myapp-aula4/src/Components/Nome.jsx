import React from 'react';

class Nome extends React.Component {
  constructor(nome) {
    super(nome);
    this.state = {
      nomeAluna: ''
    };
  }

  handleChange = (event) => {
    this.setState({ nomeAluna: event.target.value });
  }

  render() {
    const { nomeAluna } = this.state;

    return (
      <div>
        <h2>Nome da Aluna</h2>
        <div
          style={{
            border: '2px solid black',
            color: 'blue',
            textAlign: 'center'
          }}
        >
          {nomeAluna}
        </div>
        <br />
        <label>
          Digite o nome da aluna:
          <input
            type="text"
            value={nomeAluna}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Nome;