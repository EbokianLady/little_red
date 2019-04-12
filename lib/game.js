import LittleRedRiding from "./little_red_riding";
import BigBadWolf from "./big_bad_wolf";
import ParallaxLayer from "./parallax_layer";
import Item from "./item";

class Game {
  constructor(canvas, fore) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.foreCanvas = fore;
    this.foreContext = fore.getContext('2d');
    this.foreGround = new ParallaxLayer(this.foreContext, 'fore');

    this.pause = true;
    this.stamina = 800;

    this.initializeGame();
    this.initializeElements();
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

  initializeElements() {
    this.littleRed = new LittleRedRiding(this.context);
    this.bigBadWolf = new BigBadWolf(this.context);
    this.apple1 = new Item(this.context, 'lowApple', 875, 1000);
    this.apple2 = new Item(this.context, 'lowApple', 1175, 1200);
    this.apple3 = new Item(this.context, 'medApple', 1025, 1200);
    this.apple4 = new Item(this.context, 'medApple', 1525, 1400);
    this.apple5 = new Item(this.context, 'highApple', 1375, 1400);
    this.apple6 = new Item(this.context, 'highApple', 2075, 1600);
  }

  jump(e) {
    if (e.code === 'Space' && this.littleRed.jumps < 3) {
      this.littleRed.jump();
    }
  }

  playAgain() {
    this.pause = true;
    this.stamina = 800;
    this.initializeElements();
  }

  renderApples() {
    this.apple1.render();
    this.apple2.render();
    this.apple3.render();
    this.apple4.render();
    this.apple5.render();
    this.apple6.render();
  }

  renderElements() {
    this.context.clearRect(0, 0, 800, 400);
    this.bigBadWolf.render();
    this.littleRed.render();
    this.renderApples();
    this.foreGround.render(this.stamina);

    this.stamina -= 0.5;
    this.bigBadWolf.xPos = (150 - Math.floor(this.stamina / 8));
    this.littleRed.xPos = (320 + Math.floor(this.stamina / 2));
  }
}

export default Game;
