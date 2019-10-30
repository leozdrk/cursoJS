window.addEventListener('load',CargarGlobal);

function CargarGlobal()
{
  let boton = document.getElementById("btn_traer");
  boton.addEventListener('click',TraerTexto);
}

function TraerTexto()
{
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    //Evalua el estado, cuando cambie se ejecuta
    //Se ejecuta 5 veces por peticion.
    if(xhr.readyState == 4)
    {
      if(xhr.status == 200)
      {
        // 200 es todo OK
        let div = document.getElementById("div_texto");
        div.innerText = xhr.responseText;

        // Limpio el loader
        let span = document.getElementById("loader");
        span.innerHTML = "";
      }
      else
      {
        console.log(xhr.status + ": " + xhr.statusText);
      }
    }
    else
    {
      let span = document.getElementById("loader");
      span.innerHTML = "<img src='./457.gif'></img>";
    }
  };
  //Abre la request
  xhr.open('GET','./documento.txt',true);
  //Envia la request
  xhr.send();
}

