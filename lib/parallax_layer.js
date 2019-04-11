const FAR_BACKGROUND = {
  speed: 1,
  src: './assets/images/parallax/background_far.png',
};

const MID_BACKGROUND = {
  speed: 2,
  src: './assets/images/parallax/background_mid.png',
};

const NEAR_BACKGROUND = {
  speed: 3,
  src: './assets/images/parallax/background_near.png',
};

const FOREGROUND = {
  speed: 4,
  src: './assets/images/parallax/foreground.png',
};

class ParallaxLayer {
  constructor(context, description) {
    switch (description) {
      case 'far':
        this.options = FAR_BACKGROUND;
        break;
      case 'mid':
        this.options = MID_BACKGROUND;
        break;
      case 'near':
        this.options = NEAR_BACKGROUND;
        break;
      case 'fore':
        this.options = FOREGROUND;
        break;
    }

    this.speed = this.options.speed;
    this.xPos = 0;
    this.dx1 = null;
    this.dx2 = null;
    this.dy = 0;
    this.context = context;

    this.img = new Image();
    this.img.src = this.options.src;
    this.draw = this.draw.bind(this);
    this.render = this.render.bind(this);
  }

  draw() {
    this.context.drawImage(
      this.img, 0, 0, 800, 400,
      this.dx1, this.dy, 800, 400
    );
    this.context.drawImage(
      this.img, 0, 0, 800, 400,
      this.dx2, this.dy, 800, 400
    );
  }

  render() {
    this.context.clearRect(0, 0, 800, 400);
    this.dx1 = this.xPos;
    this.dx2 = this.xPos + 800;
    this.draw();

    if (this.xPos <= -800) this.xPos = 0;
    this.xPos -= this.speed;
  }
}

export default ParallaxLayer;
