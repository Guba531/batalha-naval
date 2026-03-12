const letras = ['A','B','C','D','E','F','G','H','I','J'];
const containerX = document.getElementById('x');
const containerY = document.getElementById('y');
const tabuleiro = document.getElementById('tabuleiro');

letras.forEach(l => {
    const div = document.createElement('div');
    div.className = 'letra';
    div.innerText = l;
    containerX.appendChild(div);
});

for (let i = 1; i <= 10; i++) {
    const div = document.createElement('div');
    div.className = 'numero';
    div.innerText = i;
    containerY.appendChild(div);
}

for (let i = 0; i < 100; i++) {
    const quad = document.createElement('div');
    quad.className = 'quadrado';
    quad.dataset.row = Math.floor(i / 10);
    quad.dataset.col = i % 10;
    tabuleiro.appendChild(quad);
}
