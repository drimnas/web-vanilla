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
    el.addEventListener("touchstart", handleStart, false);
  }
  
  document.addEventListener("DOMContentLoaded", startup);


  function handleStart(evt) {
    evt.preventDefault();
    console.log("touchstart.");
    var el = document.getElementById("canvas");
    var ctx2 = el.getContext("2d");
    var touches = evt.changedTouches;
  
    for (var i = 0; i < touches.length; i++) {
      console.log("touchstart:" + i + "...");
      ongoingTouches.push(copyTouch(touches[i]));
      var color = colorForTouch(touches[i]);
      ctx2.beginPath();
      ctx2.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
      ctx2.fillStyle = color;
      ctx2.fill();
      console.log("touchstart:" + i + ".");
      colorBlue += 10;
    }
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

    
    debugText.textContent = "Debug console : " + colorRed + "mdr" + colorBlue;
   

}
   
setInterval (gameLoop,1000/60)
