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

  const pauseBtn = document.getElementById('pause');
  const playBtn = document.getElementById('play');
  const muteBtn = document.getElementById('mute');
  const unmuteBtn = document.getElementById('unmute');
  const playAgainBtn = document.getElementById('play-again');

  const clock = document.getElementById('timer');
  const gameOver = document.getElementById('game-over');
  let animationId;

  const music = new Audio('./assets/sound/PP_possession.mp3');
  music.loop = true;
  // music.play();

  timer.addEventListener('secondTenthsUpdated', () => {
    clock.innerHTML = timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']);

    const seconds = timer.getTimeValues().seconds;
    const tenths = timer.getTimeValues().secondTenths;

    if (seconds % 10 === 0 && tenths === 0 && game.sound) {
      game.bigBadWolf.growl();
    }
  });

  function step() {
    game.render();
    animationId = requestAnimationFrame(step);

    if (game.isOver()) {
      cancelAnimationFrame(animationId);
      if (game.sound) game.bigBadWolf.growl();
      game.littleRed.sound.pause();
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
      game.littleRed.sound.pause();
    }
  };

  playBtn.onclick = () => {
    if (game.pause) {
      game.pause = false;
      requestAnimationFrame(step);
      timer.start({precision: 'secondTenths'});
      if (game.sound) {
        music.play();
        game.littleRed.sound.play();
      }
    }
  };

  playAgainBtn.onclick = () => {
    gameOver.classList.add('hidden');
    clock.innerHTML = '00:00:0';
    game.playAgain();
  };

  muteBtn.onclick = () => {
    game.sound = false;
    music.pause();
    game.littleRed.sound.pause();
  };

  unmuteBtn.onclick = () => {
    game.sound = true;
    music.play();
    game.littleRed.sound.play();
  };
});
