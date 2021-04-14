class Planet {

    constructor(red, green, blue) {
        this.x = width / 2 + 5;
        this.y = height / 2;
        this.r = 1;

        this.col1 = 0;
        this.col2 = 0;

        this.red = red;
        this.green = green;
        this.blue = blue;

        this.init();
    }

    show() {
        //glow
        noStroke();
        fill(this.red, this.green, this.blue, this.col2);
        circle(this.x, this.y, this.r + 3);


        //planet
        fill(this.red, this.green, this.blue, this.col1);
        circle(this.x, this.y, this.r);
    }

    init() {
        this.x = width / 2 + 5;
        this.y = height / 2;
        this.r = 1;

        this.col1 = 0;
        this.col2 = 0;

        //colors
        new TWEEN.Tween(this)
            .to({ col1: 255 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(47423);

        new TWEEN.Tween(this)
            .to({ col2: 33 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(47423);

        //position and size
        const size = 270 / 1080 * height;
        new TWEEN.Tween(this).
            to({ x: width / 3 * 2, r: size }, 150)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .start(47423);
    }
}