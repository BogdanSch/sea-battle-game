export class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.blocks = [];
  }

  placeBlock(block) {
    this.blocks.push(block);
  }
}
