import LittleRedRiding from "./little_red_riding";
import BigBadWolf from "./big_bad_wolf";
import ParallaxLayer from "./parallax_layer";
import Item from "./item";
import ScreenText from "./screen_text";
import GrandmasHouse from "./grandmas_house";

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
    this.apples = 0;
    this.pause = true;
    this.sound = true;
    this.stamina = 800;
    // this.grandmas_house = false;
    this.winTransition = false;
    this.isWon = false;

    this.initializeGame();
    this.initializeElements();
    this.initializeParallax();
    this.jump = this.jump.bind(this);
    this.playAgain = this.playAgain.bind(this);
    this.checkCollision = this.checkCollision.bind(this);
    this.won = this.won.bind(this);
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
    // this.house = new GrandmasHouse(this.midContext);
  }

  initializeParallax() {
    this.farGround = new ParallaxLayer(this.farContext, 'far');
    this.midGround = new ParallaxLayer(this.midContext, 'mid');
    this.nearGround = new ParallaxLayer(this.nearContext, 'near');
    this.foreGround = new ParallaxLayer(this.foreContext, 'fore');
    this.foreGround.text = new ScreenText(this.context, 1);
  }

  addLevel() {
    this.level += 1;
    this.bigBadWolf.minXPos += 50;
    this.foreGround.text = new ScreenText(this.context, this.level);
  }

  checkCollision() {
    this.items.forEach(item => {
      if (this.littleRed.isTouching(item)) {
        item.xPos += item.xOffset;
        this.bigBadWolf.speed -= item.value;
        this.apples += 1;
        if (this.sound) {
          item.sound.play();
        }
      }
    });
  }

  isLost() {
    return this.bigBadWolf.xPos === 400 && this.littleRed.yPos === 300;
  }

  won() {
    this.bigBadWolf.fallBack();
    this.items.forEach(item => {
      item.value = 0;
    });
    this.winTransition = true;
    // this.grandmas_house = true;
  }

  jump(e) {
    if (e.code === 'Space' && this.littleRed.jumps < 3) {
      this.littleRed.jump();
    }
  }

  playAgain() {
    this.pause = true;
    this.level = 1;
    this.apples = 0;
    this.stamina = 800;
    this.initializeElements();
    this.foreGround.text = new ScreenText(this.context, this.level);
    this.context.clearRect(0, 0, 800, 400);
    this.foreGround.draw();
    this.winTransition = false;
    this.isWon = false;
  }

  renderBackgrounds() {
    if (this.winTransition) {
      this.farGround.render(0.5);
      this.midGround.render(0.5);
      this.nearGround.render(0.5);
    } else {
      this.farGround.render(this.bigBadWolf.speed);
      this.midGround.render(this.bigBadWolf.speed);
      this.nearGround.render(this.bigBadWolf.speed);
    }
  }

  renderItems() {
    this.items.forEach(item => {
      item.render(this.bigBadWolf.speed);
    });
  }

  render() {
    this.renderBackgrounds();
    this.context.clearRect(0, 0, 800, 400);
    this.littleRed.render();
    this.bigBadWolf.render();
    // if (this.grandmas_house) {
    //   this.house.render();
    //   if (this.house.finalPos) {
    //     this.won = true;
    //   }
    // }
    this.renderItems();
    this.checkCollision();

    // foreground and winTransition Logic
    if (this.winTransition) {
      this.foreGround.render(0.5, this.bigBadWolf.xPos);
      this.bigBadWolf.xPos -= 1;
      if (this.bigBadWolf.xPos < -200) {
        this.winTransition = false;
        this.isWon = true;
      }
    } else {
      this.foreGround.render(this.bigBadWolf.speed, this.bigBadWolf.xPos);
    }
  }
}

export default Game;
