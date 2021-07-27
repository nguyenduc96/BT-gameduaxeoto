class Obstacle {
    x;
    y;
    width;
    heigth;

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = height;
    }

    drawObstacle() {
        ctx.fillRect(this.x, this.y, this.width, this.heigth);
        ctx.fill();
    }

    moveDown() {
        if (this.y < 200) {
            this.y += Math.round(Math.random()*10);
        } else if(this.y < 520) {
            this.y += Math.round(Math.random()*20);
        }
        else {
            this.y = 0;
            this.x = Math.round(Math.random()*330);
        }
    }
}