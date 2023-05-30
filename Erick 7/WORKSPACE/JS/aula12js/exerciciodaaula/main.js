const campoNumero = document.querySelector("#recebeNumero");
const botaoCalcular = document.querySelector(".btn");
const tabuada = document.querySelector(".tabuada");

function aoClicar() {
  botaoCalcular.addEventListener("click", () => {
    let resultado = ""

    for (let i = 1; i <= 10; i++) {
      resultado +=
        campoNumero.value + " x " + i + ' = ' + (campoNumero.value * i) + "<br>"
      tabuada.innerHTML = `
    ${resultado}
    `
    }
  });
}

