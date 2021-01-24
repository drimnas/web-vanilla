const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let xRec = canvas.width/2 -50
let yRec= canvas.height/2 -50
let colorRed = 0
let colorBlue = 0
let colorGreen = 0

var ongoingTouches = [];

debugText = document.getElementById('debug');


function startup() {
    var el = document.getElementById("canvas");
    el.addEventListener("mouseup", handleStart, false);
  //  el.addEventListener("touchend", handleEnd, false);
 //   el.addEventListener("touchcancel", handleCancel, false);
 //   el.addEventListener("touchmove", handleMove, false);
  }
  
  document.addEventListener("DOMContentLoaded", startup);
  
  var ongoingTouches = [];

  function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.");
    var el = document.getElementById("canvas");
    var ctx = el.getContext("2d");
    xRec = evt.x -70
    yRec = evt.y -70
   
  }

 
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
