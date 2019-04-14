const LEVEL_ONE = {
  src: './assets/images/text/level_one.png',
};

const LEVEL_TWO = {
  src: './assets/images/text/level_two.png',
};

const LEVEL_THREE = {
  src: './assets/images/text/level_three.png',
};

const LEVEL_FOUR = {
  src: './assets/images/text/level_four.png',
};

class ScreenText {
  constructor(context, level) {
    this.context = context;
    this.frameCount = 0;
    this.spriteY = 0;
    this.image = new Image();

    switch(level) {
      case 1:
        this.image.src = LEVEL_ONE.src;
        break;
      case 2:
        this.image.src = LEVEL_TWO.src;
        break;
      case 3:
        this.image.src = LEVEL_THREE.src;
        break;
      case 4:
        this.image.src = LEVEL_FOUR.src;
        break;
    }
  }

  render() {
    this.context.drawImage(
      this.image, 0, this.spriteY, 1000, 175, 150, 100, 500, 87.5
    );
    this.frameCount = (this.frameCount + 1) % 15;
    if (this.frameCount === 0) {
      this.spriteY = (this.spriteY + 175);
    }
  }
}

export default ScreenText;
