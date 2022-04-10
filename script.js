let jogador = "O";
let vez = document.getElementById("vez");
vez.innerHTML = jogador;
let winner = document.getElementById('vence');

    

function selected (id) {
    if(winner.innerHTML === "O" | winner.innerHTML === "X") {
        return;
    }

    let posicao = document.getElementById(id);
    if (posicao.innerHTML !== "1") {
        return alert("Posição já selecionada");
    }
    posicao.innerHTML = jogador;
    if (jogador === "X") {
        posicao.style.color = "#0000ff";
        jogador = "O";
    } else {
        jogador = "X";
        posicao.style.color = "#ff0000";
    }
    changePlayer(jogador);
    isWinner();
}

function changePlayer(valor) {
    jogador = valor;
    vez.innerHTML = jogador;    
}


function isWinner() {
    let posicao1 = document.getElementById("1");
    let posicao2 = document.getElementById("2");
    let posicao3 = document.getElementById("3");
    let posicao4 = document.getElementById("4");
    let posicao5 = document.getElementById("5");
    let posicao6 = document.getElementById("6");
    let posicao7 = document.getElementById("7");
    let posicao8 = document.getElementById("8");
    let posicao9 = document.getElementById("9");

    if (posicao1.innerHTML !== "1" && posicao1.innerHTML === posicao2.innerHTML && posicao2.innerHTML === posicao3.innerHTML) {
        mudaBack(posicao1, posicao2, posicao3);
    }

    if (posicao4.innerHTML !== "1" && posicao4.innerHTML === posicao5.innerHTML && posicao5.innerHTML === posicao6.innerHTML) {
        mudaBack(posicao4, posicao5, posicao6);

    }
    
    if (posicao7.innerHTML !== "1" && posicao7.innerHTML === posicao8.innerHTML && posicao8.innerHTML === posicao9.innerHTML) {
        mudaBack(posicao7, posicao8, posicao9);

    }

    if (posicao1.innerHTML !== "1" && posicao1.innerHTML === posicao5.innerHTML && posicao5.innerHTML === posicao9.innerHTML) {
        mudaBack(posicao1, posicao5, posicao9);

    }

    if (posicao3.innerHTML !== "1" && posicao3.innerHTML === posicao5.innerHTML && posicao5.innerHTML === posicao7.innerHTML) {
        mudaBack(posicao3, posicao5, posicao7);

    }

    if (posicao1.innerHTML !== "1" && posicao1.innerHTML === posicao4.innerHTML && posicao4.innerHTML === posicao7.innerHTML) {
        mudaBack(posicao1, posicao4, posicao7);

    }

    if (posicao2.innerHTML !== "1" && posicao2.innerHTML === posicao5.innerHTML && posicao5.innerHTML === posicao8.innerHTML) {
        mudaBack(posicao2, posicao5, posicao8);
    }

    if (posicao3.innerHTML !== "1" && posicao3.innerHTML === posicao6.innerHTML && posicao6.innerHTML === posicao9.innerHTML) {
        mudaBack(posicao3, posicao6, posicao9);
    }

}

function mudaBack(p1, p2, p3){
    p1.style.backgroundColor = "#00ff00" ;
    p2.style.backgroundColor = "#00ff00" ; 
    p3.style.backgroundColor = "#00ff00" ;
    winner.innerHTML = p1.innerHTML;

}

function restart() {
    jogador = "O";
    vez = document.getElementById("vez");
    vez.innerHTML = jogador;
    for (i=1;i<=9;i++) {
        let posicaozero = document.getElementById(i);
        posicaozero.innerHTML = "1";
        posicaozero.style.color = "#aaaaaa";
        posicaozero.style.backgroundColor = "#aaaaaa";
        winner.innerHTML = "";
    }
}