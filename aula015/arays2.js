let numeroSorteados = [10, 25, 33, 42, 50] // Tirei as aspas porque são números reais!

// 1. Início no zero
// 2. Vai até ser MENOR que o tamanho do array
// 3. Aumenta de 1 em 1 (posicao++)
for (let posicao = 0; posicao < numeroSorteados.length; posicao++) {
    
    // Pega o array e mostra quem está na [posicao] atual da rodada!
    console.log(`O número sorteado foi: ${numeroSorteados[posicao]}`)

}