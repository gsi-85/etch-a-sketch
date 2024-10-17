const container = document.querySelector(".main");
//let div = document.createElement("div");
//container.appendChild(div);

function createGrid(gridCol, gridRow) {
    console.log("run")
    for (let j = 0; j < gridRow; j++){
        let div = document.createElement("div");
        div.classList.add("container");
        let test = container.appendChild(div);
        for (let i = 0; i < gridCol; i++ ) {
            let div = document.createElement("div");
            div.classList.add("sub")
            test.appendChild(div);
        }
    }
}

function clearGrid() {
    const child = document.querySelectorAll(".container");
    child.forEach(element => {
        element.remove()
    });(child)
}

const grid = document.querySelectorAll(".sub")

grid.forEach((element) => {
    element.addEventListener("mouseover", () => {
        element.classList.add("blue");
    })
})

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let input = prompt("test");
    clearGrid();
    createGrid(input, input);
});