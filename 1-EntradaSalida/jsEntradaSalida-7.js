/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var num1, num2;

function cargarValores()
{
    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
}

function sumar()
{	
    cargarValores();
    alert("La suma es: " + (num1 + num2));
}

function restar()
{
    cargarValores();
	alert ("La resta es: " + (num1 - num2));
}

function multiplicar()
{ 
    cargarValores();
	alert ("La multiplicacion es: " + (num1 * num2));
}

function dividir()
{
    cargarValores();
	alert ("La division es: " + (num1 / num2));
}

