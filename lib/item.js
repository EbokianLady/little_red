const HIGH_APPLE = {
  src: './assets/images/elements/apple3.png',
  value: 0.8,
  yPos: 60,
  dx: 35,
  dy: 35,
};

const MED_APPLE = {
  src: './assets/images/elements/apple2.png',
  value: 0.6,
  yPos: 140,
  dx: 35,
  dy: 35,
};

const LOW_APPLE = {
  src: './assets/images/elements/apple1.png',
  value: 0.4,
  yPos: 220,
  dx: 35,
  dy: 35,
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
    }

    this.context = context;
    this.value = this.options.value;
    this.speed = 4;
    this.xPos = xPos;
    this.yPos = this.options.yPos;
    this.dx = this.options.dx;
    this.dy = this.options.dy;
    this.xOffset = xOffset;
    this.sound = new Audio('./assets/sound/apple1.wav');

    this.image = new Image();
    this.image.src = this.options.src;
    this.render = this.render.bind(this);

    this.frameCount = 0;
    this.spriteY = 0;
  }

  render(speed) {
    this.context.drawImage(
      this.image, 0, this.spriteY, 100, 100, this.xPos, this.yPos, this.dx, this.dy
    );

    this.frameCount = (this.frameCount + 1) % 8;
    if (this.frameCount === 0) {
      this.spriteY = (this.spriteY + 100) % 400;
    }

    if (this.xPos <= -50) this.xPos += this.xOffset;
    this.xPos -= (this.speed - (2 * speed));
  }
}

export default Item;
