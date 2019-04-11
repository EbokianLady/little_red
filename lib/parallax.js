import ParallaxLayer from "./parallax_layer";

class Parallax {
  constructor(far, mid, near, fore) {
    this.farCanvas = far;
    this.midCanvas = mid;
    this.nearCanvas = near;
    this.foreCanvas = fore;

    this.farContext = far.getContext('2d');
    this.midContext = mid.getContext('2d');
    this.nearContext = near.getContext('2d');
    this.foreContext = fore.getContext('2d');

    this.renderLayers = this.renderLayers.bind(this);
    this.initializeLayers();
  }

  initializeLayers() {
    this.farGround = new ParallaxLayer(this.farContext, 'far');
    this.midGround = new ParallaxLayer(this.midContext, 'mid');
    this.nearGround = new ParallaxLayer(this.nearContext, 'near');
    this.foreGround = new ParallaxLayer(this.foreContext, 'fore');
  }

  renderLayers() {
    this.farGround.render();
    this.midGround.render();
    this.nearGround.render();
    this.foreGround.render();
  }
}

export default Parallax;
