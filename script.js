var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d')
var isMouseDown = false;

//  canvas.width = window.innerWidth;
//  canvas.height = window.innerHeight;

 canvas.addEventListener('mousedown', function(){
    isMouseDown = true;
 })

 canvas.addEventListener('mouseup', function () {
    isMouseDown = false;
    ctx.beginPath();
 })

 ctx.lineWidth = 5 * 2;

 function clear() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = 'black';
 }



 canvas.addEventListener('mousemove', function(e) {
    if(isMouseDown) {
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY)
        ctx.stroke()
    }
 })

 var btn = document.createElement('button')
 btn.innerText = 'Clear';
 btn.onclick = clear;
 document.body.appendChild(btn)

