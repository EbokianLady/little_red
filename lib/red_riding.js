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

  const game = new Game(canvas, foreCanvas);
  const parallax = new Parallax(farCanvas, midCanvas, nearCanvas);
  const timer = new Timer();

  const music = new Audio('./assets/music/POL-find-the-answer-short.wav');
  music.loop = true;

  const pauseBtn = document.getElementById('pause');
  const playBtn = document.getElementById('play');
  const muteBtn = document.getElementById('mute');
  const unmuteBtn = document.getElementById('unmute');
  const playAgainBtn = document.getElementById('play-again');

  const clock = document.getElementById('timer');
  const gameOver = document.getElementById('game-over');
  let animationId;

  // TO-DO start game screen
  // TO-DO find music, default play as soon as loaded

  timer.addEventListener('secondsUpdated', () => {
    clock.innerHTML = timer.getTimeValues().toString().slice(3);
  });

  function step() {
    parallax.renderLayers();
    game.renderElements();
    animationId = requestAnimationFrame(step);

    if (game.isOver()) {
      cancelAnimationFrame(animationId);
      timer.stop();
      gameOver.classList.remove('hidden');
    }
  }

  // Buttons

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

  playAgainBtn.onclick = () => {
    gameOver.classList.add('hidden');
    clock.innerHTML = '00:00';
    game.playAgain();
    game.renderElements();
  };

  muteBtn.onclick = () => {
    music.pause();
  };

  unmuteBtn.onclick = () => {
    music.play();
  };

});
