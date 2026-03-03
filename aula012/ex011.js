let idade = 17

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    // Agora o JavaScript entende: "Menor que 18 OU Maior que 65"
    console.log("Voto opcional")
} else {
    // Se não é menor que 16, nem opcional... só sobra quem está entre 18 e 65!
    console.log("Voto Obrigatório")
}