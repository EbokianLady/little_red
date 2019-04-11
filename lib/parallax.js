const CANVAS_HEIGHT = 400;
const CANVAS_WIDTH = 800;

const FAR_BACKGROUND = {
  speed: 0.5,
  src: './assets/images/parallax/background_far.png',
  imgCoord: [0, 0, 800, 400],
  canvasCoord1: [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT],
  canvasCoord2: [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT]
};

const MID_BACKGROUND = {
  speed: 0.75,
  src: './assets/images/parallax/background_mid.png',
  imgCoord: [0, 0, 800, 400],
  canvasCoord1: [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT],
  canvasCoord2: [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT]
};

const NEAR_BACKGROUND = {
  speed: 1,
  src: './assets/images/parallax/background_near.png',
  imgCoord: [0, 0, 800, 400],
  canvasCoord1: [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT],
  canvasCoord2: [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT]
};

const FOREGROUND = {
  speed: 2,
  src: './assets/images/parallax/foreground.png',
  imgCoord: [0, 0, 800, 400],
  canvasCoord1: [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT],
  canvasCoord2: [null, 0, CANVAS_WIDTH, CANVAS_HEIGHT]
};

class Background {
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
    this.context = context;

    this.img = new Image();
    this.img.src = this.options.src;
    this.draw = this.draw.bind(this);
  }

  draw() {
    this.context.drawImage(
      this.img,
      this.options.imgCoord[0],
      this.options.imgCoord[1],
      this.options.imgCoord[2],
      this.options.imgCoord[3],
      this.options.canvasCoord1[0],
      this.options.canvasCoord1[1],
      this.options.canvasCoord1[2],
      this.options.canvasCoord1[3]
    );
    this.context.drawImage(
      this.img,
      this.options.imgCoord[0],
      this.options.imgCoord[1],
      this.options.imgCoord[2],
      this.options.imgCoord[3],
      this.options.canvasCoord2[0],
      this.options.canvasCoord2[1],
      this.options.canvasCoord2[2],
      this.options.canvasCoord2[3]
    );
  }

  render() {
    this.context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    this.options.canvasCoord1[0] = this.xPos;
    this.options.canvasCoord2[0] = this.xPos + CANVAS_WIDTH;
    this.img.onload = () => {
      this.draw();
    };
    if (this.xPos <= -CANVAS_WIDTH) this.xPos = 0;
    this.xPos -= this.speed;
  }
}

export default Background;
