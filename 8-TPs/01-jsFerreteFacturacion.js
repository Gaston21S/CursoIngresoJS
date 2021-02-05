/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let resultado;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;           //Tomamos primero la ID de los tres cuadros de precios
	precio3 = txtIdPrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultado = (precio1)+(precio2)+(precio3);
	alert("La suma de los precios es: "+ resultado)


	
}
function Promedio () 
{
	let precio1;
	let precio2;
	let precio3;
	let resultado;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;
	precio3 = txtIdPrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultado = (precio1 + precio2 + precio3)/3; //No olvidar separar en terminos la suma para no mezclar con la division.

	alert("El promedio de los precios es: "+resultado)

	
}
function PrecioFinal () 
{
	let precio1;
	let precio2;
	let precio3;
	let resultado;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;           
	precio3 = txtIdPrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultado = (precio1+precio2+precio3)*1.21; //IVA es 1.21 multiplicar

	alert("El precio final es: "+resultado);


	
}