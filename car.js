class Car {
    image;
    width;
    height;
    x;
    y;

    constructor(image, x, y, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };

    drawCar() {
        ctx.fillRect(this.image, this.x, this.y, this.width, this.height);
        ctx.fill();
    }

    moveLeft() {
        this.x -= 20;
    }

    moveRight() {
        this.x += 20;
    }

    moveUp() {
        this.y -= 20;
    }

    moveDown() {
        this.y += 20;
    }

}