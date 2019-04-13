class BigBadWolf {
  constructor(context) {
    this.context = context;
    this.xPos = -176;
    this.yPos = 300;
    this.acceleration = 0.005;
    this.speed = 0;
    this.initializeImages();

    this.frameCount = 0;
    this.spriteY = 0;
  }

  initializeImages() {
    this.image = new Image();
    this.image.src = './assets/images/big_bad_wolf/wolf_running.png';
  }

  render() {
    this.context.drawImage(
      this.image, 0, this.spriteY, 400, 200, this.xPos, this.yPos, 200, 100
    );
    this.frameCount = (this.frameCount + 1) % 4;
    if (this.frameCount === 0) {
      this.spriteY = (this.spriteY + 200) % 1200;
    }
    this.xPos += this.speed;
    this.speed += this.acceleration;
    if (this.speed > 0.5) this.speed = 0.5;
    if (this.speed < -0.5) this.speed = -0.5;
    if (this.xPos > 400) this.xPos = 400;
    if (this.xPos < -176) this.xPos = -176;
  }
}

export default BigBadWolf;
