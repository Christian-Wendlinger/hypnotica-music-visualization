class MeasureDistance {

    constructor() {
        this.x = width / 3 + width / 20;
        this.w = width / 3 - width / 10;
        this.h = height / 23 * 2 * 0.75 * 0.75;
        this.y = height / 11 * 10.15 - this.h / 2;

        this.distance1 = 0;
        this.distance1Col = 0;

        this.distance2 = (width / 3 - width / 10) * 0.05;
        this.distance2Col = 0;

        this.distance3 = (width / 3 - width / 10) * 0.2;
        this.distance3Col = 0;

        this.init();
    }

    show() {
        //slider
        noStroke();
        fill("#006837");
        rect(this.x, this.y, this.w, this.h);

        //traveled
        fill(140, 198, 63, this.distance1Col);
        rect(this.x, this.y, this.distance1, this.h);

        fill(140, 198, 63, this.distance2Col);
        rect(this.x, this.y, this.distance2, this.h);

        fill(140, 198, 63, this.distance3Col);
        rect(this.x, this.y, this.distance3, this.h);

        //outline
        stroke("#b3b3b3");
        strokeWeight(2);
        noFill();
        rect(this.x, this.y, this.w, this.h);
    }

    init() {
        this.x = width / 3 + width / 20;
        this.w = width / 3 - width / 10;
        this.h = height / 23 * 2 * 0.75 * 0.75;
        this.y = height / 11 * 10.15 - this.h / 2;

        this.distance1 = 0;
        this.distance1Col = 0;

        this.distance2 = (width / 3 - width / 10) * 0.05;
        this.distance2Col = 0;

        this.distance3 = (width / 3 - width / 10) * 0.2;
        this.distance3Col = 0;

        //phase 1
        new TWEEN.Tween(this)
            .to({ distance1Col: 255 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(0);

        new TWEEN.Tween(this)
            .to({ distance1: (width / 3 - width / 10) * 0.05 }, 9631)
            .easing(TWEEN.Easing.Linear.None)
            .start(0);

        //phase 2
        new TWEEN.Tween(this)
            .to({ distance2Col: 255 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9631);

        new TWEEN.Tween(this)
            .to({ distance2: (width / 3 - width / 10) * 0.2 }, 28834 - 9631)
            .easing(TWEEN.Easing.Linear.None)
            .start(9631);

        //phase 3
        new TWEEN.Tween(this)
            .to({ distance3Col: 255 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(28834);


        new TWEEN.Tween(this)
            .to({ distance3: (width / 3 - width / 10) }, 47423 - 28834)
            .easing(TWEEN.Easing.Linear.None)
            .start(28834);



    }
}