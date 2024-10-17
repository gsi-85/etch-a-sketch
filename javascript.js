const container = document.querySelector(".main");
//let div = document.createElement("div");
//container.appendChild(div);

function createGrid(gridCol, gridRow) {
    let height = 1120 / gridCol;
    let width = 2400 / gridRow;
    console.log(height)
    console.log(width)
    for (let j = 0; j < gridRow; j++){
        let div = document.createElement("div");
        div.classList.add("container");
        let test = container.appendChild(div);
        for (let i = 0; i < gridCol; i++ ) {
            let div = document.createElement("div");
            div.classList.add("sub")
            div.style.height = height + "px";
            div.style.width = width + "px";
            test.appendChild(div);
        }
        const grid = document.querySelectorAll(".sub");
        grid.forEach((element) => {
            console.log("mouseover")
            element.addEventListener("mouseover", () => {
                element.classList.add("blue");
            })
        })
    }
}

function clearGrid() {
    const child = document.querySelectorAll(".container");
    child.forEach(element => {
        element.remove();
    });
}


const button = document.querySelector("button");
button.addEventListener("click", () => {
    let input = prompt("test");
    clearGrid();
    createGrid(input, input);
});


