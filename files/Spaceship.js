class Spaceship {

    constructor() {
        this.x = width / 2;
        this.y = height * 5 - height / 3.3;
        this.r = height * 4 - height / 8;
    }

    show() {
        noStroke();

        //console
        fill("#1a1a1a");
        circle(this.x, this.y, this.r);
    }
}