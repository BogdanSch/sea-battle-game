import { Board } from "./board.js";
import { Player } from "./player.js";

export class Game {
  constructor(gameOptionsContainer, sendGameMessage) {
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
    this.sendGameMessage = sendGameMessage;

    this.players = [
      new Player("human", new Board("human", this.width)),
      new Player("computer", new Board("computer", this.width)),
    ];
    this.currentPlayer = this.players[0];
  }

  initializeGame() {
    if (this.gameOptionsContainer.children.length != 0) {
      this.sendGameMessage("Place all your ships, please!", "No one's turn");

      this.players.forEach((player) => {
        player.board.createBoard();
        player.board.createBlocks();
      });
      this.players[0].board.generateChoiceShips();
      return;
    } else {
      this.sendGameMessage("This is where the fun begins!", "No one's turn");
      // const allBoardBlocks = document.querySelectorAll("#computer div");
      // allBoardBlocks.forEach((block) =>
      //   block.addEventListener("click", handleClick)
      // );
    }

    this.currentPlayer = this.players[0];
    this.sendGameMessage("The game has started!", "Your turn now!");
  }
}
