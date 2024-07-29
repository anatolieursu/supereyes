const mainBox = document.getElementById("main_box");
const followShape = document.getElementById("follow_shape");

let timeout = 700;
let the_interval;
function setTheInt(){
    the_interval = setInterval(() => {
        const maxW = mainBox.offsetWidth - followShape.offsetWidth;
        const maxH = mainBox.offsetHeight - followShape.offsetHeight;

        const xCoordinates = Math.floor(Math.random() * maxW);
        const yCoordinates = Math.floor(Math.random() * maxH);

        const xP = (xCoordinates / mainBox.offsetWidth) * 100;
        const yP = (yCoordinates / mainBox.offsetHeight) * 100;

        followShape.style.left = xP + "%";
        followShape.style.top = yP + "%";
    }, timeout);
}

setTheInt()
document.getElementById("speed_range").addEventListener("change", (e) => {
    timeout = document.getElementById("speed_range").value
    clearInterval(the_interval)
    setTheInt()
})