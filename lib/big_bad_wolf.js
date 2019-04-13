class BigBadWolf {
  constructor(context) {
    this.context = context;
    this.xPos = -200;
    this.yPos = 300;
    this.acceleration = 0.005;
    this.speed = 0;
    this.initializeImages();
  }

  initializeImages() {
    this.image = new Image();
    this.image.src = './assets/images/big_bad_wolf/wolf.png';
  }

  render() {
    this.context.drawImage(
      this.image, 0, 0, 96, 48, this.xPos, this.yPos, 200, 100
    );
    this.xPos += this.speed;
    this.speed += this.acceleration;
    if (this.speed > 0.5) this.speed = 0.5;
    if (this.speed < -0.5) this.speed = -0.5;
    if (this.xPos > 400) this.xPos = 400;
    if (this.xPos < -200) this.xPos = -200;
  }
}

export default BigBadWolf;
