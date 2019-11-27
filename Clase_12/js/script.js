//$(document).on('ready',Inicializar);
//$(Inicializar)
//Las 2 anteriores es lo mismo que la siguiente
$(document).ready(Inicializar);

function Inicializar()
{
  $('#btnLeft').click(Izquierda)
  $('#btnRight').click(Derecha)
  $('#btnUp').click(Arriba)
  $('#btnDown').click(Abajo)


  let persona = {nombre: 'Juan', apellido: 'Perez', edad: 25};
  $.each(persona, function(clave,valor){
    console.log("Mi "+ clave + " es " + valor);
  });
}

function Llegue()
{
  console.log("Ya me desplace");
}

//$('#btnLeft').on('click',Colorear) Agrega un evento que llame a la funcion Colorear al hacer click
//$('#btnLeft').off('click') Anula los eventos agregados
//$('#btnLeft').off('click',Colorear) Anula el evento click que llame a Colorear (solo ese)

function Izquierda()
{
  // el 5000 es que tarde 5 segundos en desplazarse
  // linear es como se deplaza (siempre a la misma velocidad)
  // Llegue es una funcion una vez que termine la animacion
  $('#miDiv').animate({left: '-=20px'}, 5000, 'linear', Llegue)
}

function Derecha()
{
  $('#miDiv').animate({left: '+=20px'})
}

function Arriba()
{
  $('#miDiv').animate({top: '-=20px'})
}

function Abajo()
{
  $('#miDiv').animate({top: '+=20px'})
}
