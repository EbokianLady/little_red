import LittleRedRiding from "./little_red_riding";
import BigBadWolf from "./big_bad_wolf";
import ParallaxLayer from "./parallax_layer";
import Item from "./item";

class Game {
  constructor(canvas, far, mid, near, fore) {
    this.canvas = canvas;
    this.farCanvas = far;
    this.midCanvas = mid;
    this.nearCanvas = near;
    this.foreCanvas = fore;

    this.context = canvas.getContext('2d');
    this.farContext = far.getContext('2d');
    this.midContext = mid.getContext('2d');
    this.nearContext = near.getContext('2d');
    this.foreContext = fore.getContext('2d');

    this.level = 1;
    this.pause = true;
    this.stamina = 800;

    this.initializeGame();
    this.initializeElements();
    this.initializeParallax();
    this.jump = this.jump.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
  }

  initializeGame() {
    document.addEventListener('keydown', (e) => this.jump(e));
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

  initializeParallax() {
    this.farGround = new ParallaxLayer(this.farContext, 'far');
    this.midGround = new ParallaxLayer(this.midContext, 'mid');
    this.nearGround = new ParallaxLayer(this.nearContext, 'near');
    this.foreGround = new ParallaxLayer(this.foreContext, 'fore');
  }

  addLevel() {
    this.level += 1;
    this.items.forEach(item => {
      item.value -= 0.05;
      if (item.value < 0.2) item.value = 0.2;
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

  isOver() {
    return this.bigBadWolf.xPos === 400 && this.littleRed.yPos === 330;
  }

  jump(e) {
    if (e.code === 'Space' && this.littleRed.jumps < 3) {
      this.littleRed.jump();
    }
  }

  playAgain() {
    this.pause = true;
    this.level = 1;
    this.stamina = 800;
    this.initializeElements();
  }

  renderBackgrounds() {
    this.farGround.render(this.bigBadWolf.speed);
    this.midGround.render(this.bigBadWolf.speed);
    this.nearGround.render(this.bigBadWolf.speed);
  }

  renderItems() {
    this.items.forEach(item => {
      item.render(this.bigBadWolf.speed);
    });
  }

  render() {
    this.renderBackgrounds();
    this.context.clearRect(0, 0, 800, 400);
    this.bigBadWolf.render();
    this.littleRed.render();
    this.renderItems();
    this.checkCollision();
    this.foreGround.render(this.bigBadWolf.speed, this.bigBadWolf.xPos);
  }
}

export default Game;
