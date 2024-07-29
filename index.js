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

const button_manage_time = document.getElementById("manage_time");
button_manage_time.addEventListener("click", () => {
    setInterval(() => {
        let current_time_seconds = document.getElementById("the_time").textContent;

        const time_in_seconds = parseInt(current_time_seconds) + 1;
        document.getElementById("the_time").textContent = time_in_seconds;

        let factor = Math.pow(10, 1);
        // Math.floor(num * factor) / factor;
        document.getElementById("time_in_mins").textContent = Math.floor(((time_in_seconds/60) * factor)) / factor;
    }, 1000)
})