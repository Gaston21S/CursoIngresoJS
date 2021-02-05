/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// reservamos la variable
	let apellido;
	// guardamos el contenido de la variable en el prompt para que el usuario pueda ingresar su apellido
	apellido = prompt("Ingrese su apellido: ");
	document.getElementById("txtIdNombre").value = apellido;

}

