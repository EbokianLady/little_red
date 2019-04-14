class ScreenText {
  constructor(context, level) {
    this.context = context;
    this.frameCount = 0;
    this.spriteY = -100;
    this.image = new Image();

    switch(level) {
      case 1:
        this.image.src = './assets/images/text/level_one.png';
        break;
      case 2:
        this.image.src = './assets/images/text/level_two.png';
        break;
      case 3:
        this.image.src = './assets/images/text/level_three.png';
        break;
      case 4:
        this.image.src = './assets/images/text/level_four.png';
        break;
      case 5:
        this.image.src = './assets/images/text/level_five.png';
        break;
      case 6:
        this.image.src = './assets/images/text/level_six.png';
        break;
      case 7:
        this.image.src = './assets/images/text/level_seven.png';
        break;
      case 8:
        this.image.src = './assets/images/text/level_eight.png';
        break;
      case 9:
        this.image.src = './assets/images/text/level_nine.png';
        break;
      case 10:
        this.image.src = './assets/images/text/level_ten.png';
        break;
    }
  }

  render() {
    this.context.drawImage(
      this.image, 0, this.spriteY, 1000, 100, 150, 100, 500, 50
    );
    this.frameCount = (this.frameCount + 1) % 10;
    if (this.frameCount === 0) {
      this.spriteY = (this.spriteY + 100);
    }
  }
}

export default ScreenText;
