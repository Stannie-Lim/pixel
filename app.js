const hex = [
    '00',
    '33',
    '66',
    '99',
    'CC',
    'FF'
];

const swatches = document.querySelector(".swatches");
swatches.addEventListener("click", (ev) => {
    const current = swatches.querySelector(".selected");
    current.classList.remove("selected");
    const target = ev.target;
    target.classList.add("selected");
});
const colorsArray = [];


const renderSwatches = () => {
    for(let h=0;h<hex.length;h++)
    {
       for(let w=0;w<hex.length;w++)
       {
          for(let c = 0; c < hex.length; c++) {
            let color = "";
            color = '#' + hex[h] + hex[w] + hex[c];
            colorsArray.push(color);
          }
       }
    }
    const html = colorsArray.map(color => {
        return `<div style='background-color:${color}'></div>`;
    }).join('');
    swatches.innerHTML = html;
    swatches.children[0].classList.add("selected");
}

const form = document.querySelector("form");

const htmlgrid = document.querySelector(".celltable");

form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const widthInput = form.querySelector("[name='width']").value;
    const heightInput = form.querySelector("[name='height']").value;
    const grid = [];
    const table = document.querySelector(".table");
    const renderGrid = () => {
        let cell;
        let row1 = [];
        for(let w = 0; w < widthInput; w++) {
            cell = `<div class="celltable"></div>`;
            row1.push(cell);
        }   
        let row = row1.join('');

        for(let i = 0; i < heightInput; i++) {
            grid.push(row);
        }  
        
        const html = grid.map(() => {
            return row;
        }).join('');

        table.innerHTML = html;

    }
    renderGrid();
});

const gridbox = document.querySelector(".celltable");
gridbox.addEventListener("click", (ev) => {
    console.log(ev);
});




renderSwatches();
