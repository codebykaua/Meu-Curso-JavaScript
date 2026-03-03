let usuariosCadastrados = ["admim", "joao", "maria"]

function verificarLogin(usuarioDigitado) {
    if (usuariosCadastrados.includes(usuarioDigitado)) {
        return "Acesso Liberado!"
    }

    else {
        return "Usuário não encontrado."
    }

}

    console.log(verificarLogin("jaime")) // Vai mostrar: "Usuário não encontrado."
    console.log(verificarLogin("joao"))  // Vai mostrar: "Acesso Liberado!"     