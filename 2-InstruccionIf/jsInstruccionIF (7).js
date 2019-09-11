function mostrar()
{
  //tomo la edad
  var edad = document.getElementById("edad").value;
  var estadoCivil = document.getElementById("estadoCivil").value;
  if(edad < 18 && estadoCivil != "Soltero")
  {
    alert("Es muy pequeño para no ser soltero");
  }


}//FIN DE LA FUNCIÓN
