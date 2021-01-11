const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let x = 10
let y = 10
let x1 = 100
let y1 = 100
let moveX = 2
let moveY = 2

function gameLoop(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0, canvas.width,canvas.height);


    ctx.fillStyle = 'red';
    ctx.fillRect(x,y,100,100);

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
setInterval (gameLoop2,1000/60)