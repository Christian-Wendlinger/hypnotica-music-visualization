class LightSpeedStar {

    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;

        this.red = 0;
        this.green = 0;
        this.blue = 0;
        this.col = 0;
    }

    show() {
        stroke(this.red, this.green, this.blue, this.col);
        strokeWeight(6 / 1080 * height);
        line(this.x1, this.y1, this.x2, this.y2);
    }
}