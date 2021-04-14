class RedLight {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.w = width;
        this.h = height;

        this.col = 0;

        this.init();
    }

    show() {
        noStroke();
        fill(255, 0, 0, this.col);
        rect(this.x, this.y, this.w, this.h);
    }

    init() {
        this.x = 0;
        this.y = 0;
        this.w = width;
        this.h = height;

        this.col = 0;
        
        //transition to phase 2 
        new TWEEN.Tween(this)
            .to({ col: 255 }, 300)
            .easing(TWEEN.Easing.Linear.None)
            .repeat(1)
            .yoyo()
            .start(8427);


        new TWEEN.Tween(this)
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(9075);


        //transition to phase 3 
        new TWEEN.Tween(this)
            .to({ col: 255 }, 300)
            .easing(TWEEN.Easing.Linear.None)
            .repeat(1)
            .yoyo()
            .start(27625);

        new TWEEN.Tween(this)
            .to({ col: 0 }, 0)
            .easing(TWEEN.Easing.Linear.None)
            .start(28275);
    }
}