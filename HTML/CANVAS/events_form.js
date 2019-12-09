var text1 = document.getElementById("text_lines"); // valor de caja de texto
var boton = document.getElementById("validate");
boton.addEventListener("click", draw_for_click);
//addEventListener espera que un evento ocurra de acuerdo a los parametros del usuario
// draw_for_click: espera que al boton le den click , se activa cuando ocurre este evento
var p = document.getElementById("my_picture"); //especifica el ID para dibujar, como una etiqueta en HTML trabaja en Java Script
var width1 = p.width;

var canv = p.getContext("2d"); // metodo de canvas en contexto 2D

function draw_line(color, x_initial, y_initial, x_end, y_end)
{
  canv.beginPath(); // comienzo de canvas
  canv.strokeStyle = color; // color estilo
  canv.moveTo(x_initial, y_initial); //punto de inicio
  canv.lineTo(x_end, y_end); //trazar linea a 200, 200
  canv.stroke();
  canv.closePath(); //termizar trazo
}

function draw_for_click()
{
  var lines = parseInt(text1.value);
  var i = 0;
  var y_init = 0, x_end1 = 10, y_end1 = 10, x_init = 0, y_initr = 300, x_end1r = 290;

  while(i < lines)
  {
    draw_line("blue", 0, y_init, x_end1, 300);
    draw_line("red", x_init, 0, 300, y_end1);
    draw_line("green", 0, y_initr, x_end1, 0);
    draw_line("yellow", 300, y_end1, x_end1r, 300);

    i += 1;
    y_init += width1/lines;
    x_end1 += width1/lines;
    x_init += width1/lines;
    y_end1 += width1/lines;
    x_end1r -= width1/lines;
    y_initr -= width1/lines;

  }
  i= 0;
  y_init = 0, x_end1 = 160, y_end1 = 160, x_init = 0, y_initr = 300, x_end1r = 140;
  while(i < lines)
  {
    draw_line("blue", 150, y_init, x_end1r, 150);
    draw_line("red", x_init, 150, 150, y_end1);
    draw_line("green", 150, y_initr, x_end1, 150);
    draw_line("black", 150, y_init, x_end1, 150);

    i += 1;
    y_init += (150)/lines;
    x_end1 += (150)/lines;
    x_init += (150)/lines;
    y_end1 += (150)/lines;
    x_end1r -= (150)/lines;
    y_initr -= (150)/lines;

  }
  draw_line("blue", 1,1,299,1);
  draw_line("blue", 299,1,299,299);
  draw_line("red", 1,1,1,299);
  draw_line("red", 1,299,299,299);
  draw_line("black", 150, 0, 150,300);
  draw_line("black", 0, 150, 300, 150);



console.log(text1);
}
