const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let x = 10
let y = 10
let x1 = 100
let y1 = 100
let moveX = 2
let moveY = 2
let accX = 0
let accY = 0
let accZ = 0


function gameLoop(){


    let ac1 = new Accelerometer({frequency: 60});
    ac1.addEventListener('reading', () => {
      
        document.getElementById("accele").innerHTML = Math.floor(accelerometer.x) + "<br>" + Math.floor(accelerometer.y) + "<br>" + Math.floor(accelerometer.z)
    })
    ac1.start();
    

    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, canvas.width,canvas.height);


    ctx.fillStyle = 'red';
    ctx.fillRect(x,y ,100,100);

    if(x + 100 + moveX >= canvas.width || x + moveX <= 0){
        moveX *= -1
    }

    if(y+ 100 + moveY >= canvas.height || y + moveY <= 0){
        moveY *= -1;
    }

    x += moveX
    y += moveY 
   

    }


   


setInterval (gameLoop,1000/60)
