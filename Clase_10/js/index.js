window.addEventListener('load',CargarVariables);

function CargarVariables()
{
  let form = document.getElementById("formulario");

  form.addEventListener("submit",CapturarEnvio);
  let boton = document.getElementById("btnTraer");
  boton.addEventListener("click",TraerDatos);
}

function CapturarEnvio(e)
{
  //Detiene el boton submit
  e.preventDefault();
  let nombre = document.getElementById("nombretxt").value;
  let edad = document.getElementById("edadtxt").value;
  //EnviarDatos(nombre,edad); Manda los datos por GET
  EnviarDatosPOST(nombre,edad); //Manda los datos por POST
}

function EnviarDatos(nombre,edad)
{
  let infoDiv = document.getElementById("info");
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    //Evalua el estado, cuando cambie se ejecuta
    //Se ejecuta 5 veces por peticion.
    if(xhr.readyState == 4)
    {
      if(xhr.status == 200)
      {
        // 200 es todo OK
        console.log("Todo OK");
        infoDiv.innerText = xhr.responseText;
      }
      else
      {
        console.log(xhr.status + ": " + xhr.statusText);
      }
    }
    else
    {
      console.log("loading...");
      infoDiv.appendChild(CrearSpinner());
    }
  };
  //Abre la request
  let peticion = 'http://127.0.0.1:80/pagina.php?nombre='+nombre+'&edad='+edad;
  xhr.open('GET',peticion,true);
  //Envia la request
  xhr.send();
}

function EnviarDatosPOST(nombre,edad)
{
  let infoDiv = document.getElementById("info");
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    //Evalua el estado, cuando cambie se ejecuta
    //Se ejecuta 5 veces por peticion.
    if(xhr.readyState == 4)
    {
      if(xhr.status == 200)
      {
        // 200 es todo OK
        console.log("Todo OK");
        infoDiv.innerText = xhr.responseText;
      }
      else
      {
        console.log(xhr.status + ": " + xhr.statusText);
      }
    }
    else
    {
      console.log("loading...");
      infoDiv.appendChild(CrearSpinner());
    }
  };
  //Abre la request
  let peticion = 'pagina2.php';
  let datos = "nombre="+encodeURIComponent(nombre)+"&edad="+encodeURIComponent(edad);
  xhr.open('POST',peticion,true);
  //cuando es POST le aclaro el tipo de datos que voy a enviar
  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

  //Envia la request, cuando es POST, aca le paso los datos
  xhr.send(datos);
}

function CrearSpinner()
{
  let spinner = document.createElement('img');
  spinner.setAttribute('src','./image/smile.gif');
  return spinner;
}

function TraerDatos()
{
  //Me voy a traer un JSON
  let infoDiv = document.getElementById("infoRespuesta");
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    //Evalua el estado, cuando cambie se ejecuta
    //Se ejecuta 5 veces por peticion.
    if(xhr.readyState == 4)
    {
      if(xhr.status == 200)
      {
        // 200 es todo OK
        console.log("Todo OK");
        //Parse la respuesta en JSON
        let ironman = JSON.parse(xhr.responseText);
        console.log(ironman);
        infoDiv.innerText = ironman.Apellido;
      }
      else
      {
        console.log(xhr.status + ": " + xhr.statusText);
      }
    }
    else
    {
      console.log("loading...");
      infoDiv.appendChild(CrearSpinner());
    }
  };
  //Abre la request
  xhr.open('GET','pagina3.php',true);
  //Envia la request
  xhr.send();
}
