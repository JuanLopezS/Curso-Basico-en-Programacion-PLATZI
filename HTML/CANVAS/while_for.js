var p = document.getElementById("my_picture"); //especifica el ID para dibujar
var canv = p.getContext("2d"); // metodo de canvas en contexto 2D
var lines = 30;
var i = 0;
var y_init = 0, x_end1 = 10;

while(i < lines)
{
  draw_line("red", 0, y_init, x_end1, 300); // parameter initial
  console.log("line " + i); // validate in console
  i += 1;
  y_init += 10;
  x_end1 += 10;
}
draw_line("blue", 1,1,1,300);
draw_line("blue", 1,299,299,299);
function draw_line(color, x_initial, y_initial, x_end, y_end)
{
  canv.beginPath(); // comienzo de canvas
  canv.strokeStyle = color; // color estilo
  canv.moveTo(x_initial, y_initial); //punto de inicio
  canv.lineTo(x_end, y_end); //trazar linea a 200, 200
  canv.stroke();
  canv.closePath(); //termizar trazo
}
