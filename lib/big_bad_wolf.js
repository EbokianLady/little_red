class BigBadWolf {
  constructor(context) {
    this.context = context;
    this.minXPos = -175;
    this.xPos = -175;
    this.yPos = 300;
    this.acceleration = 0.005;
    this.speed = 0;
    this.initializeImages();

    this.frameCount = 0;
    this.spriteY = 0;
  }

  accessSpeed() {
    if (this.speed > 0.5) {
      this.speed = 0.5;
    } else if (this.speed < -0.5) {
      this.speed = -0.5;
    }
  }

  accessXPos() {
    if (this.xPos < this.minXPos) {
      this.xPos += 0.5;
    } else if (this.xPos > 400) {
      this.xPos = 400;
    }
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

    this.speed += this.acceleration;
    this.accessSpeed();

    this.xPos += this.speed;
    this.accessXPos();
  }
}

export default BigBadWolf;
