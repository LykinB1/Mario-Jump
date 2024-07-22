const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const restartButton = document.querySelector('.restartbutton');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

let loop = setInterval(gameLoop, 10);

function gameLoop() {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
}

document.addEventListener('keydown', jump);

restartButton.addEventListener('click', RestartGame);

function RestartGame() {
    mario.src = './images/mario.gif';
    mario.style.width = '';
    mario.style.marginLeft = '';
    mario.style.bottom = '';
    mario.style.animation = '';

    pipe.style.left = '';
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';

    clearInterval(loop);
    loop = setInterval(gameLoop, 10);
}



// Make clouds stop animation when mario dies

// Make a pouse game if you want put it game in a presentation website
