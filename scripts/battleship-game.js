import { Board } from "./board.js";
import { Player } from "./player.js";

export class Game {
  constructor(gameOptionsContainer) {
    this.width = 10;
    this.angle = 0;
    this.gameOver = false;

    this.humanHits = [];
    this.computerHits = [];

    this.computerSunkShips = [];
    this.humanSunkShips = [];

    this.isHorizontal = true;
    this.notDropped = false;

    this.gameOptionsContainer = gameOptionsContainer;

    this.players = [
      new Player("human", new Board("human", this.width)),
      new Player("computer", new Board("computer", this.width)),
    ];
    this.currentPlayer = this.players[0];
  }

  initializeGame() {
    this.players.forEach((player) => {
      player.board.createBoard();
      player.board.createBlocks();
    });

    if (this.gameOptionsContainer.children.length != 0) {
      info.innerHTML = "Place all your ships please!";
    } else {
      info.innerHTML = "This's where the fun begins!";

      const allBoardBlocks = document.querySelectorAll("#computer div");
      allBoardBlocks.forEach((block) =>
        block.addEventListener("click", handleClick)
      );
    }
    this.currentPlayer = this.players[0];

    turn.textContent = "You Go!";
    info.textContent = "The game has started!";
  }
}
