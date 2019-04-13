class StaminaBar {
  constructor(context) {
    this.context = context;
    this.image = new Image();
    this.image.src = './assets/images/elements/stamina_bar.png';
  }

  render(stamina) {
    if (stamina > 562.5) {
      this.context.drawImage(
        this.image, 0, 800, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 525) {
      this.context.drawImage(
        this.image, 0, 750, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 487.5) {
      this.context.drawImage(
        this.image, 0, 700, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 450) {
      this.context.drawImage(
        this.image, 0, 650, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 412.5) {
      this.context.drawImage(
        this.image, 0, 600, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 375) {
      this.context.drawImage(
        this.image, 0, 550, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 337.5) {
      this.context.drawImage(
        this.image, 0, 500, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 300) {
      this.context.drawImage(
        this.image, 0, 450, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 262.5) {
      this.context.drawImage(
        this.image, 0, 400, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 225) {
      this.context.drawImage(
        this.image, 0, 350, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 187.5) {
      this.context.drawImage(
        this.image, 0, 300, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 150) {
      this.context.drawImage(
        this.image, 0, 250, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 112.5) {
      this.context.drawImage(
        this.image, 0, 200, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 75) {
      this.context.drawImage(
        this.image, 0, 150, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 37.5) {
      this.context.drawImage(
        this.image, 0, 100, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 5) {
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
