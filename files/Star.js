class Star {
    constructor(x, y, r, red, green, blue) {
        this.x = x;
        this.y = y;
        this.r = r;

        this.red = red;
        this.green = green;
        this.blue = blue;
        this.col = 0;
    }

    show() {
        noStroke();
        fill(this.red, this.green, this.blue, this.col);
        circle(this.x, this.y, this.r);
    }
}