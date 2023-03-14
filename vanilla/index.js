const frame = document.getElementById("frame");
const frameWidth = frame.offsetWidth;
const frameHeight = frame.offsetHeight;
const ctx = frame.getContext("2d");

console.log(frameWidth);
console.log(frameHeight);

let mouseX = 0;
let mouseY = 0;

const boundary = frame.getBoundingClientRect();

let size = 100;
addEventListener("mousedown", (e) => {
  size -= 5;
})

addEventListener("mouseup", (e) => {
  setTimeout(() => {
    size += 1;
  }, 1000);
})

addEventListener("mousemove", (e) => {
  console.log(boundary.bottom, boundary.right);
  if (e.clientX < boundary.right &&
    e.clientY < boundary.bottom
  ) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }
})

function animate() {
  ctx.clearRect(0, 0, frameWidth, frameHeight);
  ctx.fillRect(mouseX - size / 2, mouseY - size / 2, size, size); 
  if(size > 0){
    requestAnimationFrame(animate);
  }
}
animate();

