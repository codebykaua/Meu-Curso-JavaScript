function verificar() {
    let txtp = document.querySelector('input#txtpais')
    let res = document.querySelector('div#resultado')
    let paisNascimento = txtp.value
    
    // Faz a caixinha do resultado aparecer na tela
    res.style.display = 'block'
    
    res.innerHTML = `<p>Seu país de nascimento é <strong>${paisNascimento}</strong>.</p>`
    
    if (paisNascimento.toUpperCase() === "BRASIL") {
        res.innerHTML += "<p>Portanto, você é <strong>Brasileiro!</strong> 🇧🇷</p>"
    } else {
        res.innerHTML += "<p>Portanto, você é <strong>Estrangeiro!</strong> ✈️</p>"
    }
}