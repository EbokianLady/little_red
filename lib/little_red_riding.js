const RUNNING = {
  src: './assets/images/little_red_riding/running.png',
};

const JUMPING = {
  src: './assets/images/little_red_riding/jumping.png',
};

const FALLING = {
  src: './assets/images/little_red_riding/falling.png',
};

class LittleRedRiding {
  constructor(context) {
    this.context = context;
    this.stamina = 1500;
    this.xPos = 720;
    this.yPos = 330;
    this.motion = 'running';
    this.initializeImages();
  }

  initializeImages() {
    this.runningImg = new Image();
    this.runningImg.src = RUNNING.src;
    this.jumpingImg = new Image();
    this.jumpingImg.src = JUMPING.src;
    this.fallingImg = new Image();
    this.fallingImg.src = FALLING.src;
  }

  render() {
    if (this.motion === 'running') {
      this.context.drawImage(
        this.runningImg, 0, 0, 48, 48, this.xPos, this.yPos, 50, 50
      );
    }
    this.xPos -= 4;
  }
}

export default LittleRedRiding;
