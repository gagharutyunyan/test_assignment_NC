const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const pi = Math.PI;

// Triangle
ctx.beginPath();
ctx.moveTo(200, 20);
ctx.lineTo(0, 250);
ctx.lineTo(400, 250);
ctx.fillStyle = "#109bfc";
ctx.fill();

// Circle
ctx.beginPath();
ctx.arc(665, 150, 130, 0, 2 * pi);
ctx.fillStyle = "#109bfc";
ctx.fill();

// Square
ctx.beginPath();
ctx.fillStyle = "#109bfc";
ctx.fillRect(550, 350, 250, 250);

// Rectangle
ctx.beginPath();
ctx.fillRect(0, 346, 354, 250);
ctx.fillStyle = "#109bfc";
