class BigBadWolf {
  constructor(context) {
    this.context = context;
    this.xPos = 50;
    this.yPos = 300;
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
    this.xPos += 1;
  }
}

export default BigBadWolf;
