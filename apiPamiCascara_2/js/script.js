window.addEventListener('load',Inicializar);

function Inicializar()
{
    //let btnRecarga = document.getElementById("btnRecargar");
    //btnRecarga.addEventListener('click',ObtenerCoordenadas);
    let ciudadesSelect = document.getElementById("ciudades");
    TraerCiudades(ciudadesSelect);
    ciudadesSelect.addEventListener('change',Seleccionado)

}

function Seleccionado(e)
{
 console.log(this.value);
 TraerDatos(this.value);
}

function FiltrarCiudades(arr)
{
  let filtro = arr.filter(a=>a.country == "AR").map(a=>[a.name, a.id]).sort();
  return filtro;
}

function CargarLista(lista, arr)
{
  BorrarSelect(lista);
  arr.forEach(element => {
    let opcion = document.createElement('option');
    let texto = document.createTextNode(element[0]);
    opcion.appendChild(texto);
    opcion.setAttribute('value',element[1]);
    lista.appendChild(opcion);
  });
}

function BorrarSelect(lista)
{
  while(lista.hasChildNodes())
  {
    lista.removeChild(lista.firstElementChild);
  }
}

function TraerCiudades(selectCiudad)
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
          console.log("Datos Obtenidos");
          let totalCiudades =JSON.parse(xhr.responseText);
          let ciudadFiltradas = FiltrarCiudades(totalCiudades);
          CargarLista(selectCiudad,ciudadFiltradas);
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
    xhr.open('GET',"./city.list.json",true);
    //Envia la request
    xhr.send();
}










function TraerDatos(idCiudad)
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
          console.log("Datos Obtenidos");
          //Parse la respuesta en JSON
          let clima = JSON.parse(xhr.responseText);
          console.log(clima);
          CargarDatos(clima);
          //infoDiv.appendChild(CrearTabla(personas));
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
    let direccion = "https://api.openweathermap.org/data/2.5/weather?id="+encodeURI(idCiudad)+"&units=metric&lang=es&appid=a9ad4ffc5108e882432383077d46ef13"
    //Abre la request
    xhr.open('GET',direccion,true);
    //Envia la request
    xhr.send();




}

//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY
//https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,ar&appid=a9ad4ffc5108e882432383077d46ef13
//units=metric para que aparezca en C°
//lang=es para que sea español
//https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,ar&units=metric&appid=a9ad4ffc5108e882432383077d46ef13

function CargarDatos(clima)
{
    let ciudad = document.getElementById("ciudad");
    ciudad.innerHTML = clima.name;
    let divTemperatura = document.getElementById("temperatura");
    divTemperatura.innerHTML = "Temperatura: " + clima.main.temp + " °C";
    let divHumedad = document.getElementById("humedad");
    divHumedad.innerHTML = "Húmedad: " + clima.main.humidity + " %";
    let divPresion = document.getElementById("presion");
    divPresion.innerHTML = "Presión: " + clima.main.pressure + " hPa";
    let divViento = document.getElementById("viento");
    divViento.innerHTML = "Viento: " + clima.wind.speed + " Km/h";

    let divDescripcion = document.getElementById("descripcion");
    divDescripcion.innerHTML = "Se espera " + clima.weather[0].description;

    let divMaxMin = document.getElementById("minmax");
    divMaxMin.innerHTML = "Máxima: "+ clima.main.temp_max +" °C / Minima: "+ clima.main.temp_min +" °C ";

    CargarImagen(clima.weather[0].icon);

    let ultimaActualizacion = document.getElementById("ultimaAct");
    let fecha = new Date();
    ultimaActualizacion.innerHTML= "Ultima Actualizacion: "+ fecha.getDate();
}

function CargarImagen(icono)
{
    let imagen = document.getElementById("imagen");
    let direccion = "http://openweathermap.org/img/wn/"+icono+"@2x.png"
    imagen.setAttribute('src',direccion);


}

function ObtenerCoordenadas()
{
    // Geolocalizacion Posicionamiento actual
    //La ofi:
    //Latitude : -34.6079232
    //Longitude: -58.38274559999999
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };



    navigator.geolocation.getCurrentPosition(success, error, options);
}

function success(pos)
{
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');

    TraerDatos(crd);
}

function error(err)
{
    console.warn('ERROR(' + err.code + '): ' + err.message);
    TraerDatos(null);
}
