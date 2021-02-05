/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombre;
	let apellido;
	let edad;
	

	nombre = document.getElementById("txtIdNombre").value;
	//apellido = prompt("Ingrese su apellido: ");               //Ejercicio 5bis (Alternativa pedida por los profes)
	edad = document.getElementById("txtIdEdad").value;

	alert("Usted se llama "+ nombre+" "+ apellido +" Y tiene "+edad+ " años");

}
//Nombre: Miguel Gaston Sanchez
