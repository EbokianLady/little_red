const RUNNING = {
  src: './assets/images/little_red_riding/red_running.png',
};

const JUMPING = {
  src: './assets/images/little_red_riding/red_jumping.png',
};

const FALLING = {
  src: './assets/images/little_red_riding/red_falling.png',
};

class LittleRedRiding {
  constructor(context) {
    this.context = context;
    this.xPos = 550;
    this.yPos = 300;
    this.speed = 0;
    this.yVel = 0;
    this.gravity = 0.9;
    this.motion = 'running';
    this.jumps = 0;
    this.initializeImages();
    this.sound = new Audio('./assets/sound/leaves_rustling.wav');
    this.sound.loop = true;
    this.sound.volume = 0.5;

    this.frameCount = 0;
    this.spriteY = 0;
  }

  initializeImages() {
    this.runningImg = new Image();
    this.runningImg.src = RUNNING.src;
    this.jumpingImg = new Image();
    this.jumpingImg.src = JUMPING.src;
    this.fallingImg = new Image();
    this.fallingImg.src = FALLING.src;
  }

  isTouching(object) {
    const rangeX = object.xPos + object.dx;
    const rangeY = object.yPos + object.dy;
    if (this.xPos > rangeX || this.xPos + 50 < object.xPos) {
      return false;
    } else if (this.yPos > rangeY || this.yPos + 50 < object.yPos) {
      return false;
    } else {
      return true;
    }
  }

  jump() {
    this.motion = 'jumping';
    this.jumps += 1;
    this.yVel = 12;
    this.sound.volume = 0.3;
  }

  render() {
    if (this.motion === 'running') {
      this.context.drawImage(
        this.runningImg, 0, this.spriteY, 300, 300, this.xPos, this.yPos, 75, 75
      );
      this.frameCount = (this.frameCount + 1) % 4;
      if (this.frameCount === 0) {
        this.spriteY = (this.spriteY + 300) % 2400;
      }

    } else if (this.motion === 'jumping') {
        this.yPos -= this.yVel;
        this.yVel -= this.gravity;

      if (this.yVel < 0) {
        this.motion = 'falling';
      }

      this.context.drawImage(
        this.jumpingImg, 0, this.spriteY, 300, 300, this.xPos, this.yPos, 75, 75
      );
      this.frameCount = (this.frameCount + 1) % 4;
      if (this.frameCount === 0) {
        this.spriteY = (this.spriteY + 300) % 1200;
      }
    } else if (this.motion === 'falling') {
      if (this.yPos + this.yVel > 300) {
        this.motion = 'running';
        this.yPos = 300;
        this.yVel = 0;
        this.jumps = 0;
        this.sound.volume = 0.5;
      } else {
        this.yPos += this.yVel;
        this.yVel += this.gravity;
      }
      this.context.drawImage(
        this.fallingImg, 0, this.spriteY, 300, 300, this.xPos, this.yPos, 75, 75
      );
      this.frameCount = (this.frameCount + 1) % 4;
      if (this.frameCount === 0) {
        this.spriteY = (this.spriteY + 300) % 1200;
      }
    }
  }
}

export default LittleRedRiding;
