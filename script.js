const canvas = document.getElementById("canvases");
const con = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let Particles;

//The mouse position

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80);
}

window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }
)
//each particle
class particle {
    constructor (x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    //to draw a particle

    draw () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, math.PI * 2, false);
        ctx.fillStyle = ''
    }
}