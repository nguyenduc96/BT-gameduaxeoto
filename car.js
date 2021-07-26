class Car {
    width;
    height;
    x;
    y;


    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };

    drawCar() {
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }

    moveLeft() {
        this.x -= 20;
    }

    moveRight() {
        this.x += 20;
    }
}
