function mostrar()
{
//tomo la edad
  var edad = document.getElementById("edad").value;
  if(edad < 13)
  {
    alert("Es un Niño");
  }
  else
  {
    if(edad <= 17)
    {
      alert("Es un Adolecente");
    }
    else
    {
      alert("Es mayor de Edad")
    }
  }



}//FIN DE LA FUNCIÓN
