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
        square.style.backgroundColor = "blue";
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
    this.style.backgroundColor = "black";
}