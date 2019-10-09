let listaPersona = [];
// Es lo mismo definir un array como 1 o 3
// let listaPersona = new Array();


window.addEventListener('load',function(){
  //Traigo el formulario por ID - Opcion 1
  //var frm = this.document.getElementById("frmPersona");

  //Traigo todos los formularios del documento - Opcion 2
  //var frm = this.document.getElementsByTagName('form')[0]

  //traigo el formulario que quiero - opcion 3
  var frm = this.document.forms[0];
  var boton = this.document.getElementById("MostrarListado");
  frm.addEventListener('submit',ManejarSubmit);
  boton.addEventListener("click",MostrarListado);
});

function Persona(nombre,apellido,edad,genero,maneja,nada,bicicleta,pais)
{
    //Creo las caracteristicas y eventos
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.maneja = maneja;
    this.nada = nada;
    this.bicicleta = bicicleta;
    this.pais = pais;

    //Metodos
    this.Presentarse = Presentarse;
    this.Hobbies = Hobbies;
}

function Presentarse()
{
    console.log("Me presento, mi nombre completo es " + this.nombre + " " + this.apellido + ". Mi edad es " + this.edad + " y mi nacionalidad es " + this.pais);
}

function Hobbies()
{
  var texto = "Mis Hobbies son: ";
  if(this.maneja)
  {
    texto += "Manejar automoviles, ";
  }
  if(this.nada)
  {
    texto += "Nadar en la pileta, ";
  }
  if(this.bicicleta)
  {
    texto += "Dar paseos en bicicleta.";
  }
  console.log(texto);
}

function MostrarListado()
{
  for (const persona of listaPersona) {
    console.log(persona.Presentarse());
  }
  let nroPersona = parseInt(document.getElementById("nroPersona").value);
  document.getElementById('txtNombre2').value=listaPersona[nroPersona].nombre;
  document.getElementById('txtApellido2').value=listaPersona[nroPersona].apellido;
  document.getElementById('txtEdad2').value=listaPersona[nroPersona].edad;
}

function ManejarSubmit(e)
{
  //preventDefault anula el comportamiento del boton submit del Form
  e.preventDefault();
  console.log("Capture el evento de submit");

  //Agrego a la lista a la Persona cargada
  listaPersona.push(TraerPersona());

  //Limpio el formulario
  LimpiarForm();
}

function TraerPersona()
{
  //Capturo los datos del HTML
  var nombre = document.getElementById('txtNombre').value;
  var apellido = document.getElementById('txtApellido').value;
  var edad = parseInt(document.getElementById('txtEdad').value);

  var genero = document.getElementById('rdoMasculino').checked;
  if(genero)
    genero = "Masculino";
  else
    genero = "Femenino";

  var maneja = document.getElementById('chkManeja').checked;
  var nada = document.getElementById('chkNadar').checked;
  var bicicleta = document.getElementById('chkBici').checked;

  var pais = document.getElementById('selPais').value;

  //Crear Persona
  var nuevaPersona = new Persona(nombre,apellido,edad,genero,maneja,nada,bicicleta,pais);
  return nuevaPersona;
}

function LimpiarForm()
{
  document.getElementById('txtNombre').value = "";
  document.getElementById('txtApellido').value = "";
  document.getElementById('txtEdad').value = "";
  document.getElementById('rdoMasculino').checked = false;
  document.getElementById('chkManeja').checked = false;
  document.getElementById('chkNadar').checked = false;
  document.getElementById('chkBici').checked = false;
  document.getElementById('selPais').value = "ar";
}
