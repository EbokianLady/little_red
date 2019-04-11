import _ from 'lodash';
import Parallax from './parallax';

document.addEventListener('DOMContentLoaded', () => {
  const farCanvas = document.getElementById('farCanvas');
  const midCanvas = document.getElementById('midCanvas');
  const nearCanvas = document.getElementById('nearCanvas');
  const foreCanvas = document.getElementById('foreCanvas');
  const parallax = new Parallax(farCanvas, midCanvas, nearCanvas, foreCanvas);

  const canvas = document.getElementById('myCanvas');

  parallax.initializeLayers();

  function step() {
    parallax.renderLayers();
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
});
