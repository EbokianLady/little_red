class StaminaBar {
  constructor(context) {
    this.context = context;
    this.image = new Image();
    this.image.src = './assets/images/elements/stamina_bar.png';
  }

  render(stamina) {
    const percent = (stamina + 175) / 575;
    if (percent === 1) {
      this.context.drawImage(
        this.image, 0, 800, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (15 / 16)) {
      this.context.drawImage(
        this.image, 0, 750, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (14 / 16)) {
      this.context.drawImage(
        this.image, 0, 700, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (13 / 16)) {
      this.context.drawImage(
        this.image, 0, 650, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (12 / 16)) {
      this.context.drawImage(
        this.image, 0, 600, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (11 / 16)) {
      this.context.drawImage(
        this.image, 0, 550, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (10 / 16)) {
      this.context.drawImage(
        this.image, 0, 500, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (9 / 16)) {
      this.context.drawImage(
        this.image, 0, 450, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (8 / 16)) {
      this.context.drawImage(
        this.image, 0, 400, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (7 / 16)) {
      this.context.drawImage(
        this.image, 0, 350, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (6 / 16)) {
      this.context.drawImage(
        this.image, 0, 300, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (5 / 16)) {
      this.context.drawImage(
        this.image, 0, 250, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (4 / 16)) {
      this.context.drawImage(
        this.image, 0, 200, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (3 / 16)) {
      this.context.drawImage(
        this.image, 0, 150, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (2 / 16)) {
      this.context.drawImage(
        this.image, 0, 100, 400, 50, 25, 25, 200, 25
      );
    } else if (percent > (1 / 16)) {
      this.context.drawImage(
        this.image, 0, 50, 400, 50, 25, 25, 200, 25
      );
    } else {
      this.context.drawImage(
        this.image, 0, 0, 400, 50, 25, 25, 200, 25
      );
    }
  }
}

export default StaminaBar;
