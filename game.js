const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let xRec = canvas.width/2 -50
let yRec= canvas.height/2 -50
let colorRed = 0
let colorBlue = 0
let colorGreen = 0

var ongoingTouches = [];

debugText = document.getElementById('debug');


     
canvas.addEventListener('touchmove', function(ev){
    
    var touchLocation = ev.targetTouches[0];

    colorRed = touchLocation.pageX;
    colorBlue = touchLocation.pageY;

})

function gameLoop(){

    ctx.fillStyle = 'green';
    ctx.fillRect(0,0, canvas.width,canvas.height);

    colorRed = xRec /canvas.width * 255
    colorBlue = yRec/canvas.height * 255
    
    ctx.fillStyle = "rgb("+ colorRed +","+ 0 +","+ colorBlue +")";
    ctx.fillRect(xRec,yRec ,100,100);
    
    colorRed = Math.floor(colorRed)
    colorBlue = Math.floor(colorBlue)

    
    debugText.textContent = "Debug console1 : " + colorRed + "mdr" + colorBlue;
   

}
   
setInterval (gameLoop,1000/60)
