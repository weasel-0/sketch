"use strict!";
let color = "black";
let click = true;
let input = document.querySelector("#sizeInput");
const error = document.querySelector(".error");
createBoard(16);
function createBoard(size) {
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll(".cell");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  board.style.backgroundColor = "white";
  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("cell", "active");
    square.addEventListener("mouseover", colorSquare);
    board.insertAdjacentElement("beforeend", square);
  }
}

function changeSize(input) {
  if (input > 2 && input < 100) {
    reset();
    createBoard(input);
  } else {
    console.log("too many squares");
    error.style.display = "flex";
  }
}

function colorSquare() {
  if (click) {
    if (color === "rainbow") {
      this.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function reset() {
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll(".cell");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

function grid() {
  let board = document.querySelector(".board");
  let squares = document.querySelectorAll(".cell");
  squares.forEach((el) => el.classList.toggle("active"));
}
