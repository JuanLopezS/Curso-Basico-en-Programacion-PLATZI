var keys = {UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39};

document.addEventListener("keydown",drawKeyboard);
var square = document.getElementById("draw");
var paper = square.getContext("2d");
var x = 200;
var y = 200;
draw_line("blue", x - 1, y - 1, x + 1, y + 1, paper);
function draw_line(color, x_initial, y_initial, x_end, y_end, canv)
{
  canv.beginPath();
  canv.strokeStyle = color;
  canv.lineWidth = 3;
  canv.moveTo(x_initial, y_initial);
  canv.lineTo(x_end, y_end);
  canv.stroke();
  canv.closePath();
}

function drawKeyboard(event)
{
  var color1 = "blue";
  var n = 2;
  switch (event.keyCode)
  {
    case keys.UP:
      draw_line(color1, x, y, x , y - n, paper);
      y -= n;
      break;
    case keys.DOWN:
      draw_line(color1, x, y, x , y + n, paper);
      y += n;
      break;
    case keys.LEFT:
      draw_line(color1, x, y, x - n , y, paper);
      x -= n;
      break;
    case keys.RIGHT:
      draw_line(color1, x, y, x + n , y, paper);
      x += n;
      break;
    default:
      console.log("OTHER KEY");
    }
}
