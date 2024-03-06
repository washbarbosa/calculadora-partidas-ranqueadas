// Chamando Função

function saldoJogos(win, lose){
    
    // Declarando Variáveis
    let saldoRanqueadas = win - lose
    let nomeJogador = "MuperSario"    
    
    let nivelJogador;
    if (saldoRanqueadas < 10){
        nivelJogador = "Ferro"
    } else if (saldoRanqueadas <= 20){
        nivelJogador = "Bronze"
    } else if (saldoRanqueadas <= 50){
        nivelJogador = "Prata"
    } else if (saldoRanqueadas <= 80){
        nivelJogador = "Ouro"
    } else if (saldoRanqueadas <= 90){
        nivelJogador = "Diamante"
    } else if (saldoRanqueadas <= 100){
        nivelJogador = "Lendário"
    } else (saldoRanqueadas >100)
        nivelJogador = "Imortal"

    
    console.log(`O jogador ${nomeJogador} tem um saldo positivo de ${saldoRanqueadas} jogos, e está no nível ${nivelJogador} !`)
}

    saldoJogos(379, 298)