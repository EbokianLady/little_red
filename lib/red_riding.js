import _ from 'lodash';
import Parallax from './parallax';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const farCanvas = document.getElementById('farCanvas');
  const midCanvas = document.getElementById('midCanvas');
  const nearCanvas = document.getElementById('nearCanvas');
  const foreCanvas = document.getElementById('foreCanvas');
  const canvas = document.getElementById('myCanvas');

  const game = new Game(canvas);
  const parallax = new Parallax(farCanvas, midCanvas, nearCanvas, foreCanvas);

  const pauseBtn = document.getElementById('pause');
  const playBtn = document.getElementById('play');
  const muteBtn = document.getElementById('mute');
  const unmuteBtn = document.getElementById('unmute');

  // this doesn't work b/c the images haven't loaded
  // parallax.renderLayers();
  let animationId;

  function step() {
    parallax.renderLayers();
    game.renderPlayers();
    animationId = requestAnimationFrame(step);
  }

  pauseBtn.onclick = () => {
    if (!game.pause) {
      game.pause = true;
      cancelAnimationFrame(animationId);
    }
  };

  playBtn.onclick = () => {
    if (game.pause) {
      game.pause = false;
      requestAnimationFrame(step);
    }
  };

  // requestAnimationFrame(step);
});
