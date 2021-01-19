const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let xRec = 10
let yRec= 10

let moveX = 2
let moveY = 2
let accX = 0
let accY = 0
let accZ = 0

let debugText = new Text();
debugText = document.getElementById('debug');

function startup() {
    
    
    let accelerometer = new Accelerometer({
        frequency: 60
    });
     
   accelerometer.addEventListener('reading', e => {
        document.getElementById("accele").innerHTML = Math.floor(accelerometer.x) + "<br>" + Math.floor(accelerometer.y) + "<br>" + Math.floor(accelerometer.z)
        accX = accelerometer.x
        accY = accelerometer.y
        accZ = accelerometer.z
   
   
    });
   
   accelerometer.start();
}
document.addEventListener("DOMContentLoaded", startup);

function gameLoop(){

    
    debugText.textContent = "Debug console2 : ";
    debugText.textContent += "xAcc : " + Math.round(accX) + "  yAcc : " + Math.round(accY) + "  zAcc : " + Math.round(accZ)

    

    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, canvas.width,canvas.height);


    ctx.fillStyle = 'red';
    ctx.fillRect(xRec,yRec ,100,100);

    if(x + 100 + moveX >= canvas.width || x + moveX <= 0){
        moveX *= -1
    }

    if(y+ 100 + moveY >= canvas.height || y + moveY <= 0){
        moveY *= -1;
    }

    xRec += moveX * accX
    yRec += moveY * accY
   

    


    }


   


setInterval (gameLoop,1000/60)
