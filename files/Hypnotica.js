// @ts-nocheck
/// <reference path="../../../../p5/addons/p5.global-mode.d.ts" />
'use strict'

let spaceship;
let radar;
let light;
let menu;
let sound;
let distance;
let planet;
let redlight;
let stars;

let radarAnimations = [];

function preload() {
    sound = loadSound('music.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    spaceship = new Spaceship();
    menu = new Menu();
    planet = new Planet(0, 0, 225);
    redlight = new RedLight();

    distance = new MeasureDistance();

    light = new Light();

    const rsNew = height / 16;
    const rsDur = 1205;
    for (let i = 0; i < 40; i++) {
        radarAnimations.push({ to: { rs: rsNew }, dur: rsDur, start: 23 + i * rsDur });
    }
    radar = new Radar(radarAnimations);

    stars = new Stars();


    new TWEEN.Tween(menu)
        .to({ isOver: 1 }, 0)
        .start(47573);
}

function draw() {
    clear();

    //top part of the screen
    noStroke();
    fill("#1a1a1a")
    rect(0, 0, width, height / 4);


    if (stars.nightVision) {
        fill(57, 181, 74);
    } else if (stars.termoVision) {
        fill(27, 20, 100);
    } else {
        fill(0, 0, 0);
    }
    circle(width / 2, height * 4, height * 4 - height / 40);

    //Tweens
    TWEEN.update(sound.currentTime() * 1000);

    //show all
    spaceship.show();
    radar.show();
    light.show();
    distance.show();
    planet.show();
    stars.show();
    redlight.show();
    menu.show();

    if (sound.isPlaying()) {
        menu.paused = false;
    } else {
        menu.paused = true;
    }
}

function keyReleased() {
    switch (key) {
        //pause
        case ' ':
            if (menu.isOver == 0) {
                //pause sound
                sound.isPlaying() ? sound.pause() : sound.play();

                //disable info
                menu.info = false;
            }
            break;
    }
}

function mouseClicked() {
    if (mouseX < width / 8 && mouseY < height / 8) {
        menu.active = !menu.active;
    }

    if (menu.hoverRestart) {
        setZero();
    }

    if (menu.hoverNightvision) {
        menu.activeNightVision = menu.activeNightVision ? false : true;
        stars.nightVision = stars.nightVision ? false : true;

        menu.activeTermoVision = false;
        stars.termoVision = false;

        setZero();
    }

    if (menu.hoverTermoVison) {
        menu.activeTermoVision = menu.activeNightVision ? false : true;
        stars.termoVision = stars.termoVision ? false : true;

        menu.activeNightVision = false;
        stars.nightVision = false;

        setZero();
    }
}

function setZero() {
    TWEEN.removeAll();

    radar.init(radarAnimations);
    light.init();
    distance.init();

    if (stars.nightVision) {
        planet = new Planet(0, 0, 0);
    } else if (stars.termoVision) {
        planet = new Planet(255, 255, 0);
    } else {
        planet = new Planet(0, 0, 255);
    }

    stars.init();
    redlight.init();

    menu.isOver = 0;
    sound.stop(0);

    new TWEEN.Tween(menu)
        .to({ isOver: 1 }, 0)
        .start(47573);

    sound.play();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}