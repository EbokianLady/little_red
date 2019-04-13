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
    this.checkCollision = this.checkCollision.bind(this);
  }

  initializeGame() {
    document.addEventListener('keydown', (e) => this.jump(e));
  }

  // contact with obstacles/items logic occurs here.
  // if red hits object this.stamina -/+ object value

  isOver() {
    return this.bigBadWolf.xPos === 400 && this.littleRed.yPos === 330;
  }

  initializeElements() {
    this.littleRed = new LittleRedRiding(this.context);
    this.bigBadWolf = new BigBadWolf(this.context);
    this.items = [
      new Item(this.context, 'lowApple', 875, 1000),
      new Item(this.context, 'lowApple', 1175, 1200),
      new Item(this.context, 'medApple', 1025, 1200),
      new Item(this.context, 'medApple', 1525, 1400),
      new Item(this.context, 'highApple', 1375, 1400),
      new Item(this.context, 'highApple', 2075, 1600)
    ];
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

  renderItems() {
    this.items.forEach(item => {
      item.render();
    });
  }

  checkCollision() {
    this.items.forEach(item => {
      if (this.littleRed.isTouching(item)) {
        item.xPos += item.xOffset;
        this.bigBadWolf.speed -= item.value;
      }
    });
  }

  renderElements() {
    this.context.clearRect(0, 0, 800, 400);
    this.bigBadWolf.render();
    this.littleRed.render();
    this.renderItems();
    this.checkCollision();
    this.foreGround.render(this.bigBadWolf.xPos + 200);
  }
}

export default Game;
