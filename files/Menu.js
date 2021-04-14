class Menu {

    constructor() {
        this.x = width / 2 - width / 8;
        this.y = height / 4;
        this.w = width / 4;
        this.h = height / 3;

        this.paused = true;
        this.info = true;
        this.active = true;
        this.infoCol = 255;


        this.barX = width / 48;
        this.barY = height / 30;
        this.barW = width / 16;
        this.barH = height / 25;
        this.barR = height / 50;

        this.barMov = this.barX;

        this.hoverTermoVison = false;
        this.hoverRestart = false;
        this.hoverNightvision = false;
        this.isOver = 0;

        this.activeNightVision = false;
        this.activeTermoVision = false;
    }

    show() {
        //check if any button is hovered
        if (!this.info) {
            if (this.paused && this.active && mouseX > this.x && mouseX < this.x + this.w) {
                if (mouseY > this.y + this.h / 3 && mouseY < this.y + this.h / 3 * 2) {
                    this.hoverNightvision = true;
                    this.hoverRestart = false;
                    this.hoverTermoVison = false;
                } else if (mouseY > this.y + this.h / 3 * 2 && mouseY < this.y + this.h) {
                    this.hoverRestart = true;
                    this.hoverNightvision = false;
                    this.hoverTermoVison = false;
                } else if (mouseY > this.y && mouseY < this.y + this.h / 3) {
                    this.hoverTermoVison = true;
                    this.hoverNightvision = false;
                    this.hoverRestart = false;
                } else {
                    this.hoverNightvision = false;
                    this.hoverRestart = false;
                    this.hoverTermoVison = false;
                }
            } else {
                this.hoverNightvision = false;
                this.hoverRestart = false;
                this.hoverTermoVison = false;
            }
        }


        //menu slider top left
        stroke(179, 179, 179);
        strokeWeight(4);
        noFill();
        rect(this.barX, this.barY, this.barW, this.barH);
        circle(this.barX, this.barY + this.barH / 2, this.barR);
        circle(this.barX + this.barW, this.barY + this.barH / 2, this.barR);

        noStroke();
        fill(0, 104, 55);
        rect(this.barX, this.barY, this.barW, this.barH);
        circle(this.barX, this.barY + this.barH / 2, this.barR);
        circle(this.barX + this.barW, this.barY + this.barH / 2, this.barR);

        //menu slider active side
        if (!this.active) {
            fill("#1a1a1a");
            circle(this.barMov = max(this.barMov -= 50, this.barX), this.barY + this.barH / 2, this.barR);
        } else {
            fill(140, 198, 63);
            circle(this.barMov = this.barX + min(this.barMov += 50, this.barW), this.barY + this.barH / 2, this.barR);
        }

        //menu
        if (this.paused && this.active && !this.info) {
            //background
            stroke(179, 179, 179);
            strokeWeight(3.5);
            fill(0, 104, 55);
            rect(this.x, this.y, this.w, this.h);

            //Thermo vision button
            if (this.hoverTermoVison) {
                fill(140, 198, 63);
                noStroke();
                rect(this.x, this.y, this.w, this.h / 3);
            }

            fill(255, 255, 255);
            noStroke();
            textSize(height / 14);
            textAlign(CENTER);
            text("WÄRMEBILD", this.x + 7, this.y + this.h / 23, this.w, this.h);


            //Night vision button
            if (this.hoverNightvision) {
                fill(140, 198, 63);
                noStroke();
                rect(this.x, this.y + this.h / 3, this.w, this.h / 3);
            }

            fill(255, 255, 255);
            noStroke();
            textSize(height / 14);
            textAlign(CENTER);
            text("NACHTSICHT", this.x + 7, this.y + this.h / 3 + this.h / 23, this.w, this.h);

            //Restart button
            if (this.hoverRestart) {
                fill(140, 198, 63);
                noStroke();
                rect(this.x, this.y + this.h / 3 * 2, this.w, this.h / 3);
            }
            fill(255, 255, 255);
            noStroke();
            textSize(height / 14);
            textAlign(CENTER);
            text("NEUSTART", this.x + 7, this.y + this.h / 3 * 2 + this.h / 23, this.w, this.h);
        }

        //show info at first start
        if (this.infoCol != 0) {

            //middle
            stroke(179, 179, 179, this.infoCol);
            strokeWeight(3.5);
            fill(0, 104, 55, this.infoCol);
            rect(this.x, this.y, this.w, this.h);

            fill(255, 255, 255, this.infoCol);
            noStroke();
            textSize(height / 14);
            textAlign(LEFT);
            text("Space um \nzu starten / \npausieren", this.x + this.w / 7.5, this.y + this.h / 10.5, this.w, this.h);


            //top left
            stroke(179, 179, 179, this.infoCol);
            strokeWeight(3.5);
            fill(0, 104, 55, this.infoCol);
            rect(3, height / 8, this.w * 1.08, this.h * 1.6);

            fill(255, 255, 255, this.infoCol);
            noStroke();
            textSize(height / 14);
            textAlign(LEFT);
            text("Menü ein- / ausblenden, \ndas beim pausieren \ngeöffnet wird", 3 + this.w / 8, height / 8 + this.h / 8, this.w, this.h * 2);



            //right
            stroke(179, 179, 179, this.infoCol);
            strokeWeight(3.5);
            fill(0, 104, 55, this.infoCol);
            rect(width - this.w * 1.08 - 6, height / 8, this.w * 1.08, this.h * 2.35);

            fill(255, 255, 255, this.infoCol);
            noStroke();
            textSize(height / 14);
            textAlign(LEFT);
            text("Klick auf Menüpunkt aktiviert / deaktiviert Modus und startet Animation neu", width - this.w - 6 + this.w / 10, height / 8 + this.h / 8, this.w * 0.9, this.h * 3);

            if (!this.info) {
                this.infoCol = max(0, this.infoCol - 12);
            }
        }
    }
}