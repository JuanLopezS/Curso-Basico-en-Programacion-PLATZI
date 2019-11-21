var p = document.getElementById("my_picture"); //especifica el ID para dibujar
var canv = p.getContext("2d"); // metodo de canvas en contexto 2D

canv.beginPath(); // comienzo de canvas
canv.strokeStyle = "red"; // color estilo
canv.moveTo(140,70); //punto de inicio
canv.lineTo(260,200); //trazar linea a 200, 200
canv.stroke();
lienzo.closePath(); //termizar trazo
