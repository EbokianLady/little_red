import LittleRedRiding from "./little_red_riding";
import BigBadWolf from "./big_bad_wolf";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.pause = true;
    this.music = true;
    this.stamina = 800;

    this.littleRed = new LittleRedRiding(this.context);
    this.bigBadWolf = new BigBadWolf(this.context);
  }

  isOver() {
    return this.stamina <= 0;
  }

  renderPlayers() {
    this.context.clearRect(0, 0, 800, 400);
    this.bigBadWolf.render();
    this.littleRed.render();

    this.stamina -= 1;
    this.bigBadWolf.xPos = (150 - Math.floor(this.stamina / 8));
    this.littleRed.xPos = (320 + Math.floor(this.stamina / 2));
  }
}

export default Game;
