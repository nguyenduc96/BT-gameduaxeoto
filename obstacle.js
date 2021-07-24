class Obstacle {
    image;
    x;
    y;
    width;
    heigth;

    constructor(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.heigth = height;
    }

    

    drawObstacle() {
        ctx.fillRect(this.image, this.x, this.y, this.width, this.heigth);
        ctx.fill();
    }
    moveDown(){
        if (this.y<250){
            this.y +=20;
        }
        else {
            this.y +=50;
        }
    }
}