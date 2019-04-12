# README

# Little Red

Little Red is a javascript game inspired by the well-known fairytale. Little Red Riding Hood must run for her life with The Big Bad Wolf right on her tail. It’s up to her not to get caught. Jump over obstacles and catch red apples to replenish energy.

## Wireframe

This game is a single page consisting of:
* Header: The Game logo
* Game Canvas: The game itself, staged center
* Control Panel/Footer: Pause/Start, Mute/Unmute, links and instructions

![Wireframe](https://github.com/EbokianLady/little_red/blob/master/assets/images/wireframe.png)

## Technologies

* Vanilla Javascript for game logic: background, character and item classes.
* CSS for single page styling
* Canvas for the game rendering

## Features

* Parallax Scrolling
* Sprite animation and gravity
* Live timer
* High scores (bonus: staged left)

## Implementation Timeline

### DAY 1
Setup file structure. Style basics on one-page app.
Stage canvas and add background and foreground layers.
Implement parallax scrolling.

### DAY 2

Build Red Riding Hood and Big Bad Wolf classes.
Render their (temp) icons onto the the game display.
Create dynamic distance depending on Red's energy meter.
Add timer. Render Game Over.

### DAY 3

Add jumping and physics.
Implement items and obstacles that update energy bar on contact.
Add music with mute/unmute option.

### DAY 4

Add highscores staged left.
Implement difficulty levels (less items, more obstacles).
