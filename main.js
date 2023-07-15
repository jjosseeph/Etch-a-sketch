let color ="black";
let click = true;
function populateBoard(size) {
let board = document.querySelector(".board");
let squares = board.querySelectorAll("div");
board.style.gridTempleteColumns = `repeat(${size},1fr)`;
board.style.gridTempleteRows = `repeat(${size} ,1fr)`;

let amount = size * size;
for(let i =0; i<amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor ="white";
    board.insertAdjacentElement("beforeend",square);
}
}  
populateBoard(16);

  function changeStrng(input) {
    if (input >= 2 && input <= 100) {
      document.querySelector("error").style.display = "none";
      populateBoard(input);
    } else {
      document.querySelector("error").style.display = "flex";
    }
  }
     function colorSquare() {
    if (click) {
      if(color === "random") {
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
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor ="white"));
  }
     document.querySelector("body").addEventListener("click",(e) => {
    if(e.target .tagName != "button"){
  click = !click;
  if(click) {
    document.querySelector(".mode").textContent = "mode: coloring";
 } else{
  document.querySelector(".mode").textContent = "mode: not coloring";
  }
 }
  });
