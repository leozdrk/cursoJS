function mostrar()
{
  //Genero el número RANDOM entre 1 y 10
  var maximo = 10;
  var minimo = 1;
	var num= Math.floor(Math.random() * ((maximo+1) - minimo) + minimo);
  alert("Valor aleatorio: " + num);
}//FIN DE LA FUNCIÓN
