console.log(persona);

/*
<table></table> Tabla
<tr></tr> Fila
<td></td> Es la celda (como una columna)
<th></th>  Es el encabezado
<thead></thead> Es la fila de encabezados (th)
<tbody></tbody> es la tabla de datos (td)
<tfoot></tfoot> Es la fila de pie de tabla

<table border="1px solid black" style="border-collapse:collapse">
*/
let div;
window.addEventListener("load",CargarGlobales);

function CargarGlobales()
{
  div = document.getElementById("divTabla");
  console.log(div);
  let tabla = CrearTabla(persona);
  div.appendChild(tabla);
}

function CrearTabla(lista)
{
  let tabla =document.createElement('table');
  let encabezado = document.createElement('tr'); //Fila de encabezado

  //recorro el primer elemento para obtener el nombre de cada encabezado
  for (const dato in lista[0])
  {
    let fEncabezado = document.createElement('th');

    fEncabezado.setAttribute('style','background:green');
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

  tabla.setAttribute('border', '1px solid black');
  tabla.setAttribute('style', 'border-collapse: collapse');
  return tabla;
}


