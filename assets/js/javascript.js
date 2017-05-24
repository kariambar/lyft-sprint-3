var btnFono = document.getElementById("boton-rosado");
var start = document.getElementById("play");
var play = document.getElementsByClassName("play-width")[0];
var fondo = document.getElementById("auto");

btnFono.addEventListener("click",function(){
	var fono = document.getElementById("fono").value;
	if(!(/^\d{9}$/.test(fono))) {
  		alert("Debes ingresar un número de nueve dígitos");
	}else{
		alert("¡Gracias por registrarte con nosotros!");
	}

	fono = " ";
});

start.addEventListener("click", function(){
	play.removeChild(fondo);
	
	var newCaja = document.createElement("div");
	newCaja.setAttribute("id","juego");

	play.appendChild(newCaja);

});

/*alert("hola");
//INTENTANDO VALIDAR EL TELEFONO version 2
document.getElementById("boton-rosado").addEventListener("click",function(){
	var inputNumber = document.getElementById("input-number");
	event.preventDefault(); 
	
	if(validarFono(inputNumber)){
		alert("Gracias!");
	}
});

function validarFono(inputNumber){
	var fono = /^[0-9]{9,11}$/;
	if(inputNumber.value.match(fono)){
		inputNumber.value = "";
		return true;
	}else{
		inputNumber.value = "";
		alert("Debe ingresar un numero válido de 9 digitos");  
		inputNumber.focus();  
		return false; 
	}
}


//Intento de mostrar el evento al apretar el boton click
var anadir = document.getElementById('play');
anadir.addEventListener("click", function);

function Ocultar(){
	document.getElementsClassName("contenido").style.display = "none";
}
*/

//INTENTO DE CASILLAS PARA JUEGO

//Defino el tablero
var tablero = [
for (i=0 ; i<6 ; i++){
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]
}
//Ingreso el auto en la posicion 3,5
tablero[3][5] = "A";

//Obtengo el div en donde se dibujará el tablero
var divTablero = document.getElementById("tablero");

//Variables temporales
var fila, casilla;

//Recorro el arreglo para dibujar el tablero
for(var i = 0; i<tablero.length; i++){
  fila = document.createElement("div");
  fila.classList.add("fila");
  for(var j = 0; j<tablero[i].length; j++){
    casilla = document.createElement("div");
    casilla.innerHTML = tablero[i][j];
    casilla.classList.add("casilla")
    fila.appendChild(casilla);
  }
  divTablero.appendChild(fila);
}

//Intento de mover teclas dentro del tablero
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "pink";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}*/