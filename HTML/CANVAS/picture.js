var p = document.getElementById("my_picture"); //especifica el ID para dibujar
var canv = p.getContext("2d"); // metodo de canvas en contexto 2D

draw_line("pink", 10, 234, 123, 56); // parameter1
draw_line("red", 210, 134, 23, 156); // parameter2
draw_line("blue", 10, 13, 223, 156); // parameter3

function draw_line(color, x_initial, y_initial, x_end, y_end)
{
  canv.beginPath(); // comienzo de canvas
  canv.strokeStyle = color; // color estilo
  canv.moveTo(x_initial, y_initial); //punto de inicio
  canv.lineTo(x_end, y_end); //trazar linea a 200, 200
  canv.stroke();
  canv.closePath(); //termizar trazo
}
