/*
Seleccionar un pais
actualizar listas

*/
window.addEventListener("load",CargarGlobales);
let listaPais, listaCiudad;

function CargarGlobales()
{
  listaPais = document.getElementById("listaPais");
  listaCiudad = document.getElementById("listaCiudad");
  let paises = CargarPaises(datos);
  CargarLista(listaPais,paises);
  listaPais.addEventListener('change',CargarCiudades_select);
  //Cargo las ciudades del pais que venga por defecto
  CargarCiudades_select();
}

function CargarCiudades_select()
{
  let paisSeleccionado = listaPais.value;
  let ciudades = CargarCiudades(datos,paisSeleccionado);
  CargarLista(listaCiudad,ciudades);
}

function CargarPaises(arr)
{
  //let paises = arr.map(function(a){return a.pais});
  let paises = arr.map(a=>a.pais).unique();
  return paises;
}

function CargarCiudades(arr,pais)
{
  let ciudades = arr.filter(a=>a.pais == pais).map(a=>a.ciudad).unique();
  return ciudades;
}

function CargarLista(lista, arr)
{
  BorrarSelect(lista);
  arr.forEach(element => {
    let opcion = document.createElement('option');
    let texto = document.createTextNode(element);
    opcion.appendChild(texto);
    opcion.setAttribute('value',element);
    lista.appendChild(opcion);
  });
}

//Agrego a todos los array una nueva funcion que se llama unique
//set deja los valores unico
//... transforma los objetos en un array (es como hacer un for de los objetos y agregar un push por cada uno)
Array.prototype.unique = function(){
  return [ ... new Set(this)];
};

function BorrarSelect(lista)
{
  while(lista.hasChildNodes())
  {
    lista.removeChild(lista.firstElementChild);
  }
}
