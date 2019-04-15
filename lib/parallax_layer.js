import StaminaBar from "./stamina_bar";
import ScreenText from "./screen_text";

const FAR_BACKGROUND = {
  src: './assets/images/parallax/background_far.png',
  speed: 2,
  adjust: 0.5,
  dx: 1500,
};

const MID_BACKGROUND = {
  src: './assets/images/parallax/background_mid.png',
  speed: 3,
  adjust: 1,
  dx: 1500,
};

const NEAR_BACKGROUND = {
  src: './assets/images/parallax/background_near.png',
  speed: 4,
  adjust: 2,
  dx: 1500,
};

const FOREGROUND = {
  src: './assets/images/parallax/foreground.png',
  speed: 5,
  adjust: 3,
  dx: 1500,
};

const HOUSE = {
  src: './assets/images/parallax/grandmas_house.png',
  speed: 3,
  adjust: 0,
  dx: 2500,
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
      case 'house':
        this.options = HOUSE;
        break;
    }

    this.description = description;
    this.speed = this.options.speed;
    this.adjust = this.options.adjust;
    this.xPos = 0;
    this.dx = this.options.dx;
    this.dx1 = null;
    this.dx2 = null;
    this.dy = 0;
    this.context = context;

    this.draw = this.draw.bind(this);
    this.render = this.render.bind(this);
    this.text = null;

    this.image = new Image();
    this.image.onload = () => {
      this.context.drawImage(
        this.image, 0, 0, this.dx, 400, this.dx1, this.dy, this.dx, 400
      );
    };
    this.image.src = this.options.src;

    if (this.description === 'fore') {
      this.staminaBar = new StaminaBar(this.context);
    }
  }

  draw() {
    this.context.drawImage(
      this.image, 0, 0, this.dx, 400, this.dx1, this.dy, this.dx, 400
    );
    this.context.drawImage(
      this.image, 0, 0, this.dx, 400, this.dx2, this.dy, this.dx, 400
    );
  }

  render(speed = 0, stamina = null) {
    this.context.clearRect(0, 0, 800, 400);
    this.dx1 = this.xPos;
    this.dx2 = this.xPos + this.dx;
    this.draw();

    if (this.description === 'fore') {
      this.staminaBar.render(stamina);
    }
    if (this.text) {
      this.text.render();
    }

    // if I wanted to incorporate a changing background this is where.
    if (this.xPos <= -1500 && this.description !== 'house') this.xPos += 1500;
    this.xPos -= (this.speed - (this.adjust * speed));
  }
}

export default ParallaxLayer;
