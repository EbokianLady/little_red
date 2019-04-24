# LITTLE RED

[![Link](https://github.com/EbokianLady/little_red/blob/master/assets/images/logo-banner.png)](https://ebokianlady.github.io/little_red/)

<a id="technologies"></a>
## Technologies

* JavaScript
* HTML Canvas
* CSS
* Affinity Design

<a id="introduction"></a>
## Introduction

Little Red is a javascript game inspired by the well-known fairytale. Little Red Riding Hood must run for her life with The Big Bad Wolf right on her tail. It’s up to her not to get caught and make it to Grandma's House. Jump to catch red apples and maintain speed else the Big Bad Wolf will catch up.

![Screenshot](https://github.com/EbokianLady/little_red/blob/master/assets/images/read_me/full_screen.png)

<a id="features"></a>
## Features

* Parallax Scrolling with a movement speed tethored to sprite speed
* Implemented levels that decrease the maximum distance between Little Red and the Wolf
* Collision Detection for Little Red and pickup-able apples
* Custom artwork and animation for an immersive UX
* Storybook excerpts
* Music and sound effects (mutable)
* Live timer

![Red](https://github.com/EbokianLady/little_red/blob/master/assets/images/read_me/red.png)
![Wolf](https://github.com/EbokianLady/little_red/blob/master/assets/images/read_me/wolf.png)

### Collision Detection and Level Adjustment

For each frame, every apple is checked to see if it is in contact with Little Red. This is done by comparing Little Red's x/y coordinates with those of the items, adjusting for left/right and upper/lower bounds of the elements.
When Red catches an apple, the apple is offset by an amount unique to each apple.

Every 20 seconds the level adjusts and the Big Bad Wolf gets just a little bit closer. This is incorporated with a minXPos used in the bigBadWolf class. Additionally, flavored text from the original story feature on screen in a fade-in/fade-out.

lib/little_red_riding.js
~~~~
isTouching(object) {
  const rangeX = object.xPos + object.dx;
  const rangeY = object.yPos + object.dy;
  if (this.xPos > rangeX || this.xPos + 50 < object.xPos) {
    return false;
  } else if (this.yPos > rangeY || this.yPos + 50 < object.yPos) {
    return false;
  } else {
    return true;
  }
}
~~~~

lib/game.js
~~~~
addLevel() {
  this.level += 1;
  this.bigBadWolf.minXPos += 50;
  this.foreGround.text = new ScreenText(this.context, this.level);
}

checkCollision() {
  this.items.forEach(item => {
    if (this.littleRed.isTouching(item)) {
      item.xPos += item.xOffset;
      this.bigBadWolf.speed -= item.value;
      this.apples += 1;
      if (this.sound) {
        item.sound.play();
      }
    }
  });
}
~~~~

## Future Features

* Mobile-friendly
* Dynamic ending animations for win and lose
* Varied effect on speed from apples
