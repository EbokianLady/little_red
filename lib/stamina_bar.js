class StaminaBar {
  constructor(context) {
    this.context = context;
    this.image = new Image();
    this.image.src = './assets/images/elements/stamina_bar.png';
  }

  render(stamina) {
    if (stamina > 362.5) {
      this.context.drawImage(
        this.image, 0, 800, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 325) {
      this.context.drawImage(
        this.image, 0, 750, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 287.5) {
      this.context.drawImage(
        this.image, 0, 700, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 250) {
      this.context.drawImage(
        this.image, 0, 650, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 212.5) {
      this.context.drawImage(
        this.image, 0, 600, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 175) {
      this.context.drawImage(
        this.image, 0, 550, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 137.5) {
      this.context.drawImage(
        this.image, 0, 500, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 100) {
      this.context.drawImage(
        this.image, 0, 450, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 62.5) {
      this.context.drawImage(
        this.image, 0, 400, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 25) {
      this.context.drawImage(
        this.image, 0, 350, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > -12.5) {
      this.context.drawImage(
        this.image, 0, 300, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > -50) {
      this.context.drawImage(
        this.image, 0, 250, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > -87.5) {
      this.context.drawImage(
        this.image, 0, 200, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > -125) {
      this.context.drawImage(
        this.image, 0, 150, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > -162.5) {
      this.context.drawImage(
        this.image, 0, 100, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > -195) {
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
