export class Ship {
  constructor(name, length, isHorizontal, startIndex) {
    this.name = name;
    this.length = length;
    this.isHorizontal = isHorizontal;
    this.startIndex = startIndex;
  }
  renderShip(shipId, shipsContainer) {
    this.shipObject = document.createElement("div");
    this.shipObject.id = `ship-${shipId}`;
    this.shipObject.className = `ship deck-${this.length}`;
    this.shipObject.draggable = true;

    for (let i = 0; i < this.length; i++) {
      const shipPart = document.createElement("div");
      shipPart.id = `deck-${this.length}-${shipId}${i}`;
      shipPart.className = `deck`;
      this.shipObject.appendChild(shipPart);
    }

    shipsContainer.appendChild(this.shipObject);
  }
}
