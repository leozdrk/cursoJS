window.addEventListener('load',Iniciar);

function Iniciar()
{
  let boton = document.getElementById("btnTraer");
  boton.addEventListener('click',TraerDatos);
}

function TraerDatos()
{
  //Me voy a traer un JSON
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
        //Parse la respuesta en JSON
        let personas = JSON.parse(xhr.responseText);
        console.log(personas);
        infoDiv.appendChild(CrearTabla(personas));
      }
      else
      {
        console.log(xhr.status + ": " + xhr.statusText);
      }
    }
    else
    {
      console.log("loading...");
    }
  };
  //Abre la request
  xhr.open('GET','pagina.php',true);
  //Envia la request
  xhr.send();
}

function CrearTabla(lista)
{
  let tabla =document.createElement('table');
  let encabezado = document.createElement('tr'); //Fila de encabezado

  //recorro el primer elemento para obtener el nombre de cada encabezado
  for (const dato in lista[0])
  {
    let fEncabezado = document.createElement('th');

    //fEncabezado.setAttribute('style','background:green');
    //let texto = document.createTextNode(dato);
    //fEncabezado.appendChild(texto);
    fEncabezado.textContent = dato;

    encabezado.appendChild(fEncabezado);
  }
  //Agrego el encabezado completo a la tabla
  tabla.appendChild(encabezado);

  for (let i = 0; i < lista.length; i++)
  {
    let tr = document.createElement('tr');
    for (const dato in lista[i])
    {
      let td = document.createElement('td');
      td.textContent = lista[i][dato];
      tr.appendChild(td);
    }
    tabla.appendChild(tr);
  }
  tabla.setAttribute('class', 'table table-striped table-hover');
  return tabla;
}
