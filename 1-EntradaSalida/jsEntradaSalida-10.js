/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultado;
	let descuento;

	importe = txtIdImporte.value;
	importe = parseInt(importe); //parseInt para transformar en entero el numero ingresado.
	descuento = importe *25/100;
	resultado = (importe) - (descuento); //Poner entre parentesis las restas

	txtIdResultado.value = resultado; //Primero se pone la ID, despues la variable


	
}
//txtIdImporte