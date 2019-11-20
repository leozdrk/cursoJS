//Equivale en jquery al js windows.AddEventListener('load',Cargar)
$(document).ready(Cargar);

function Cargar()
{
  //let btn = document.getelementbyud('btn1'); btn.addeventlistener('click',CambiarTitulo);
  //Con #ID se trae el elemnto por id
  $('#btn1').click(CambiarTitulo);
  $('#btn2').click(CapturarTitulo);
  $('#btn3').click(CambiarTexto);

  $('#btn4').click(CambiarColorEncabezado);
  $('#btn5').click(RetornoPropiedades);
  $('#btn6').click(QuitarColor);
}

function CambiarTitulo()
{
  //document.getemelementbytargetname('h1')[0].InnerHTML = "Saludos Invocador"
  $('h1').text('Saludos invocador');
}

function CapturarTitulo()
{
  console.log($('h1').text());
}

function CambiarTexto()
{
  //$('p'). Trae TODOS los parrafos, no puedo seleccionar uno en particular
  $('p').text("Cambio de texto en los parrafos");
}

function CambiarColorEncabezado()
{
  $('th').attr('style','background-color: blue; color: green');
  $('td').css('color','red');
}

function RetornoPropiedades()
{
  console.log($('th').attr('style'));
}

function QuitarColor()
{

}
