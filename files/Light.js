class Light {

    constructor() {
        this.x = width / 3 - height / 16;
        this.y = height / 11 * 10.15 - height / 16;
        this.w = height / 8;
        this.h = height / 8;

        this.lx1 = this.x;
        this.ly1 = this.y + this.h / 2;
        this.lx2 = this.lx1 + this.w - 1;

        this.ly2 = this.y + this.h / 2 - height / 800;
        this.ly3 = this.y + this.h / 2 + height / 800;


        this.col1 = 255;
        this.col2 = 0;
        this.col3 = 0;

        this.init();
    }

    show() {

        //background
        noStroke();
        fill("#006837");
        rect(this.x, this.y, this.w, this.h);

        //middle measure line
        stroke(140, 198, 63, this.col1);
        strokeWeight(3);
        line(this.lx1, this.ly1, this.lx2, this.ly1);

        //top measure line
        stroke(140, 198, 63, this.col2);
        strokeWeight(3);
        line(this.lx1, this.ly2, this.lx2, this.ly2);

        //bottom measure line
        stroke(140, 198, 63, this.col3);
        strokeWeight(3);
        line(this.lx1, this.ly3, this.lx2, this.ly3);

        //outline
        stroke("#b3b3b3");
        strokeWeight(2);
        noFill();
        rect(this.x, this.y, this.w, this.h);
    }

    init() {
        this.x = width / 3 - height / 16;
        this.y = height / 11 * 10.15 - height / 16;
        this.w = height / 8;
        this.h = height / 8;

        this.lx1 = this.x;
        this.ly1 = this.y + this.h / 2;
        this.lx2 = this.lx1 + this.w - 1;

        this.ly2 = this.y + this.h / 2 - height / 800;
        this.ly3 = this.y + this.h / 2 + height / 800;


        this.col1 = 255;
        this.col2 = 0;
        this.col3 = 0;

        for (let i = 0; i < 9; i++) {
            //movement measure line

            //to top
            new TWEEN.Tween(this)
                .to({ ly1: this.ly2 }, 500)
                .start(28833 + i * 2000);

            new TWEEN.Tween(this)
                .to({ col1: 0 }, 0)
                .start(29333 + i * 2000);

            new TWEEN.Tween(this)
                .to({ col2: 255 }, 0)
                .start(29333 + i * 2000);

            //to bottom
            new TWEEN.Tween(this)
                .to({ ly2: this.ly3 }, 1000)
                .start(29333 + i * 2000);

            new TWEEN.Tween(this)
                .to({ col2: 0 }, 0)
                .start(30333 + i * 2000);

            new TWEEN.Tween(this)
                .to({ col3: 255 }, 0)
                .start(30333 + i * 2000);

            //to middle
            new TWEEN.Tween(this)
                .to({ ly3: this.ly1 }, 500)
                .start(30333 + i * 2000);

            new TWEEN.Tween(this)
                .to({ col3: 0 }, 0)
                .start(30833 + i * 2000);

            //reset
            new TWEEN.Tween(this)
                .to({ ly1: this.ly1 }, 0)
                .start(30833 + i * 2000);

            new TWEEN.Tween(this)
                .to({ col1: 255 }, 0)
                .start(30833 + i * 2000);
        }
    }
}