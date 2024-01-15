// import { Ship } from "./ship.js";

// const gameOptionContainer = document.querySelector("#game-option");
// const rotateButton = document.querySelector("#rotate");
// const gameBoardsContainer = document.querySelector("#game-boards");
// const startButton = document.querySelector("#start");
// const turn = document.querySelector("#turn");
// const info = document.querySelector("#info");

// let angle = 0;
// let width = 10;
// let gameOver = false;
// let humanTurn = true;

// let humanHits = [];
// let computerHits = [];

// let computerSunkShips = [];
// let humanSunkShips = [];

// function rotate() {
//   const optionShips = Array.from(gameOptionContainer.children);
//   angle = angle === 0 ? 90 : 0;
//   optionShips.forEach(
//     (optionShip) => (optionShip.style.transform = `rotate(${angle}deg)`)
//   );
// }

// rotateButton.addEventListener("click", rotate);

// function createBoard(color, user) {
//   const gameBoard = document.createElement("div");
//   gameBoard.classList.add("game__board");
//   gameBoard.style.background = color;
//   gameBoard.id = user;
//   gameBoardsContainer.append(gameBoard);
//   for (let i = 0; i < width * width; i++) {
//     const block = document.createElement("div");
//     block.classList.add("block");
//     block.id = `block-${i}`;
//     gameBoard.append(block);
//   }
// }

// createBoard("tan", "human");
// createBoard("pink", "computer");

// const ship1 = new Ship("deck-one", 1);
// const ship2 = new Ship("deck-one", 1);
// const ship3 = new Ship("deck-three", 3);
// const ship4 = new Ship("deck-three", 3);

// const ships = [ship1, ship2, ship3, ship4];

// let isHorisontal = true;

// let notDropped;

// function getValidity(allBoardBlocks, isHorisontal, startIndex, ship) {
//   let validStart = isHorisontal
//     ? startIndex <= width * width - ship.length
//       ? startIndex
//       : width * width - ship.length
//     : startIndex <= width * width - width * ship.length
//     ? startIndex
//     : width * width - width * ship.length;
//   console.log(validStart, isHorisontal);
//   let shipBlocks = [];

//   for (let i = 0; i < ship.length; i++) {
//     if (isHorisontal) {
//       shipBlocks.push(allBoardBlocks[Number(validStart) + i]);
//     } else {
//       shipBlocks.push(allBoardBlocks[Number(validStart) + i * width]);
//     }
//   }

//   const notTaken = shipBlocks.every(
//     (shipBlocks) => !shipBlocks.classList.contains("taken")
//   );

//   return { shipBlocks, notTaken };
// }

// function generate(user, ship, startId) {
//   const allBoardBlocks = document.querySelectorAll(`#${user} div`);
//   let randomBoolean = Math.random() < 0.5;
//   isHorisontal = user === "human" ? angle === 0 : randomBoolean;
//   let randomStartIndex = Math.floor(Math.random() * width * width);
//   let startIndex = startId ? startId.substr(6) : randomStartIndex;

//   const { shipBlocks, notTaken } = getValidity(
//     allBoardBlocks,
//     isHorisontal,
//     startIndex,
//     ship
//   );

//   if (notTaken) {
//     shipBlocks.forEach((shipBlock) => {
//       shipBlock.classList.add(ship.name);
//       shipBlock.classList.add("taken");
//     });
//   } else {
//     if (user === "computer") generate(user, ship);
//     if (user === "human") notDropped = true;
//   }
//   console.log(shipBlocks);
// }

// ships.forEach((ship) => generate("computer", ship));

// let draggedShip;

// const optionShips = Array.from(gameOptionContainer.children);

// optionShips.forEach((optionShip) =>
//   optionShip.addEventListener("dragstart", dragStart)
// );

// const allUserBlocks = document.querySelectorAll("#human div");
// allUserBlocks.forEach((userBlock) => {
//   userBlock.addEventListener("dragover", dragOver);
//   userBlock.addEventListener("drop", dropShip);
// });

// function dragStart(event) {
//   draggedShip = event.target;
//   notDropped = false;
// }

// function dragOver(event) {
//   event.preventDefault();
//   const ship = ships[draggedShip.id.substr(5)];
//   highlight(event.target.id.substr(6), ship);
// }

// function dropShip(event) {
//   const startID = event.target.id;
//   const ship = ships[draggedShip.id.substr(5)];
//   generate("human", ship, startID);
//   if (!notDropped) {
//     draggedShip.remove();
//   }
// }

// function highlight(startIndex, ship) {
//   const allBoardBlocks = document.querySelectorAll("#human div");
//   let isHorisontal = angle === 0;
//   const { shipBlocks, notTaken } = getValidity(
//     allBoardBlocks,
//     isHorisontal,
//     startIndex,
//     ship
//   );
//   if (notTaken) {
//     shipBlocks.forEach((shipBlock) => {
//       shipBlock.classList.add("hover");
//       setTimeout(() => shipBlock.classList.remove("hover"), 500);
//     });
//   }
// }

// function computerGo() {
//   if (!gameOver) {
//     turn.textContent = "Computers move!";
//     info.textContent = "Computers is thinking...";

//     setTimeout(() => {
//       let rand = Math.floor(Math.random() * width * width);
//       const allBoardsBlocks = document.querySelectorAll("#human div");

//       if (
//         allBoardsBlocks[rand].classList.contains("taken") &&
//         allBoardsBlocks[rand].classList.contains("boom")
//       ) {
//         computerGo();
//         return;
//       } else if (
//         allBoardsBlocks[rand].classList.contains("taken") &&
//         !allBoardsBlocks[rand].classList.contains("boom")
//       ) {
//         allBoardsBlocks[rand].classList.add("boom");
//         info.textContent = "Computer hit your ship!";
//         let classes = Array.from(allBoardsBlocks[rand].classList);
//         classes = classes.filter(
//           (className) =>
//             className !== "block" &&
//             className !== "boom" &&
//             className !== "taken"
//         );
//         computerHits.push(...classes);
//         console.log(computerHits);
//         checkScore("computer", computerHits, computerSunkShips);
//       } else {
//         info.textContent = "Nothing hit";
//         allBoardsBlocks[rand].classList.add("empty");
//       }
//     }, 3000);
//     setTimeout(() => {
//       humanTurn = true;
//       turn.textContent = "Your Go!";
//       info.textContent = "Your turn!";
//       const allBoardBlocks = document.querySelectorAll("#computer div");
//       allBoardBlocks.forEach((block) =>
//         block.addEventListener("click", handleClick)
//       );
//     }, 6000);
//   }
// }

// function handleClick(event) {
//   if (!gameOver)
//     if (event.target.classList.contains("taken")) {
//       event.target.classList.add("boom");
//       info.innerHTML = "You hit computers ship!";
//       let classes = Array.from(event.target.classList);
//       classes = classes.filter(
//         (className) =>
//           className !== "block" && className !== "boom" && className !== "taken"
//       );
//       humanHits.push(...classes);
//       console.log(humanHits);
//       checkScore("human", humanHits, humanSunkShips);
//     } else {
//       info.textContent = "You missed it";
//       event.target.classList.add("empty");
//     }
//   humanTurn = false;
//   const allBoardBlocks = document.querySelectorAll("#computer div");
//   allBoardBlocks.forEach((block) => block.replaceWith(block.cloneNode(true)));
//   setTimeout(computerGo, 2000);
// }

// function startGame() {
//   if (gameOptionContainer.children.length != 0) {
//     info.innerHTML = "Place all your ships please!";
//   } else {
//     info.innerHTML = "This's where the fun begins!";

//     const allBoardBlocks = document.querySelectorAll("#computer div");
//     allBoardBlocks.forEach((block) =>
//       block.addEventListener("click", handleClick)
//     );
//   }
//   humanTurn = true;
//   turn.textContent = "You Go!";
//   info.textContent = "The game has started!";
// }

// startButton.addEventListener("click", startGame);

// function checkScore(user, userHits, userSunkShips) {
//   function checkShip(shipName, shipLength) {
//     if (
//       userHits.filter((storedShipName) => storedShipName === shipName)
//         .length === shipLength
//     ) {
//       if (user === "human") {
//         info.textContent = `You have just sunk the computer's ${shipName}`;
//         humanHits = userHits.filter(
//           (storedShipName) => storedShipName != shipName
//         );
//       }
//       if (user === "computer") {
//         info.textContent = `Computer sunk your ${shipName}`;
//         computerHits = userHits.filter(
//           (storedShipName) => storedShipName != shipName
//         );
//       }
//       userSunkShips.push(shipName);
//     }
//   }
//   checkShip("deck-one", 1);
//   checkShip("deck-three", 3);

//   console.log("userHits", user, userHits);
//   console.log("userSunkShips", user, userSunkShips);

//   if (humanSunkShips.length === 4) {
//     info.textContent = "You won!";
//     gameOver = true;
//   }
//   if (computerSunkShips.length === 4) {
//     info.textContent = "Computer won!";
//     gameOver = true;
//   }
// }

"use strict";

import { Game } from "./battleship-game.js";

const gameOptionsContainer = document.querySelector("#game-options");
const gameBoardsContainer = document.querySelector("#game-boards");
const turn = document.querySelector("#turn");
const info = document.querySelector("#info");

const startGameButton = document.querySelector("#startButton");
const rotateButton = document.querySelector("#rotateButton");

let game = new Game(gameOptionsContainer);
game.initializeGame();

rotateButton.addEventListener("click", () =>
  game.humanBoard.rotatePlayerShips()
);
startGameButton.addEventListener("click", () => {
  game = new Game(gameOptionsContainer);
  game.initializeGame();
});
