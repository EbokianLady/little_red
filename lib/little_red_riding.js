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
    this.yVel = 0;
    this.gravity = 0.7;
    this.motion = 'running';
    this.jumps = 0;
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

  jump() {
    this.motion = 'jumping';
    this.jumps += 1;
    this.yVel = 30;
  }

  render() {
    if (this.motion === 'running') {
      this.context.drawImage(
        this.runningImg, 0, 0, 48, 48, this.xPos, this.yPos, 50, 50
        );

      } else if (this.motion === 'jumping') {
        this.yPos -= this.yVel;
        this.yVel *= this.gravity;

      if (this.yVel < 0.1) {
        this.motion = 'falling';
      }
      this.context.drawImage(
        this.jumpingImg, 0, 0, 48, 48, this.xPos, this.yPos, 50, 50
      );

    } else if (this.motion === 'falling') {

      if (this.yPos + this.yVel > 330) {
        this.motion = 'running';
        this.yPos = 330;
        this.yVel = 0;
        this.jumps = 0;
      } else {
        this.yPos += this.yVel;
        this.yVel /= this.gravity;
      }

      this.context.drawImage(
        this.jumpingImg, 0, 0, 48, 48, this.xPos, this.yPos, 50, 50
      );
    }
    this.xPos -= 4;
  }
}

export default LittleRedRiding;
