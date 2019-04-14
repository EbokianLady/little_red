const HIGH_APPLE = {
  src: './assets/images/elements/apple.png',
  value: 1,
  points: 3,
  yPos: 40,
  dx: 50,
  dy: 50,
};

const MED_APPLE = {
  src: './assets/images/elements/apple.png',
  value: 0.75,
  points: 2,
  yPos: 130,
  dx: 50,
  dy: 50,
};

const LOW_APPLE = {
  src: './assets/images/elements/apple.png',
  value: 0.5,
  points: 1,
  yPos: 220,
  dx: 50,
  dy: 50,
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
    this.points = this.options.points;
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
