import _ from 'lodash';
import Timer from 'easytimer.js';
import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const far = document.getElementById('farCanvas');
  const mid = document.getElementById('midCanvas');
  const near = document.getElementById('nearCanvas');
  const fore = document.getElementById('foreCanvas');
  const canvas = document.getElementById('myCanvas');

  const game = new Game(canvas, far, mid, near, fore);
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

  timer.addEventListener('secondTenthsUpdated', () => {
    clock.innerHTML = timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']);
  });

  function step() {
    game.render();
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
      timer.start({precision: 'secondTenths'});
    }
  };

  playAgainBtn.onclick = () => {
    gameOver.classList.add('hidden');
    clock.innerHTML = '00:00:0';
    game.playAgain();
    game.render();
  };

  muteBtn.onclick = () => {
    music.pause();
  };

  unmuteBtn.onclick = () => {
    music.play();
  };

});
