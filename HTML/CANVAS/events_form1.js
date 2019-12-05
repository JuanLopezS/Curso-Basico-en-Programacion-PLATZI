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
  // al igual que C las variables solo funcionan dentro de la funcion como lines, i, y_init, etc, solo lo necesitamos
  //en esta funcion, externamente no lo necesitamos, como por ejemplo var p o var canv.
  var lines = parseInt(text1.value); // text1.value es el valor cuando escribo en la caja de texto
// si solo escribo text1 me representa todo el html .value es un atributo de text1 del valor escrito

  var i = 0;
  var y_init = 0, x_end1 = 10;

  while(i < lines)
  {
    draw_line("red", 0, y_init, x_end1, 300); // parameter initial
    console.log("line " + i); // validate in console
    i += 1;
    y_init += width1/lines;
    x_end1 += width1/lines;
  }
  draw_line("blue", 1,1,1,299);
  draw_line("blue", 1,299,299,299);

console.log(text1);
}
