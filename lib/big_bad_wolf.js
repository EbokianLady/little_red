class BigBadWolf {
  constructor(context) {
    this.context = context;
    this.minXPos = -175;
    this.xPos = -175;
    this.yPos = 300;
    this.acceleration = 0.005;
    this.speed = 0;
    this.growl1 = new Audio('./assets/sound/growl1.wav');
    this.growl2 = new Audio('./assets/sound/growl2.wav');
    this.growl3 = new Audio('./assets/sound/growl3.wav');
    this.initializeImages();

    this.frameCount = 0;
    this.spriteY = 0;
  }

  assessSpeed() {
    if (this.speed > 0.5) {
      this.speed = 0.5;
    } else if (this.speed < -0.5) {
      this.speed = -0.5;
    }
  }

  assessXPos() {
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

  growl() {
    const random = Math.floor(Math.random() * 3) + 1;
    switch(random) {
      case 1:
        this.growl1.play();
        break;
      case 2:
        this.growl2.play();
        break;
      case 3:
        this.growl3.play();
        break;
    }
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
    this.assessSpeed();

    this.xPos += this.speed;
    this.assessXPos();
  }
}

export default BigBadWolf;
