let container = document.getElementById('container')
makeGrid(16) //Default grid

//Helper function: Creates rows for makeGrid function
function makeRow(num) {
    let row = document.createElement("div") 
    row.setAttribute('class', 'row')
    for (let i = 0; i < num; i++) {
        square = document.createElement('div');
        square.setAttribute('class', 'square') //Create each square
        row.appendChild(square) //Add square to row 
    }
    container.appendChild(row) // Add row to container
}

//This function creates the grid based on the number passed into it.
function makeGrid(num) { 
    for (let i = 0; i < num; i++) {
        makeRow(num)
    }
}

