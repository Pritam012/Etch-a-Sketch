///// make a for loop to loop 16 times and append each time add styles tesmai felx wrap


const squares = parseInt(prompt("enter the number of swuares on each side:"));
const colors = ["blue", "red", "green", "yellow", "purple", "orange", "black", "brown", "gray", "pink"];
const container = document.querySelector('#container');
container.style.width = `${18 * squares}px`;
container.style.height = `${18 * squares}px`;
let divs = [];
for (let i = 0; i< squares*squares ; i++) {
    divs[i] = document.createElement('div');
    divs[i].style.width = "16px";
    divs[i].style.height = "16px";
    divs[i].style.border = "1px solid #eeeeee";
    divs[i].addEventListener('mousemove' , () => {
        divs[i].style.backgroundColor = colors[Math.floor(Math.random() * 10)];
    });
    container.appendChild(divs[i]);


}



