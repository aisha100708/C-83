var last_position_x;
var last_position_y;
var current_position_x;
var current_position_y;
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var color = "black";
var line_width = 1;
var screen_width = screen.width;
var new_width = screen_width - 70;
var new_height = screen.height - 300;
if (screen_width < 992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(event) {
    color = document.getElementById("color_input").value;
    line_width = document.getElementById("width_input").value;
    last_position_x = event.touches[0].clientX - canvas.offsetLeft;
    last_position_y = event.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(event) {
    current_position_x = event.touches[0].clientX - canvas.offsetLeft;
    current_position_y = event.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_position_x, last_position_y);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    last_position_x = current_position_x;
    last_position_y = current_position_y;
}
function Clear_Area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}