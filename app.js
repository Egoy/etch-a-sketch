const container = document.querySelector(".grid--container");
container.style.backgroundColor = '#333333'
let grid = 16;
// function createGrid() {
//     for (i = 0; i <= 16; i++) {
//         let grid = document.createElement("div");
//         console.log(grid);
//     }
// }

const createGrid = () => {
    const container = document.querySelector(".grid--container");
    for (i = 0; i < 16; i++) {
        const grid = document.createElement('div');
        grid.className = "grid--box";
        container.appendChild(grid);
    }
}
createGrid();
