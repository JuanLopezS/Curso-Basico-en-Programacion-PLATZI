var z;
var i, min = -10, max = 20;

z = randomNum(min, max);
document.write(z);
for (i = 0; i < 9; i++)
{
  z = randomNum(min, max);
  document.write(", " + z);
}
function randomNum(min, max)
{
  var number;
  var rand = Math.random();

  number = (Math.floor((rand * max) + min) - Math.floor(min * rand));
  return number;
}
