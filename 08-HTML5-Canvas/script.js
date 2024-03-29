const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;    
ctx.strokeStyle = "#BADA55";
ctx.lineWidth = 1;
ctx.lineJoin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lineX  = 0;
let lineY  = 0; 
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return;
    ctx.beginPath()
    ctx.strokeStyle = `hsl(${hue}, 100%, 70%)`
    ctx.moveTo(lineX, lineY);
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [lineX, lineY] = [e.offsetX, e.offsetY];
    // console.log(e);s
    hue++;
    console.log(ctx.lineWidth)
    if(hue>= 360){
        hue = 0;
    }

    if(ctx.lineWidth >= 70 || ctx.lineWidth <= 1){
        direction = !direction;
    }

    if(direction){
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--; 
    }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e)=> {
    isDrawing = true;
    [lineX, lineY] = [e.offsetX, e.offsetY];
})
canvas.addEventListener("mouseout", ()=> isDrawing = false);
canvas.addEventListener("mouseup", ()=> isDrawing = false); 