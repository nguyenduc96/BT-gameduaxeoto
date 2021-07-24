let c = document.getElementById('myCanvas');
let ctx = c.getContext('2d');
let car = new Car("oto.jpg",150, 450, 50, 50);
let obstacle = new Obstacle( "speed.png",(Math.round(Math.random()* 320)), 10, 30, 30);
let isGamerOver = false;


function moveCar() {
    switch (event.keyCode) {
        case 37: {
            if (car.x > 0){
                car.moveLeft();
                break;
            }
        }
        // case  38: {
        //     if (car.y >0){
        //         car.moveUp();
        //         break;
        //     }
        // }
        case 39: {
            if (car.x +50 < 350){
                car.moveRight();
                break;
            }
        }
        // case 40: {
        //     if (car.y + 50 < 500){
        //         car.moveDown();
        //         break;
        //     }
        // }
    }
    clearCanvas();
    car.drawCar(ctx);
    obstacle.drawObstacle();
}



function moveObstacle() {
    obstacle.moveDown();
    clearCanvas()
    car.drawCar();
    obstacle.drawObstacle();
}

function clearCanvas() {
    ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
}

function isCollision() {
    if (car.x <=10 || car.x + 50 >= 340){
        console.log('thua')
    }
}

isCollision()
car.drawCar(ctx);
obstacle.drawObstacle(ctx);
window.addEventListener("keydown", moveCar);
setInterval(moveObstacle, 1000)