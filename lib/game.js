import LittleRedRiding from "./little_red_riding";
import BigBadWolf from "./big_bad_wolf";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.pause = true;
    this.stamina = 800;

    this.littleRed = new LittleRedRiding(this.context);
    this.bigBadWolf = new BigBadWolf(this.context);
    this.initializeGame();

    this.jump = this.jump.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  initializeGame() {
    document.addEventListener('keydown', (e) => this.jump(e));
  }


  // contact with obstacles/items logic occurs here.
  // if red hits object this.stamina -/+ object value

  isOver() {
    return this.stamina <= 0 && this.littleRed.yPos === 330;
  }

  jump(e) {
    if (e.code === 'Space' && this.littleRed.jumps < 3) {
      this.littleRed.jump();
    }
  }

  playAgain() {
    this.pause = true;
    this.stamina = 800;
    this.littleRed = new LittleRedRiding(this.context);
    this.bigBadWolf = new BigBadWolf(this.context);
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
