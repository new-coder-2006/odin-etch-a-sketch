let DEFAULT_SIZE = 16;

function createGrid(sideLength) {
    const container = document.querySelector(".container");
    const grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    container.appendChild(grid);

    for (let i = 0; i < sideLength; i++) {
        const outer = document.createElement("div");
        const grid = document.querySelector(".grid");
        outer.setAttribute("class", "outer");
        outer.setAttribute("id", "outer" + i.toString());
        grid.appendChild(outer);
    
        for (let j = 0; j < sideLength; j++) {
            const parent = document.querySelector("#outer" + i.toString());
            const inner = document.createElement("div");
            inner.setAttribute("class", "inner");
            inner.setAttribute("style", "border: 0.1px solid black");
            parent.appendChild(inner);
        }
    }

    const outers = document.querySelectorAll(".outer");
    outers.forEach(outer => {
        outer.style.height = "calc(200px / " + String(sideLength) + ")";
    });

    const innerDivs = document.querySelectorAll(".inner");

    innerDivs.forEach(innerDiv => {
        innerDiv.style.height = "calc(200px / " + String(sideLength) + ")";
        innerDiv.style.width = "calc(200px / " + String(sideLength) + ")";

        innerDiv.addEventListener("mouseover", () => {
            innerDiv.style.backgroundColor = "gray";
        });
        
        innerDiv.addEventListener("mouseout", () => {
            innerDiv.style.backgroundColor = "white";
        });
    });
}

createGrid(DEFAULT_SIZE);

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const userInput = prompt("Number of squares per side:");

    if (userInput < 1 || userInput > 100 || (userInput % 1) != 0) {
        alert("Please enter a whole number between 1 and 100");
    } else {
        numSquares = userInput;
        const container = document.querySelector(".container");
        const grid = document.querySelector(".grid");
        container.removeChild(grid);
        createGrid(numSquares);
    }
});

/*
for (let i = 0; i < numSquares; i++) {
    const outer = document.createElement("div");
    outer.setAttribute("class", "outer");
    outer.setAttribute("id", "outer" + i.toString());
    container.appendChild(outer);

    for (let j = 0; j < numSquares; j++) {
        const parent = document.querySelector("#outer" + i.toString());
        const inner = document.createElement("div");
        inner.setAttribute("class", "inner");
        inner.setAttribute("style", "border: 0.1px solid black");
        parent.appendChild(inner);
    }
}
*/