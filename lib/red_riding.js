import _ from 'lodash';
import Timer from 'easytimer.js';

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
  const timer = new Timer();

  const music = new Audio('./assets/music/POL-find-the-answer-short.wav');
  music.loop = true;

  const pauseBtn = document.getElementById('pause');
  const playBtn = document.getElementById('play');
  const muteBtn = document.getElementById('mute');
  const unmuteBtn = document.getElementById('unmute');
  const clock = document.getElementById('timer');

  // TO-DO start game screen, game over screen, play again button
  // TO-DO find music, default play as soon as loaded

  let animationId;

  function step() {
    parallax.renderLayers();
    game.renderPlayers();
    animationId = requestAnimationFrame(step);

    if (game.isOver()) {
      cancelAnimationFrame(animationId);
      timer.stop();
    }
  }

  pauseBtn.onclick = () => {
    if (!game.pause) {
      game.pause = true;
      cancelAnimationFrame(animationId);
      timer.pause();
    }
  };

  playBtn.onclick = () => {
    if (game.pause) {
      game.pause = false;
      requestAnimationFrame(step);
      timer.start();
    }
  };

  muteBtn.onclick = () => {
    music.pause();
  };

  unmuteBtn.onclick = () => {
    music.play();
  };

  timer.addEventListener('secondsUpdated', () => {
    clock.innerHTML = timer.getTimeValues().toString().slice(3);
  });
});
