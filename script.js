document.addEventListener("DOMContentLoaded", start);
console.log('działa');
let canvas = document.getElementById("editor");
let ctx = canvas.getContext("2d");
let image;
let  mouseDown = false;

function start(){
    console.log('działa');
    loadImg();
    ctx.strokeStyke = 'purple';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    canvas.addEventListener('mousedown', down);
    canvas.addEventListener('mouseup', toggleDraw);
    canvas.addEventListener('mousemove', function(event){
        let mousePosition = getMousePosition(canvas, event);
        let positionX = mousePosition.x;
        let positionY = mousePosition.y;
        draw(canvas, positionX, positionY);
    });
}

function loadImg (){
    console.log('dziala');
    image = new Image();
    image.src = 'https://www.wykop.pl/cdn/c3201142/comment_MzEwETvgHANGlzTFlFo9SA22cXLFiOAJ.jpg';
    image.onload = function() {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
}

function down (){
    mouseDown = true;
}

function toggleDraw(){
    mouseDown = false;
}

function getMousePosition(canvas, event){
    let rectangle = canvas.getBoundingClientRect();
    return{x:event.clientX - rectangle.left,
        y:event.clientY - rectangle.top}
}

function draw (canvas, positionX, positionY){
    if(mouseDown){
        ctx.fillRect(positionX, positionY, 4, 4);
    }
}
