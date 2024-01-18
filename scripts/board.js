import { Ship } from "./ship.js";

export class Board {
  constructor(user, width, containerColor) {
    this.gameBoardsContainer = document.querySelector(".game__boards");
    this.gameOptionsContainer = document.querySelector(".game__options");
    this.user = user;
    this.width = width;
    this.containerColor = containerColor;

    this.ships = [
      new Ship("deck-one", 1, true, 0),
      new Ship("deck-one", 1, true, 0),
      new Ship("deck-three", 3, true, 0),
      new Ship("deck-three", 3, true, 0),
    ];
  }

  createBoard() {
    this.gameBoard = document.createElement("div");
    this.gameBoard.classList.add("game__board");
    this.gameBoard.style.background = this.containerColor;
    this.gameBoard.id = this.user;
    this.gameBoardsContainer.append(this.gameBoard);
  }

  createBlocks() {
    this.blocks = [];
    for (let i = 0; i < this.width * this.width; i++) {
      const block = document.createElement("div");
      block.classList.add("block");
      block.id = `block-${i}`;
      this.gameBoard.append(block);
      this.blocks.push(block);
    }
  }

  generateChoiceShips() {
    this.gameOptionsContainer.innerHTML = "";

    for (let i = 0; i < this.ships.length; i++) {
      this.ships.isHorizontal = this.angle === 0;
      this.ships[i].renderShip(i, this.gameOptionsContainer);
    }
  }

  handleShipsPlacement() {}

  getBlockById(blockId) {
    return this.blocks.find((block) => block.id === blockId);
  }

  rotatePlayerShips() {
    this.angle = this.angle === 0 ? 90 : 0;
    // const optionShips = Array.from(this.gameOptionsContainer.children);
    // optionShips.forEach(
    //   (optionShip) => (optionShip.style.transform = `rotate(${this.angle}deg)`)
    // );

    // for (let i = 0; i < this.ships.length; i++) {
    //   this.ships.isHorizontal = this.angle === 0;
    //   this.ships[i].renderShip(gameOptionsContainer);
    // }
  }

  // getValidity(board, isHorizontal, startIndex, ship) {
  //   const validStart =
  //     isHorizontal && startIndex <= this.width * this.width - ship.length
  //       ? startIndex
  //       : startIndex <= this.width * this.width - this.width * ship.length
  //       ? startIndex
  //       : this.width * this.width - this.width * ship.length;

  //   const shipBlocks = [];
  //   for (let i = 0; i < ship.length; i++) {
  //     const index = isHorizontal ? validStart + i : validStart + i * this.width;
  //     shipBlocks.push(board.getBlockById(`block-${index}`));
  //   }

  //   const notTaken = shipBlocks.every((block) => !block.taken);

  //   return { shipBlocks, notTaken };
  // }

  // generate(user, ship, startId) {
  //   const board = user === "human" ? this.humanBoard : this.computerBoard;
  //   const allBoardBlocks = board.blocks;
  //   const randomBoolean = Math.random() < 0.5;
  //   this.isHorizontal = user === "human" ? this.angle === 0 : randomBoolean;
  //   const randomStartIndex = Math.floor(
  //     Math.random() * this.width * this.width
  //   );
  //   const startIndex = startId ? startId.substr(6) : randomStartIndex;

  //   const { shipBlocks, notTaken } = this.getValidity(
  //     board,
  //     this.isHorizontal,
  //     startIndex,
  //     ship
  //   );

  //   if (notTaken) {
  //     shipBlocks.forEach((block) => {
  //       block.ship = ship;
  //       block.taken = true;
  //     });
  //   } else {
  //     if (user === "computer") this.generate(user, ship);
  //     if (user === "human") this.notDropped = true;
  //   }
  // }
}
