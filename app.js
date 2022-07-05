let color = "black";
let click = true;
function populateBoard (size) {
    let board = document.querySelector('.board')
        board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());

    let amount = size * size;
    for(let i = 0; i<amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        board.insertAdjacentElement('beforeend', square);
    }
}

function changeSize(input) {
    populateBoard(input);
}

function changeSize(input) {
    if(input >=2 && input <= 100) {
        populateBoard(input);
    } else {
        alert("Too many squares");
    }
}

function colorSquare() {
    if (click){
        if(color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board')
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = "white");
}

document.querySelector(`body`).addEventListener('click', (e) => {
    if(e.target.tagName != 'BUTTON' && e.target.tagName != 'INPUT') {
        click = !click;
        if (click) {
            document.querySelector('.status').textContent = "Status: Coloring";
        } else {
            document.querySelector('.status').textContent = "Status: Not Coloring";
        }
    }
})