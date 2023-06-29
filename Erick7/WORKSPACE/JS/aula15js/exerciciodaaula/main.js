function fazerLogin() {
  // Obter valores dos campos do formulário de login
  var usuario = document.getElementById("usuario").value.toUpperCase();
  var senha = document.getElementById("senha").value;
  var cargo = document.getElementById("cargo").value;

  // Validar campo de usuário (converter para maiúsculo)
  if (usuario === "") {
    alert("Por favor, digite o nome de usuário.");
    return;
  }

  // Validar campo de senha (regras: mínimo de 8 caracteres, contendo um caractere especial, um número e uma letra maiúscula)
  var senhaRegex =
    /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])(?=.*\d)(?=.*[A-Z]).{8,}$/;
  if (!senhaRegex.test(senha)) {
    alert(
      "A senha deve ter no mínimo 8 caracteres, incluindo um caractere especial, um número e uma letra maiúscula."
    );
    return;
  }

  // Validar campo de cargo
  var cargoTexto;
  switch (cargo) {
    case "1":
      cargoTexto = "Estágio";
      break;
    case "2":
      cargoTexto = "Trainee";
      break;
    case "3":
      cargoTexto = "Analista";
      break;
    case "4":
      cargoTexto = "JR";
      break;
    case "5":
      cargoTexto = "SN";
      break;
    case "6":
      cargoTexto = "PL";
      break;
    case "7":
      cargoTexto = "Líder Técnico";
      break;
    case "8":
      cargoTexto = "CEO";
      break;
    default:
      alert("Por favor, selecione um cargo.");
      return;
  }

  // Exibir mensagem de boas-vindas com redirecionamento
  alert(
    "Olá, " +
      usuario +
      ", seu cargo é " +
      cargoTexto +
      ". Vamos te redirecionar para a página desejada."
  );
  mostraUsuario();
}

function mostraUsuario() {
    var usuario = document.getElementById("usuario").value.toUpperCase();
    var cargo = document.getElementById("cargo").value;
    var cargoTexto;
  switch (cargo) {
    case "1":
      cargoTexto = "Estágio";
      break;
    case "2":
      cargoTexto = "Trainee";
      break;
    case "3":
      cargoTexto = "Analista";
      break;
    case "4":
      cargoTexto = "JR";
      break;
    case "5":
      cargoTexto = "SN";
      break;
    case "6":
      cargoTexto = "PL";
      break;
    case "7":
      cargoTexto = "Líder Técnico";
      break;
    case "8":
      cargoTexto = "CEO";
      break;
    default:
      alert("Por favor, selecione um cargo.");
      return;
  }

  alert("Olá + " + usuario + "essa é sua pagina de " + cargoTexto);
  return (window.location.href = "pagina2.html");
}
