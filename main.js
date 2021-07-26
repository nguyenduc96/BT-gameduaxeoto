let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
let car = new Car(160, 450, 50, 50);
let obstacles = [];
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
    obstacle.moveDown();
    clearCanvas();
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


function gamePlay() {
    if (!isGamerOver) {
        clearCanvas();
        car.drawCar();
        drawMultiObstacle();
    } else {
    }
}

window.addEventListener("keydown", moveCar);
setInterval(moveMulti, 1000);
gamePlay();