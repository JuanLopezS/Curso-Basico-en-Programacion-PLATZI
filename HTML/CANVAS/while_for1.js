var p = document.getElementById("my_picture"); //especifica el ID para dibujar
var canv = p.getContext("2d"); // metodo de canvas en contexto 2D
var lines = 30;
var y_end1 = 10, x_init = 0, i;

for(i = lines; i > 0; i--)
{
  draw_line("red", x_init, 0, 300, y_end1); // parameter initial
  x_init += 10;
  y_end1 += 10;
}
draw_line("blue", 1,1,300,1);
draw_line("blue", 299,1,299,299);
function draw_line(color, x_initial, y_initial, x_end, y_end)
{
  canv.beginPath(); // comienzo de canvas
  canv.strokeStyle = color; // color estilo
  canv.moveTo(x_initial, y_initial); //punto de inicio
  canv.lineTo(x_end, y_end); //trazar linea a 200, 200
  canv.stroke();
  canv.closePath(); //termizar trazo
}
