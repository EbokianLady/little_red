class StaminaBar {
  constructor(context) {
    this.context = context;
    this.image = new Image();
    this.image.src = './assets/images/elements/stamina_bar.png';
  }

  render(stamina) {
    if (stamina > 750) {
      this.context.drawImage(
        this.image, 0, 0, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 700) {
      this.context.drawImage(
        this.image, 0, 50, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 650) {
      this.context.drawImage(
        this.image, 0, 100, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 600) {
      this.context.drawImage(
        this.image, 0, 150, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 550) {
      this.context.drawImage(
        this.image, 0, 200, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 500) {
      this.context.drawImage(
        this.image, 0, 250, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 450) {
      this.context.drawImage(
        this.image, 0, 300, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 400) {
      this.context.drawImage(
        this.image, 0, 350, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 350) {
      this.context.drawImage(
        this.image, 0, 400, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 300) {
      this.context.drawImage(
        this.image, 0, 450, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 250) {
      this.context.drawImage(
        this.image, 0, 500, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 200) {
      this.context.drawImage(
        this.image, 0, 550, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 150) {
      this.context.drawImage(
        this.image, 0, 600, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 100) {
      this.context.drawImage(
        this.image, 0, 650, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 50) {
      this.context.drawImage(
        this.image, 0, 700, 400, 50, 25, 25, 200, 25
      );
    } else if (stamina > 10) {
      this.context.drawImage(
        this.image, 0, 750, 400, 50, 25, 25, 200, 25
      );
    } else {
      this.context.drawImage(
        this.image, 0, 800, 400, 50, 25, 25, 200, 25
      );
    }
  }
}

export default StaminaBar;
