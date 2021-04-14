class Stars {
    constructor() {
        this.stars;
        this.lightSpeedStars;

        this.red = 255;
        this.green = 255;
        this.blue = 255;

        this.rsRed = 255;
        this.rsGreen = 0;
        this.rsBlue = 0;

        this.gsRed = 0;
        this.gsGreen = 255;
        this.gsBlue = 0;


        this.nightVision = false;
        this.termoVision = false;

        this.init();
    }

    init() {
        if (this.nightVision) {
            this.red = 0;
            this.green = 0;
            this.blue = 0;

            this.rsRed = 128;
            this.rsGreen = 128;
            this.rsBlue = 128;

            this.gsRed = 255;
            this.gsGreen = 255;
            this.gsBlue = 255;
        } else if (this.termoVision) {
            this.red = 255;
            this.green = 255;
            this.blue = 0;

            this.rsRed = 241;
            this.rsGreen = 90;
            this.rsBlue = 36;

            this.gsRed = 255;
            this.gsGreen = 0;
            this.gsBlue = 0;
        } else {
            this.red = 255;
            this.green = 255;
            this.blue = 255;

            this.rsRed = 255;
            this.rsGreen = 0;
            this.rsBlue = 0;

            this.gsRed = 0;
            this.gsGreen = 255;
            this.gsBlue = 0;
        }


        this.initPhase1Regular();
        this.initPhase3Regular();

        this.animatePhase1Regular();
        this.animatePhase2Regular();
        this.animatePhase3Regular();
        this.animateClap();
        this.animateColors();
    }

    initPhase1Regular() {
        this.stars = [];
        let red;
        let green;
        let blue;

        if (this.nightVision) {
            red = 57;
            green = 181;
            blue = 74;
        } else if (this.termoVision) {
            red = 27;
            green = 20;
            blue = 100;
        } else {
            red = 0;
            green = 0;
            blue = 0;
        }

        //12 different locations (circular) - Phase 1
        this.stars.push(new Star(width / 2, height / 9 * 4 - height / 10, 5 / 1080 * height, red, green, blue));
        this.stars.push(new Star(width / 2, height / 9 * 4 + height / 10, 4.5 / 1080 * height, red, green, blue));
        this.stars.push(new Star(width / 2 - height / 10, height / 9 * 4, 5.5 / 1080 * height, red, green, blue));
        this.stars.push(new Star(width / 2 + height / 10, height / 9 * 4, 6 / 1080 * height, red, green, blue));

        const pos = Math.sqrt(Math.pow(height / 10, 2) - Math.pow(height / 20, 2 / 1080 * height, red, green, blue));
        this.stars.push(new Star(width / 2 + height / 20, height / 9 * 4 - pos, 3.8 / 1080 * height, red, green, blue));
        this.stars.push(new Star(width / 2 + height / 20, height / 9 * 4 + pos, 4.6 / 1080 * height, red, green, blue));
        this.stars.push(new Star(width / 2 - height / 20, height / 9 * 4 - pos, 5.1 / 1080 * height, red, green, blue));
        this.stars.push(new Star(width / 2 - height / 20, height / 9 * 4 + pos, 4.2 / 1080 * height, red, green, blue));

        this.stars.push(new Star(width / 2 + pos, height / 9 * 4 + height / 20, 3.9 / 1080 * height, red, green, blue));
        this.stars.push(new Star(width / 2 + pos, height / 9 * 4 - height / 20, 5.7 / 1080 * height, red, green, blue));
        this.stars.push(new Star(width / 2 - pos, height / 9 * 4 + height / 20, 5 / 1080 * height, red, green, blue));
        this.stars.push(new Star(width / 2 - pos, height / 9 * 4 - height / 20, 4.7 / 1080 * height, red, green, blue));
    }

    //show stars
    show() {
        for (let i = 0; i < this.stars.length; i++) {
            this.stars[i].show();
        }

        for (let i = 0; i < this.lightSpeedStars.length; i++) {
            this.lightSpeedStars[i].show();
        }
    }

    //animations Phase 1
    animatePhase1Regular() {
        for (let i = 0; i < 2; i++) {
            //star 1 - oben
            new TWEEN.Tween(this.stars[0])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(i * 4000);

            new TWEEN.Tween(this.stars[0])
                .to({ y: height / 40 + 25, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(i * 4000);

            //star 2 - unten
            new TWEEN.Tween(this.stars[1])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(400 + i * 4000);

            new TWEEN.Tween(this.stars[1])
                .to({ y: (height * 5 - height / 3.3 - (height * 4 - height / 8) - 25), r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(400 + i * 4000);

            //star 3 - links
            new TWEEN.Tween(this.stars[2])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(800 + i * 4000);


            new TWEEN.Tween(this.stars[2])
                .to({ x: 0 - 25, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(800 + i * 4000);

            //star 4 - rechts
            new TWEEN.Tween(this.stars[3])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(1200 + i * 4000);

            new TWEEN.Tween(this.stars[3])
                .to({ x: width + 25, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(1200 + i * 4000);

            //star 5 - weiter oben rechts
            new TWEEN.Tween(this.stars[4])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(1600 + i * 4000);

            new TWEEN.Tween(this.stars[4])
                .to({ x: width / 3 * 2, y: height / 33 + 30, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(1600 + i * 4000);

            //star 6 - weiter unten rechts
            new TWEEN.Tween(this.stars[5])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(2000 + i * 4000);

            new TWEEN.Tween(this.stars[5])
                .to({ x: width / 3 * 2, y: height / 6 * 5 - 25, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(2000 + i * 4000);

            //star 7 - weiter oben links
            new TWEEN.Tween(this.stars[6])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(2400 + i * 4000);

            new TWEEN.Tween(this.stars[6])
                .to({ x: width / 3, y: height / 33 + 30, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(2400 + i * 4000);

            //star 8 - weiter unten links
            new TWEEN.Tween(this.stars[7])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(2800 + i * 4000);

            new TWEEN.Tween(this.stars[7])
                .to({ x: width / 3, y: height / 6 * 5 - 25, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(2800 + i * 4000);

            //star 9 - unten rechts
            new TWEEN.Tween(this.stars[8])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(3200 + i * 4000);

            new TWEEN.Tween(this.stars[8])
                .to({ x: width / 7 * 6, y: height / 7 * 6, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(3200 + i * 4000);

            //star 10 - oben rechts
            new TWEEN.Tween(this.stars[9])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(3600 + i * 4000);

            new TWEEN.Tween(this.stars[9])
                .to({ x: width / 7 * 6, y: height / 8, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(3600 + i * 4000);

            //star 11 - unten links
            new TWEEN.Tween(this.stars[10])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(4000 + i * 4000);

            new TWEEN.Tween(this.stars[10])
                .to({ x: width / 7, y: height / 7 * 6, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(4000 + i * 4000);

            //star 12 - oben links
            new TWEEN.Tween(this.stars[11])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(4400 + i * 4000);

            new TWEEN.Tween(this.stars[11])
                .to({ x: width / 7, y: height / 8, r: "*5" }, 4000)
                .easing(TWEEN.Easing.Linear.None)
                .start(4400 + i * 4000);
        }

        //star 1 - oben
        new TWEEN.Tween(this.stars[0])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(8000);

        //star 2 - unten
        new TWEEN.Tween(this.stars[1])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(8400);

        //star 3 - links
        new TWEEN.Tween(this.stars[2])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(8800);

        //star 4 - rechts
        new TWEEN.Tween(this.stars[3])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9000);

        //star 5 - weiter oben rechts
        new TWEEN.Tween(this.stars[4])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9000);

        //star 6 - weiter unten rechts
        new TWEEN.Tween(this.stars[5])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9000);

        //star 7 - weiter oben links
        new TWEEN.Tween(this.stars[6])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9000);

        //star 8 - weiter unten links
        new TWEEN.Tween(this.stars[7])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9000);

        //star 9 - unten rechts
        new TWEEN.Tween(this.stars[8])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9000);

        //star 10 - oben rechts
        new TWEEN.Tween(this.stars[9])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9000);

        //star 11 - unten links
        new TWEEN.Tween(this.stars[10])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9000);

        //star 12 - oben links
        new TWEEN.Tween(this.stars[11])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9000);
    }

    animatePhase2Regular() {
        for (let i = 0; i < 17; i++) {
            //star 1 - oben
            new TWEEN.Tween(this.stars[0])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(9233 + i * 1000);

            new TWEEN.Tween(this.stars[0])
                .to({ y: height / 40 + 25, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(9233 + i * 1000);

            //star 2 - unten
            new TWEEN.Tween(this.stars[1])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(9533 + i * 1000);

            new TWEEN.Tween(this.stars[1])
                .to({ y: (height * 5 - height / 3.3 - (height * 4 - height / 8) - 25), r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(9533 + i * 1000);

            //star 3 - links
            new TWEEN.Tween(this.stars[2])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(9833 + i * 1000);

            new TWEEN.Tween(this.stars[2])
                .to({ x: 0 - 25, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(9833 + i * 1000);

            //star 4 - rechts
            new TWEEN.Tween(this.stars[3])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(10133 + i * 1000);

            new TWEEN.Tween(this.stars[3])
                .to({ x: width + 25, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(10133 + i * 1000);

            //star 5 - weiter oben rechts
            new TWEEN.Tween(this.stars[4])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(10433 + i * 1000);

            new TWEEN.Tween(this.stars[4])
                .to({ x: width / 3 * 2, y: height / 33 + 30, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(10433 + i * 1000);

            //star 6 - weiter unten rechts
            new TWEEN.Tween(this.stars[5])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(10733 + i * 1000);

            new TWEEN.Tween(this.stars[5])
                .to({ x: width / 3 * 2, y: height / 6 * 5 - 25, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(10733 + i * 1000);

            //star 7 - weiter oben links
            new TWEEN.Tween(this.stars[6])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(11033 + i * 1000);

            new TWEEN.Tween(this.stars[6])
                .to({ x: width / 3, y: height / 33 + 30, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(11033 + i * 1000);

            //star 8 - weiter unten links
            new TWEEN.Tween(this.stars[7])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(11333 + i * 1000);

            new TWEEN.Tween(this.stars[7])
                .to({ x: width / 3, y: height / 6 * 5 - 25, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(11333 + i * 1000);

            //star 9 - unten rechts
            new TWEEN.Tween(this.stars[8])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(11633 + i * 1000);

            new TWEEN.Tween(this.stars[8])
                .to({ x: width / 7 * 6, y: height / 7 * 6, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(11633 + i * 1000);

            //star 10 - oben rechts
            new TWEEN.Tween(this.stars[9])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(11933 + i * 1000);

            new TWEEN.Tween(this.stars[9])
                .to({ x: width / 7 * 6, y: height / 8, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(11933 + i * 1000);

        }

        for (let i = 0; i < 16; i++) {
            //star 11 - unten links
            new TWEEN.Tween(this.stars[10])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(12233 + i * 1000);

            new TWEEN.Tween(this.stars[10])
                .to({ x: width / 7, y: height / 7 * 6, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(12233 + i * 1000);

            //star 12 - oben links
            new TWEEN.Tween(this.stars[11])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(12533 + i * 1000);

            new TWEEN.Tween(this.stars[11])
                .to({ x: width / 7, y: height / 8, r: "*5" }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(12533 + i * 1000);
        }

        //star 1 - oben
        new TWEEN.Tween(this.stars[0])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(26233);

        //star 2 - unten
        new TWEEN.Tween(this.stars[1])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(26533);

        //star 3 - links
        new TWEEN.Tween(this.stars[2])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(26833);

        //star 4 - rechts
        new TWEEN.Tween(this.stars[3])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(27133);

        //star 5 - weiter oben rechts
        new TWEEN.Tween(this.stars[4])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(27433);

        //star 6 - weiter unten rechts
        new TWEEN.Tween(this.stars[5])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(27733);

        //star 7 - weiter oben links
        new TWEEN.Tween(this.stars[6])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(28033);

        //star 8 - weiter unten links
        new TWEEN.Tween(this.stars[7])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(28100);

        //star 9 - unten rechts
        new TWEEN.Tween(this.stars[8])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(28100);

        //star 10 - oben rechts
        new TWEEN.Tween(this.stars[9])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(28100);

        //star 11 - unten links
        new TWEEN.Tween(this.stars[10])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(27400);

        //star 12 - oben links
        new TWEEN.Tween(this.stars[11])
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(27600);
    }


    initPhase3Regular() {
        this.lightSpeedStars = [];

        //12 different locations (circular) - Phase 3
        this.lightSpeedStars.push(new LightSpeedStar(width / 2, height / 9 * 4 - height / 10, width / 2, height / 9 * 4 - height / 10));
        this.lightSpeedStars.push(new LightSpeedStar(width / 2, height / 9 * 4 + height / 10, width / 2, height / 9 * 4 + height / 10));
        this.lightSpeedStars.push(new LightSpeedStar(width / 2 - height / 10, height / 9 * 4, width / 2 - height / 10, height / 9 * 4));
        this.lightSpeedStars.push(new LightSpeedStar(width / 2 + height / 10, height / 9 * 4, width / 2 + height / 10, height / 9 * 4));

        const pos = Math.sqrt(Math.pow(height / 10, 2) - Math.pow(height / 20, 2));
        this.lightSpeedStars.push(new LightSpeedStar(width / 2 + height / 20, height / 9 * 4 - pos, width / 2 + height / 20, height / 9 * 4 - pos));
        this.lightSpeedStars.push(new LightSpeedStar(width / 2 + height / 20, height / 9 * 4 + pos, width / 2 + height / 20, height / 9 * 4 + pos));
        this.lightSpeedStars.push(new LightSpeedStar(width / 2 - height / 20, height / 9 * 4 - pos, width / 2 - height / 20, height / 9 * 4 - pos));
        this.lightSpeedStars.push(new LightSpeedStar(width / 2 - height / 20, height / 9 * 4 + pos, width / 2 - height / 20, height / 9 * 4 + pos));

        this.lightSpeedStars.push(new LightSpeedStar(width / 2 + pos, height / 9 * 4 + height / 20, width / 2 + pos, height / 9 * 4 + height / 20));
        this.lightSpeedStars.push(new LightSpeedStar(width / 2 + pos, height / 9 * 4 - height / 20, width / 2 + pos, height / 9 * 4 - height / 20));
        this.lightSpeedStars.push(new LightSpeedStar(width / 2 - pos, height / 9 * 4 + height / 20, width / 2 - pos, height / 9 * 4 + height / 20));
        this.lightSpeedStars.push(new LightSpeedStar(width / 2 - pos, height / 9 * 4 - height / 20, width / 2 - pos, height / 9 * 4 - height / 20));
    }

    animatePhase3Regular() {

        const pos = Math.sqrt(Math.pow(height / 10, 2) - Math.pow(height / 20, 2));

        for (let i = 0; i < 27; i++) {
            //ls 1 - oben
            new TWEEN.Tween(this.lightSpeedStars[0])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28275 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[0])
                .to({ x2: width / 2, y2: height / 9 * 4 - height / 10 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28275 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[0])
                .to({ x1: width / 2, y1: height / 9 * 4 - height / 10 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28275 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[0])
                .to({ x2: width / 2, y2: height / 40 + 6 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28275 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[0])
                .to({ x1: width / 2, y1: height / 40 + 6 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28625 + i * 700);


            //ls 2 - unten
            new TWEEN.Tween(this.lightSpeedStars[1])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28375 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[1])
                .to({ x1: width / 2, y1: height / 9 * 4 + height / 10 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28375 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[1])
                .to({ x2: width / 2, y2: height / 9 * 4 + height / 10 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28375 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[1])
                .to({ x2: width / 2, y2: height * 5 - height / 3.3 - (height * 4 - height / 8) - 6 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28375 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[1])
                .to({ x1: width / 2, y1: height * 5 - height / 3.3 - (height * 4 - height / 8) - 6 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28725 + i * 700);



            //ls 3 - links
            new TWEEN.Tween(this.lightSpeedStars[2])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28475 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[2])
                .to({ x1: width / 2 - height / 10, y1: height / 9 * 4 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28475 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[2])
                .to({ x2: width / 2 - height / 10, y2: height / 9 * 4 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28475 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[2])
                .to({ x2: 6, y2: height / 9 * 4 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28475 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[2])
                .to({ x1: 6, y1: height / 9 * 4 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28825 + i * 700);


            //ls 4 - rechts
            new TWEEN.Tween(this.lightSpeedStars[3])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28575 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[3])
                .to({ x1: width / 2 + height / 10, y1: height / 9 * 4 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28575 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[3])
                .to({ x2: width / 2 + height / 10, y2: height / 9 * 4 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28575 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[3])
                .to({ x2: width - 6, y2: height / 9 * 4 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28575 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[3])
                .to({ x1: width - 6, y1: height / 9 * 4 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28925 + i * 700);


            //ls 5 - weiter oben rechts
            new TWEEN.Tween(this.lightSpeedStars[4])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28675 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[4])
                .to({ x1: width / 2 + height / 20, y1: height / 9 * 4 - pos }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28675 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[4])
                .to({ x2: width / 2 + height / 20, y2: height / 9 * 4 - pos }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28675 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[4])
                .to({ x2: width / 3 * 2, y2: height / 33 + 14 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28675 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[4])
                .to({ x1: width / 3 * 2, y1: height / 33 + 14 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29025 + i * 700);


            //ls 6 - weiter unten rechts
            new TWEEN.Tween(this.lightSpeedStars[5])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28775 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[5])
                .to({ x1: width / 2 + height / 20, y1: height / 9 * 4 + pos }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28775 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[5])
                .to({ x2: width / 2 + height / 20, y2: height / 9 * 4 + pos }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28775 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[5])
                .to({ x2: width / 3 * 2, y2: height / 6 * 5 - 6 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28775 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[5])
                .to({ x1: width / 3 * 2, y1: height / 6 * 5 - 6 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29125 + i * 700);


            //ls 7 - weiter oben links
            new TWEEN.Tween(this.lightSpeedStars[6])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28875 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[6])
                .to({ x1: width / 2 - height / 20, y1: height / 9 * 4 - pos }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28875 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[6])
                .to({ x2: width / 2 - height / 20, y2: height / 9 * 4 - pos }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28875 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[6])
                .to({ x2: width / 3, y2: height / 33 + 14 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28875 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[6])
                .to({ x1: width / 3, y1: height / 33 + 14 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29225 + i * 700);


            //ls 8 - weiter unten links
            new TWEEN.Tween(this.lightSpeedStars[7])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28975 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[7])
                .to({ x1: width / 2 - height / 20, y1: height / 9 * 4 + pos }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28975 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[7])
                .to({ x2: width / 2 - height / 20, y2: height / 9 * 4 + pos }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(28975 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[7])
                .to({ x2: width / 3, y2: height / 6 * 5 - 6 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(28975 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[7])
                .to({ x1: width / 3, y1: height / 6 * 5 - 6 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29325 + i * 700);


            //ls 9 - unten rechts
            new TWEEN.Tween(this.lightSpeedStars[8])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29075 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[8])
                .to({ x1: width / 2 + pos, y1: height / 9 * 4 + height / 20 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29075 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[8])
                .to({ x2: width / 2 + pos, y2: height / 9 * 4 + height / 20 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29075 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[8])
                .to({ x2: width / 7 * 6, y2: height / 7 * 6 + 17 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29075 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[8])
                .to({ x1: width / 7 * 6, y1: height / 7 * 6 + 17 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29425 + i * 700);


            //ls 10 - oben rechts
            new TWEEN.Tween(this.lightSpeedStars[9])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29175 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[9])
                .to({ x1: width / 2 + pos, y1: height / 9 * 4 - height / 20 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29175 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[9])
                .to({ x2: width / 2 + pos, y2: height / 9 * 4 - height / 20 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29175 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[9])
                .to({ x2: width / 7 * 6, y2: height / 8 - 17 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29175 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[9])
                .to({ x1: width / 7 * 6, y1: height / 8 - 17 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29525 + i * 700);
        }

        for (let i = 0; i < 26; i++) {

            //ls 11 - unten links
            new TWEEN.Tween(this.lightSpeedStars[10])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29275 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[10])
                .to({ x1: width / 2 - pos, y1: height / 9 * 4 + height / 20 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29275 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[10])
                .to({ x2: width / 2 - pos, y2: height / 9 * 4 + height / 20 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29275 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[10])
                .to({ x2: width / 7, y2: height / 7 * 6 + 17 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29275 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[10])
                .to({ x1: width / 7, y1: height / 7 * 6 + 17 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29625 + i * 700);


            //ls 12 - oben links
            new TWEEN.Tween(this.lightSpeedStars[11])
                .to({ red: this.red, green: this.green, blue: this.blue, col: 255 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29375 + i * 700);

            //reset pos
            new TWEEN.Tween(this.lightSpeedStars[11])
                .to({ x1: width / 2 - pos, y1: height / 9 * 4 - height / 20 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29375 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[11])
                .to({ x2: width / 2 - pos, y2: height / 9 * 4 - height / 20 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(29375 + i * 700);

            //movement
            new TWEEN.Tween(this.lightSpeedStars[11])
                .to({ x2: width / 7, y2: height / 8 - 17 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29375 + i * 700);

            new TWEEN.Tween(this.lightSpeedStars[11])
                .to({ x1: width / 7, y1: height / 8 - 17 }, 350)
                .easing(TWEEN.Easing.Linear.None)
                .start(29725 + i * 700);
        }


        for (let i = 0; i < this.lightSpeedStars.length; i++) {
            new TWEEN.Tween(this.lightSpeedStars[i])
                .to({ col: 0 }, 0)
                .start(47423);
        }
    }

    animateClap() {

        //Phase 1
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < this.stars.length; j++) {
                new TWEEN.Tween(this.stars[j])
                    .to({ col: 255 }, 300)
                    .start(633 + i * 1199);
            }
        }

        for (let j = 1; j < this.stars.length; j++) {
            new TWEEN.Tween(this.stars[j])
                .to({ col: 255 }, 300)
                .start(7830);
        }

        //Phase 2
        for (let i = 0; i < 14; i++) {
            for (let j = 0; j < 4; j++) {
                new TWEEN.Tween(this.stars[j])
                    .to({ col: 255 }, 300)
                    .start(10232 + i * 1199);
            }
        }

        for (let i = 0; i < 14; i++) {
            for (let j = 4; j < 8; j++) {
                new TWEEN.Tween(this.stars[j])
                    .to({ col: 255 }, 300)
                    .start(11431 + i * 1199);
            }
        }


        for (let i = 0; i < 13; i++) {
            for (let j = 8; j < this.stars.length; j++) {
                new TWEEN.Tween(this.stars[j])
                    .to({ col: 255 }, 300)
                    .start(12630 + i * 1199);
            }
        }

        //Phase 3
        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < this.lightSpeedStars.length; j++) {
                new TWEEN.Tween(this.lightSpeedStars[j])
                    .to({ col: 255 }, 300)
                    .start(29430 + i * 1199);
            }
        }
    }


    animateColors() {

        let possible = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        let used = [];

        //select random star
        let num = 0;

        new TWEEN.Tween(this.stars[num])
            .to({ red: this.rsRed, green: this.rsGreen, blue: this.rsBlue }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9733);

        //manage used stars
        used.push(num);


        //select random star
        num = 1;

        new TWEEN.Tween(this.stars[num])
            .to({ red: this.rsRed, green: this.rsGreen, blue: this.rsBlue }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(10025);

        //manage used stars
        used.push(num);


        //red Stars
        for (let i = 0; i < 32; i++) {

            //select random star
            let tmp = round(random(0, possible.length - 1));
            while (this.contains(tmp, used)) {
                tmp = round(random(0, possible.length - 1));
            }
            let num = possible[tmp];

            new TWEEN.Tween(this.stars[num])
                .to({ red: this.rsRed, green: this.rsGreen, blue: this.rsBlue }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(10931 + i * (10931 - 9733));

            new TWEEN.Tween(this.lightSpeedStars[num])
                .to({ red: this.rsRed, green: this.rsGreen, blue: this.rsBlue }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(10931 + i * (10931 - 9733));

            //manage used stars
            used.push(num);
            if (used.length == 6) {
                used = [];
                possible = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            }


            //select random star
            tmp = round(random(0, possible.length - 1));
            while (this.contains(tmp, used)) {
                tmp = round(random(0, possible.length - 1));
            }
            num = possible[tmp];

            new TWEEN.Tween(this.stars[num])
                .to({ red: this.rsRed, green: this.rsGreen, blue: this.rsBlue }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(11226 + i * (11226 - 10025));

            new TWEEN.Tween(this.lightSpeedStars[num])
                .to({ red: this.rsRed, green: this.rsGreen, blue: this.rsBlue }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(11226 + i * (11226 - 10025));

            //manage used stars
            used.push(num);
            if (used.length == 6) {
                used = [];
                possible = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            }
        }

        //green star 1
        for (let i = 0; i < 8; i++) {

            //select random star
            let tmp = round(random(0, possible.length - 1));
            while (this.contains(tmp, used)) {
                tmp = round(random(0, possible.length - 1));
            }
            let num = possible[tmp];

            new TWEEN.Tween(this.lightSpeedStars[num])
                .to({ red: this.gsRed, green: this.gsGreen, blue: this.gsBlue }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(30731 + i * (33129 - 30731));

            //manage used stars
            used.push(num);
            if (used.length == 6) {
                used = [];
                possible = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            }
        }

        //green star 2
        for (let i = 0; i < 4; i++) {

            //select random star
            let tmp = round(random(0, possible.length - 1));
            while (this.contains(tmp, used)) {
                tmp = round(random(0, possible.length - 1));
            }
            let num = possible[tmp];

            new TWEEN.Tween(this.lightSpeedStars[num])
                .to({ red: this.gsRed, green: this.gsGreen, blue: this.gsBlue }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(31030 + i * (35831 - 31030));

            //manage used stars
            used.push(num);
            if (used.length == 6) {
                used = [];
                possible = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            }
        }

    }

    contains(num, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] == num) {
                return true;
            }
        }
        return false;
    }
}