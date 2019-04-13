import { runInThisContext } from "vm";

const HIGH_APPLE = {
  src: './assets/images/elements/apple.png',
  value: 1,
  yPos: 50,
  dx: 50,
  dy: 50,
};

const MED_APPLE = {
  src: './assets/images/elements/apple.png',
  value: 0.75,
  yPos: 150,
  dx: 50,
  dy: 50,
};

const LOW_APPLE = {
  src: './assets/images/elements/apple.png',
  value: 0.5,
  yPos: 250,
  dx: 50,
  dy: 50,
};

// 250; 150; 50

const ROCK = {
  src: './assets/images/little_red_riding/running.png',
};

class Item {
  constructor(context, description, xPos, xOffset) {
    switch (description) {
      case 'lowApple':
        this.options = LOW_APPLE;
        break;
      case 'medApple':
        this.options = MED_APPLE;
        break;
      case 'highApple':
        this.options = HIGH_APPLE;
        break;
      case 'rock':
        this.options = ROCK;
        break;
    }

    this.context = context;
    this.value = this.options.value;
    this.speed = 4;
    this.xPos = xPos;
    this.yPos = this.options.yPos;
    this.dx = this.options.dx;
    this.dy = this.options.dy;
    this.xOffset = xOffset;

    this.image = new Image();
    this.image.src = this.options.src;
    this.render = this.render.bind(this);
  }

  render(speed) {
    this.context.drawImage(
      this.image, 0, 0, this.dx, this.dy, this.xPos, this.yPos, this.dx, this.dy
    );

    if (this.xPos <= -50) this.xPos += this.xOffset;
    this.xPos -= (this.speed - (2 * speed));
  }
}

export default Item;
