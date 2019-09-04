/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    importe = parseInt(document.getElementById("importe").value);

    var resultado = importe - ((importe*25)/100);

    document.getElementById("resultado").value = resultado;
}
