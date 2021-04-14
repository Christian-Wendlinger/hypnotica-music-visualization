class Radar {

    constructor(animations) {
        this.x = width / 3 * 2;
        this.y = height / 11 * 10.15;
        this.r = height / 16;

        this.rm = 4;

        this.rs = 0;

        this.rd1X = -10;
        this.rd1Y = 0;
        this.rd1R = 2;

        this.rd2X = -10;
        this.rd2Y = 0;
        this.rd2R = 2;

        this.rd1Col = 255;
        this.rd2Col = 255;

        this.gd1X = -10;
        this.gd1Y = 0;
        this.gd1R = 2;

        this.gd2X = -10;
        this.gd2Y = 0;
        this.gd2R = 2;

        this.gd1Col = 255;
        this.gd2Col = 255;

        this.init(animations);
    }

    show() {

        //background
        noStroke();
        fill("#006837");
        circle(this.x, this.y, this.r);

        //achses
        stroke("#333333");
        strokeWeight(1);
        line(this.x, this.y - this.r, this.x, this.y + this.r);
        line(this.x - this.r, this.y, this.x + this.r, this.y);

        //ship position
        noStroke();
        fill(0);
        circle(this.x, this.y, this.rm);

        //scan signal
        noFill();
        stroke(0);
        strokeWeight(0.25);
        circle(this.x, this.y, this.rs);

        //outline
        stroke("#b3b3b3");
        strokeWeight(2);
        noFill();
        circle(this.x, this.y, this.r);


        //red dots
        noStroke();
        fill(255, 0, 0, this.rd1Col);
        circle(this.rd1X, this.rd1Y, this.rd1R);

        fill(255, 0, 0, this.rd2Col);
        circle(this.rd2X, this.rd2Y, this.rd2R);

        //green dots
        fill(0, 255, 0, this.gd1Col);
        circle(this.gd1X, this.gd1Y, this.gd1R);

        fill(0, 255, 0, this.gd2Col);
        circle(this.gd2X, this.gd2Y, this.gd2R);
    }


    init(animations) {
        this.x = width / 3 * 2;
        this.y = height / 11 * 10.15;
        this.r = height / 16;

        this.rm = 4;

        this.rs = 0;

        this.rd1X = -10;
        this.rd1Y = 0;
        this.rd1R = 2;

        this.rd2X = -10;
        this.rd2Y = 0;
        this.rd2R = 2;

        this.rd1Col = 255;
        this.rd2Col = 255;

        this.gd1X = -10;
        this.gd1Y = 0;
        this.gd1R = 2;

        this.gd2X = -10;
        this.gd2Y = 0;
        this.gd2R = 2;

        this.gd1Col = 255;
        this.gd2Col = 255;

        for (let i = 0; i < animations.length; i++) {
            const e = animations[i];

            new TWEEN.Tween(this)
                .to(e.to, e.dur)
                .easing(TWEEN.Easing.Linear.None)
                .start(e.start);
        }

        for (let i = 0; i < 32; i++) {

            //generate random red dots, next to the black dot
            let x1 = random(this.x - 10.009, this.x + 10.009);
            while (!(x1 <= this.x - 6 || x1 >= this.x + 6)) {
                x1 = random(this.x - 10.009, this.x + 10.009);
            }
            let x2 = random(this.x - 21.643, this.x + 21.643);
            while (!(x2 <= this.x - 6 || x2 >= this.x + 6)) {
                x2 = random(this.x - 21.643, this.x + 21.643);
            }

            let r1 = round(random(0, 1));
            let r2 = round(random(0, 1));

            let y1 = r1 == 0 ? this.y + Math.sqrt(Math.pow(10.009, 2) - Math.pow(x1 - this.x, 2)) : this.y - Math.sqrt(Math.pow(10.009, 2) - Math.pow(x1 - this.x, 2));
            let y2 = r2 == 0 ? this.y - Math.sqrt(Math.pow(21.643, 2) - Math.pow(x2 - this.x, 2)) : this.y + Math.sqrt(Math.pow(21.643, 2) - Math.pow(x2 - this.x, 2));

            //show red dots
            new TWEEN.Tween(this)
                .to({ rd1X: x1, rd1Y: y1 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(9733 + i * (10931 - 9733));

            new TWEEN.Tween(this)
                .to({ rd2X: x2, rd2Y: y2 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(10025 + i * (11226 - 10025));

            //fade out red dots
            new TWEEN.Tween(this)
                .to({ rd1Col: 0 }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(9733 + i * (10931 - 9733));

            new TWEEN.Tween(this)
                .to({ rd2Col: 0 }, 1000)
                .easing(TWEEN.Easing.Linear.None)
                .start(10025 + i * (11226 - 10025));
        }

        for (let i = 0; i < 8; i++) {
            //generate random green dot 1, next to the black dot
            let x3 = random(this.x - 29.966, this.x + 29.966);
            while (!(x3 <= this.x - 6 || x3 >= this.x + 6)) {
                x3 = random(this.x - 29.966, this.x + 29.966);
            }

            let r3 = round(random(0, 1));

            let y3 = r3 == 0 ? this.y - Math.sqrt(Math.pow(29.966, 2) - Math.pow(x3 - this.x, 2)) : this.y + Math.sqrt(Math.pow(29.966, 2) - Math.pow(x3 - this.x, 2));

            //show green dot 1
            new TWEEN.Tween(this)
                .to({ gd1X: x3, gd1Y: y3 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(30731 + i * (33129 - 30731));

            //fade out green dot 1
            new TWEEN.Tween(this)
                .to({ gd1Col: 0 }, 1500)
                .easing(TWEEN.Easing.Linear.None)
                .start(30731 + i * (33129 - 30731));
        }

        for (let i = 0; i < 4; i++) {
            //generate random green dot 2, next to the black dot

            let x4 = random(this.x - 42.015, this.x + 42.015);
            while (!(x4 <= this.x - 6 || x4 >= this.x + 6)) {
                x4 = random(this.x - 42.015, this.x + 42.015);
            }

            let r4 = round(random(0, 1));

            let y4 = r4 == 0 ? this.y - Math.sqrt(Math.pow(42.015, 2) - Math.pow(x4 - this.x, 2)) : this.y + Math.sqrt(Math.pow(42.015, 2) - Math.pow(x4 - this.x, 2));

            //show green dot 2
            new TWEEN.Tween(this)
                .to({ gd2X: x4, gd2Y: y4 }, 0)
                .easing(TWEEN.Easing.Linear.None)
                .start(31030 + i * (35831 - 31030));

            //fade out green dot 2
            new TWEEN.Tween(this)
                .to({ gd2Col: 0 }, 1500)
                .easing(TWEEN.Easing.Linear.None)
                .start(31030 + i * (35831 - 31030));
        }
    }

}