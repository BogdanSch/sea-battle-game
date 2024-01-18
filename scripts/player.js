export class Player {
  constructor(name = "human", board = null) {
    this.name = name;
    this.board = board;
  }
  toString() {
    return `${this.name}`;
  }
}
