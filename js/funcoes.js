const meuCanvas = document.querySelector('#meuCanvas');
const ctx = meuCanvas.getContext('2d');

// criar um flag - dizendo que os movimentos estão cancelados - anulados - falsos
let moverAcima = false;
let moverAbaixo = false;
let moverEsquerda = false;
let moverDireita = false;

let moverAcima2 = false;
let moverAbaixo2 = false;
let moverEsquerda2 = false;
let moverDireita2 = false;

// array para receber todos os quadrados
const todosQuadrados = [];

//chamar o Square para criar um objeto do tipo Square
const quadrado2 = new Square(100, 200, 100, 100, '#900', 5, 'images/caramuru.png');
// adicionar o objeto ao array
todosQuadrados.push(quadrado2);

const quadrado1 = new Square(800, 200, 100, 100, '#0000FF', 5, 'images/polvo.png');
todosQuadrados.push(quadrado1);

// escutador de eventos para as teclas enquanto pressionadas com função 
window.addEventListener('keydown', function (e) {
    const tecla = e.key;
    // console.log(e.code, e.key);
    switch (tecla) {
        case 'ArrowLeft':
            moverEsquerda = true;
            break;

        case 'ArrowRight':
            moverDireita = true;
            break;

        case 'ArrowUp':
            moverAcima = true;
            break;

        case 'ArrowDown':
            moverAbaixo = true;
            break;
    }
});

// escutador de eventos para as teclas quando forem  soltas com função 
window.addEventListener('keyup', function (e) {
    const tecla = e.key;
    // console.log(e.code, e.key);
    switch (tecla) {
        case 'ArrowLeft':
            moverEsquerda = false;
            break;

        case 'ArrowRight':
            moverDireita = false;
            break;

        case 'ArrowUp':
            moverAcima = false;
            break;

        case 'ArrowDown':
            moverAbaixo = false;
            break;
    }
});

// escutador de eventos para as teclas enquanto pressionadas com função 
window.addEventListener('keydown', function (e) {
    const tecla = e.key;
    // console.log(e.code, e.key);
    switch (tecla) {
        case 'a':
            moverEsquerda2 = true;
            break;

        case 'd':
            moverDireita2 = true;
            break;

        case 'w':
            moverAcima2 = true;
            break;

        case 's':
            moverAbaixo2 = true;
            break;
    }
});

// escutador de eventos para as teclas quando forem  soltas com função 
window.addEventListener('keyup', function (e) {
    const tecla = e.key;
    // console.log(e.code, e.key);
    switch (tecla) {
        case 'a':
            moverEsquerda2 = false;
            break;

        case 'd':
            moverDireita2 = false;
            break;

        case 'w':
            moverAcima2 = false;
            break;

        case 's':
            moverAbaixo2 = false;
            break;
    }
});

function moverQuadrados() {
    if (moverEsquerda && !moverDireita) {
        quadrado1.posX -= quadrado1.velocidade;
    }
    if (moverDireita && !moverEsquerda) {
        quadrado1.posX += quadrado1.velocidade;
    }
    if (moverAcima && !moverAbaixo) {
        quadrado1.posY -= quadrado1.velocidade;
    }
    if (moverAbaixo && !moverAcima) {
        quadrado1.posY += quadrado1.velocidade;
    }

    if (moverEsquerda2 && !moverDireita2) {
        quadrado2.posX -= quadrado2.velocidade;
    }
    if (moverDireita2 && !moverEsquerda2) {
        quadrado2.posX += quadrado2.velocidade;
    }
    if (moverAcima2 && !moverAbaixo2) {
        quadrado2.posY -= quadrado2.velocidade;
    }
    if (moverAbaixo2 && !moverAcima2) {
        quadrado2.posY += quadrado2.velocidade;
    }

    //   não permitir a saída do canvas
    quadrado1.posX = Math.max(0, Math.min(meuCanvas.width - quadrado1.width, quadrado1.posX));
    quadrado1.posY = Math.max(0, Math.min(meuCanvas.height - quadrado1.height, quadrado1.posY));

    quadrado2.posX = Math.max(0, Math.min(meuCanvas.width - quadrado2.width, quadrado2.posX));
    quadrado2.posY = Math.max(0, Math.min(meuCanvas.height - quadrado2.height, quadrado2.posY));
}

// objetos Square estão dentro de um Array - percorrer o Array
function exibirQuadrados(jogador) {
    ctx.clearRect(0, 0, meuCanvas.width, meuCanvas.height);
    for (const i in todosQuadrados) {
        const quad = todosQuadrados[i];
        const robo = new Image();
        robo.src = quad.image;
        ctx.drawImage(robo, quad.posX, quad.posY, quad.width, quad.height);
    }

}

function atualizarTela() {
    requestAnimationFrame(atualizarTela, meuCanvas);
    moverQuadrados();
    exibirQuadrados();
}

atualizarTela();