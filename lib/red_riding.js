import _ from 'lodash';
import Background from './parallax';


document.addEventListener('DOMContentLoaded', () => {
  const farCanvas = document.getElementById('farCanvas');
  const farContext = farCanvas.getContext('2d');
  const midCanvas = document.getElementById('midCanvas');
  const midContext = midCanvas.getContext('2d');
  const nearCanvas = document.getElementById('nearCanvas');
  const nearContext = nearCanvas.getContext('2d');
  const foreCanvas = document.getElementById('foreCanvas');
  const foreContext = foreCanvas.getContext('2d');

  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');


  // const image = new Image();
  // image.src = './assets/images/parallax/background_near.png';
  // image.onload = () => {
  //   context.drawImage(image, 0, 0, 1150, 575, 0, 0, 800, 400);
  // };

  const farGround = new Background(farContext, 'far');
  const midGround = new Background(midContext, 'mid');
  const nearGround = new Background(nearContext, 'near');
  const foreGround = new Background(foreContext, 'fore');

  farGround.render();
  midGround.render();
  nearGround.render();
  foreGround.render();
});
