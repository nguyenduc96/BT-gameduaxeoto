let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
let car = new Car(160, 450, 50, 50);
let obstacles = [];
let point = 0;
let isGamerOver = false;

function obStacle() {
    for (let i = 0; i < 8; i++) {
        let x = Math.round(Math.random() * 320);
        let y = Math.round(Math.random() * 250);
        let obstacle = new Obstacle(x, y, 30, 30, 0);
        obstacles.push(obstacle);
    }
}

obStacle();

function drawMultiObstacle() {
    for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].drawObstacle(ctx);
    }
}

function moveCar() {
    switch (event.keyCode) {
        case 37: {
            if (car.x >= 15) {
                car.moveLeft();
                break;
            }
        }
        case 39: {
            if (car.x + 55 <= 350) {
                car.moveRight();
                break;
            }
        }
    }
    clearCanvas();
    car.drawCar(ctx);
    drawMultiObstacle();
}

function moveObstacle(obstacle) {
    if (checkCollision(obstacle) === true){
        location.reload();
        alert('game over')
        clearInterval(intervalId)
    }
    else {
        obstacle.moveDown();
        clearCanvas();
        car.drawCar(ctx);
        drawMultiObstacle(ctx);
        plusPoint(obstacle);
    }

}

function moveMulti() {
    for (let obstacle of obstacles) {
        moveObstacle(obstacle);
    }
    clearCanvas();
    car.drawCar();
    drawMultiObstacle();
}

function clearCanvas() {
    ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
}

function plusPoint(obstacle) {
    if (obstacle.y>=519){
        document.getElementById('point').innerHTML = point++;
    }
}

function checkCollision(obstacle) {
    if ((car.x <= (obstacle.x + 30)) && ((obstacle.x + 30) <= (car.x + car.width)) &&
        (car.y <= (obstacle.y + 30)) && ((obstacle.y + 30) <= (car.y + car.height)) ||
        ((car.x <= obstacle.x - 30) && (obstacle.x<= car.x + car.width)) &&
        ((car.y <= obstacle.y- 30) && (obstacle.y <= car.y + car.height)) ||
        ((car.x <= obstacle.x - 30) && (obstacle.x <= car.x + car.width)) &&
        ((car.y <= obstacle.y + 30) && (obstacle.y + 30 <=car.y + car.height))){
        return  true;
    }
    return false;
}

function gamePlay() {
    if (!isGamerOver) {
        clearCanvas();
        car.drawCar();
        drawMultiObstacle();
    }
}

window.addEventListener("keydown", moveCar);
setInterval(moveMulti, 200);
gamePlay();