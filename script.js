const letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

function criarTabuleiro(x, y, tabuleiro) {

    for (let i = 0; i < 10; i++) {

        let div = document.createElement("div")
        div.className = "letra"
        div.innerText = letras[i]
        x.appendChild(div)

    }

    for (let i = 1; i <= 10; i++) {

        let div = document.createElement("div")
        div.className = "numero"
        div.innerText = i
        y.appendChild(div)

    }

    for (let i = 0; i < 100; i++) {

        let q = document.createElement("div")
        q.className = "quadrado"
        tabuleiro.appendChild(q)

    }

}

criarTabuleiro(
    document.getElementById("x1"),
    document.getElementById("y1"),
    document.getElementById("tabuleiro1")
)

criarTabuleiro(
    document.getElementById("x2"),
    document.getElementById("y2"),
    document.getElementById("tabuleiro2")
)